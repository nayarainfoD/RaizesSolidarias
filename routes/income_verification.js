const express = require('express');
const router = express.Router();
const controller = require('../controllers/income_verificationController');

router.post('/', controller.create);
router.put('/:id', controller.update);
router.get('/:id', controller.getById);

module.exports = router;