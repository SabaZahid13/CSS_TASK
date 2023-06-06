const express = require('express');
const router = express.Router();
const {getGoals,setGoals,updateGoals,deleteGoals} = require('../controllers/goalController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect,getGoals).post(protect,setGoals)
router.route('/:id').delete(protect,deleteGoals).put(protect,updateGoals)

module.exports = router

// router.get('/',(req,res) => {
//     res.status(200).json({ message:'get goals'});
// });
// router.post('/',(req,res) => {
//     res.status(200).json({ message:'set goals'});
// });
// router.put('/:id',(req,res) => {
//     res.status(200).json({ message:`update goal with id ${req.params.id}`});
// });
// router.delete('/:id',(req,res) => {
//     res.status(200).json({ message:`delete goal with id ${req.params.id}`});
// });
// router.get('/',getGoals );
// router.post('/',setGoals );
// router.put('/:id',updateGoals );
// router.delete('/:id',deleteGoals );

//const { protect } = require('../middleware/authMiddleware')


 