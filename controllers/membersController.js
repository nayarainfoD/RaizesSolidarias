const db = require('../db');

async function create(req, res, next) {
  try {
    const d = req.body;
    const [result] = await db.query(
      `INSERT INTO household_members (household_id, name, cpf, relation, age, education, sex) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [d.household_id, d.name || null, d.cpf || null, d.relation || null, d.age || null, d.education || null, d.sex || null]
    );
    res.status(201).json({insertId: result.insertId});
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const id = req.params.id;
    const d = req.body;
    const sets = []; const params=[];
    for (const k in d){ sets.push(k+' = ?'); params.push(d[k]); }
    if (!sets.length) return res.status(400).json({error:'no_fields'});
    params.push(id);
    const sql = `UPDATE household_members SET ${sets.join(', ')} WHERE id = ?`;
    const [result] = await db.query(sql, params);
    res.json({affectedRows: result.affectedRows});
  } catch (err) { next(err); }
}

async function getById(req, res, next) {
  try {
    const id = req.params.id;
    const [rows] = await db.query('SELECT * FROM household_members WHERE id = ?', [id]);
    res.json(rows[0] || null);
  } catch (err) { next(err); }
}

module.exports = { create, update, getById };