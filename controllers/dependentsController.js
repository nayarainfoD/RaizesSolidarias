const db = require('../db');

async function create(req, res, next) {
  try {
    const data = req.body;
    const [result] = await db.query(`INSERT INTO dependents (household_id, has_children, has_elderly, has_disability, no_dependents, needs_care, impacts_budget) VALUES (?, ?, ?, ?, ?, ?, ?)`, [data.household_id, data.has_children, data.has_elderly, data.has_disability, data.no_dependents, data.needs_care, data.impacts_budget]);
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
    const sql = `UPDATE dependents SET ${sets.join(', ')} WHERE id = ?`;
    const [result] = await db.query(sql, params);
    res.json({affectedRows: result.affectedRows});
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const id = req.params.id;
    const [rows] = await db.query('SELECT * FROM dependents WHERE id = ?', [id]);
    res.json(rows[0] || null);
  } catch (err) {
    next(err);
  }
}

module.exports = { create, update, getById };
