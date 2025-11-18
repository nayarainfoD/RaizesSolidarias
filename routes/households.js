const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/householdsController');

router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.get('/:id', ctrl.getById);

module.exports = router;