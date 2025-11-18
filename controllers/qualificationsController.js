const db = require('../db');

async function create(req, res, next) {
  try {
    const data = req.body;
    const [result] = await db.query(`INSERT INTO qualifications (person_id, qualification, work_capacity, market_insertion, qualification_goals, education_levels, professional_functions) VALUES (?, ?, ?, ?, ?, ?, ?)`, [data.person_id, data.qualification, data.work_capacity, data.market_insertion, data.qualification_goals, data.education_levels, data.professional_functions]);
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
    const sql = `UPDATE qualifications SET ${sets.join(', ')} WHERE id = ?`;
    const [result] = await db.query(sql, params);
    res.json({affectedRows: result.affectedRows});
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const id = req.params.id;
    const [rows] = await db.query('SELECT * FROM qualifications WHERE id = ?', [id]);
    res.json(rows[0] || null);
  } catch (err) {
    next(err);
  }
}

module.exports = { create, update, getById };
