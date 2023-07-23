const router = require('express').Router();
const {
  getAllUsers,
  createUser,
} = require('../../controllers/userController');

// /api/pizzas
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// /api/pizzas/:id
// router
//   .route('/:id')
//   .get(getPizzaById)
//   .put(updatePizza)
//   .delete(deletePizza);

module.exports = router;
