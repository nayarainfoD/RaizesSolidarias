const db = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
async function register(req, res, next) {
  try {
    const d = req.body
    if (!d.cpf || !d.password) return res.status(400).json({error: 'cpf_and_password_required'})
    const [exists] = await db.query('SELECT id FROM users WHERE cpf = ?', [d.cpf])
    if (exists.length) return res.status(400).json({error: 'cpf_taken'})
    const passHash = await bcrypt.hash(d.password, 10)
    const [r] = await db.query('INSERT INTO users (cpf, password_hash) VALUES (?, ?)', [d.cpf, passHash])
    const userId = r.insertId
    const token = jwt.sign({userId}, process.env.JWT_SECRET || 'defaultsecret', {expiresIn: '30d'})
    res.status(201).json({token, userId})
  } catch (err) {
    next(err)
  }
}
async function login(req, res, next) {
  try {
    const d = req.body
    if (!d.cpf || !d.password) return res.status(400).json({error: 'cpf_and_password_required'})
    const [rows] = await db.query('SELECT * FROM users WHERE cpf = ?', [d.cpf])
    if (!rows.length) return res.status(400).json({error: 'invalid_credentials'})
    const user = rows[0]
    const ok = await bcrypt.compare(d.password, user.password_hash)
    if (!ok) return res.status(400).json({error: 'invalid_credentials'})
    const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET || 'defaultsecret', {expiresIn: '30d'})
    res.json({token, userId: user.id})
  } catch (err) {
    next(err)
  }
}
async function me(req, res, next) {
  try {
    const auth = req.headers.authorization
    if (!auth) return res.status(401).json({error: 'no_token'})
    const token = auth.slice(7)
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'defaultsecret')
    const [rows] = await db.query('SELECT id, cpf, person_id FROM users WHERE id = ?', [payload.userId])
    res.json(rows[0] || null)
  } catch (err) {
    next(err)
  }
}
module.exports = { register, login, me }
