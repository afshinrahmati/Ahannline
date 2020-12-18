const express =  require('express');
const router = express.Router();

// *******Controller **********8
const ControlleIndex = require('../Controller/ConrollerIndex');



router.get('/',ControlleIndex.One);
router.get('/recursive',ControlleIndex.Two);


module.exports = router;