const express = require('express');
const router = express.Router();
const tutorsCtrl = require('../../controllers/api/tutors');

// GET /api/tutors
router.get('/', tutorsCtrl.index);
// GET /api/tutors/:id
router.get('/:id', tutorsCtrl.show);

module.exports = router;