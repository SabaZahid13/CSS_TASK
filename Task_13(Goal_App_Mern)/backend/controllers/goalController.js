const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');
// CRUD functions 
// GET access: private, route:GET/api/goals
const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find({user: req.user.id});
    res.status(200).json(goals);
});

// POST access: private, route:POST/api/goals
// const setGoals = (req,res) => {
//     if (!(req.body.text)) {
//         //res.status(400).json({ message:'please add text' });
//         throw new Error('Please add text');
//     }
//     res.status(200).json({ message:'set goals'});  
// }
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
      res.status(400)
      throw new Error('Please add text');
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
         
      });
      res.status(200).json(goal);  
});

// PUT access: private, route:PUT/api/goals/id
const updateGoals = asyncHandler(async (req,res) => {
    //res.status(200).json({ message:`update goal with id ${req.params.id}`});
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
      res.status(400)
      throw new Error('Goal not found')
    }
    //const user = await User.findById(req.user.id) 
    // Check for user
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }

   // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }); 
    res.status(200).json(updatedGoal);
});

// DELETE access: private, route:dELETE/api/goals
const deleteGoals = asyncHandler(async (req,res) => {
    //res.status(200).json({ message:`delete goal with id ${req.params.id}`});
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
      res.status(400)
      throw new Error('Goal not found')
    }

    //const user = await User.findById(req.user.id) 
    // Check for user
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }

   // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
    await goal.remove()
  
    res.status(200).json({ id: req.params.id })
});

module.exports = {getGoals,
                  setGoals,
                  updateGoals,
                  deleteGoals,}