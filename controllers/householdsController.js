const db = require('../db');

async function create(req, res, next) {
  try {
    const d = req.body;
    const [result] = await db.query(
      `INSERT INTO households (responsible_name, responsible_cpf, total_members, room_count) VALUES (?, ?, ?, ?)`,
      [d.responsible_name || null, d.responsible_cpf || null, d.total_members || 0, d.room_count || 0]
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
    const sets = [];
    const params = [];
    for (const k in d) {
      sets.push(k + ' = ?');
      params.push(d[k]);
    }
    if (sets.length === 0) return res.status(400).json({error:'no_fields'});
    params.push(id);
    const sql = `UPDATE households SET ${sets.join(', ')} WHERE id = ?`;
    const [result] = await db.query(sql, params);
    res.json({affectedRows: result.affectedRows});
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const id = req.params.id;
    const [[houseRows]] = await Promise.all([
      db.query('SELECT * FROM households WHERE id = ?', [id])
    ]);
    const [house] = houseRows;
    if (!house) return res.status(404).json({error:'not_found'});
    const [[members],[incomes],[domicile],[dependents],[verification]] = await Promise.all([
      db.query('SELECT * FROM household_members WHERE household_id = ?', [id]),
      db.query('SELECT * FROM incomes WHERE household_id = ?', [id]),
      db.query('SELECT * FROM domicile_conditions WHERE household_id = ?', [id]),
      db.query('SELECT * FROM dependents WHERE household_id = ?', [id]),
      db.query('SELECT * FROM income_verification WHERE household_id = ?', [id])
    ]);
    res.json({house, members, incomes, domicile: domicile[0] || null, dependents: dependents[0] || null, verification: verification[0] || null});
  } catch (err) {
    next(err);
  }
}

module.exports = { create, update, getById };