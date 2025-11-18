const db = require('../db');

async function create(req, res, next) {
  try {
    const data = req.body;
    const [result] = await db.query(`INSERT INTO domicile_conditions (household_id, housing_type, has_water, has_electricity, has_sanitation, state_of_conservation, room_count) VALUES (?, ?, ?, ?, ?, ?, ?)`, [data.household_id, data.housing_type, data.has_water, data.has_electricity, data.has_sanitation, data.state_of_conservation, data.room_count]);
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
    const sql = `UPDATE domicile_conditions SET ${sets.join(', ')} WHERE id = ?`;
    const [result] = await db.query(sql, params);
    res.json({affectedRows: result.affectedRows});
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const id = req.params.id;
    const [rows] = await db.query('SELECT * FROM domicile_conditions WHERE id = ?', [id]);
    res.json(rows[0] || null);
  } catch (err) {
    next(err);
  }
}

module.exports = { create, update, getById };
