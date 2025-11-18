const db = require('../db');

async function create(req, res, next) {
  try {
    const data = req.body;
    const [result] = await db.query(`INSERT INTO addresses (person_id, street, number, neighborhood, city, municipality, complement) VALUES (?, ?, ?, ?, ?, ?, ?)`, [data.person_id, data.street, data.number, data.neighborhood, data.city, data.municipality, data.complement]);
    res.status(201).json({insertId: result.insertId});
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const id = req.params.id;
    const data = req.body;
    const sets = [];
    const params = [];
    for (const k in data) {
      sets.push(k + ' = ?');
      params.push(data[k]);
    }
    if (sets.length === 0) return res.status(400).json({error:'no_fields'});
    params.push(id);
    const sql = `UPDATE addresses SET ${sets.join(', ')} WHERE id = ?`;
    const [result] = await db.query(sql, params);
    res.json({affectedRows: result.affectedRows});
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const id = req.params.id;
    const [rows] = await db.query('SELECT * FROM addresses WHERE id = ?', [id]);
    res.json(rows[0] || null);
  } catch (err) {
    next(err);
  }
}

module.exports = { create, update, getById };
