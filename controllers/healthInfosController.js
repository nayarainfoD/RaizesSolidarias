const db = require('../db');

async function create(req, res, next) {
  try {
    const d = req.body;
    const [result] = await db.query(
      `INSERT INTO health_infos (member_id, condition, has_disease, disease_type, support_needs, influences_benefits) VALUES (?, ?, ?, ?, ?, ?)`,
      [d.member_id, d.condition || null, d.has_disease ? 1 : 0, d.disease_type || null, d.support_needs || null, d.influences_benefits ? 1 : 0]
    );
    res.status(201).json({insertId: result.insertId});
  } catch (err) { next(err); }
}

async function update(req, res, next) {
  try {
    const id = req.params.id; const d = req.body;
    const sets=[]; const params=[];
    for (const k in d){ sets.push(k+' = ?'); params.push(d[k]); }
    if (!sets.length) return res.status(400).json({error:'no_fields'});
    params.push(id);
    const sql = `UPDATE health_infos SET ${sets.join(', ')} WHERE id = ?`;
    const [result] = await db.query(sql, params);
    res.json({affectedRows: result.affectedRows});
  } catch (err) { next(err); }
}

async function getById(req, res, next) {
  try { const id = req.params.id; const [rows] = await db.query('SELECT * FROM health_infos WHERE id = ?', [id]); res.json(rows[0] || null); }
  catch (err) { next(err); }
}

module.exports = { create, update, getById };