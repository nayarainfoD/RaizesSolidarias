const db = require('../db')
async function create(req, res, next) {
  try {
    const d = req.body
    const [r] = await db.query('INSERT INTO persons (name, filiacao, cpf, rg, birth_date, social_id, sex) VALUES (?, ?, ?, ?, ?, ?, ?)', [d.name || null, d.filiacao || null, d.cpf || null, d.rg || null, d.birth_date || null, d.social_id || null, d.sex || null])
    const personId = r.insertId
    if (req.user && req.user.id) {
      await db.query('UPDATE users SET person_id = ? WHERE id = ?', [personId, req.user.id])
    }
    res.status(201).json({insertId: personId})
  } catch (err) {
    next(err)
  }
}
async function update(req, res, next) {
  try {
    const id = req.params.id
    const d = req.body
    const sets = []
    const params = []
    for (const k in d) { sets.push(k + ' = ?'); params.push(d[k]) }
    if (!sets.length) return res.status(400).json({error: 'no_fields'})
    params.push(id)
    const sql = `UPDATE persons SET ${sets.join(', ')} WHERE id = ?`
    const [result] = await db.query(sql, params)
    res.json({affectedRows: result.affectedRows})
  } catch (err) {
    next(err)
  }
}
async function getById(req, res, next) {
  try {
    const id = req.params.id
    const [rows] = await db.query('SELECT * FROM persons WHERE id = ?', [id])
    if (!rows.length) return res.status(404).json(null)
    const person = rows[0]
    const [userRows] = await db.query('SELECT id, cpf FROM users WHERE person_id = ?', [id])
    if (!userRows.length) return res.status(403).json({error: 'forbidden'})
    res.json(person)
  } catch (err) {
    next(err)
  }
}
module.exports = { create, update, getById }
