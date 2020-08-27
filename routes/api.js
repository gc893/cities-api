var express = require('express');
var router = express.Router();
const citiesCtrl = require('../controllers/cities');

router.get('/', citiesCtrl.index);
router.get('/:id', citiesCtrl.show);
router.post('/', citiesCtrl.create);
router.put('/:id', citiesCtrl.update);
router.delete('/:id', citiesCtrl.delete);

module.exports = router;
