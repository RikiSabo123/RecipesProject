const express = require('express');
const verifyJWT = require('../middleware/authMiddleware')
const {
    getAllRecipes,
    getRecipe,
    addRecipe,
    updateRecipe,
    deleteRecipe
} = require('../controllers/recipeController')

const router = express.Router();

// Public read endpoints
router.get('/', getAllRecipes);
router.get('/:id', getRecipe);

// Write endpoints require a valid JWT
router.post('/', verifyJWT, addRecipe);
router.put('/:id', verifyJWT, updateRecipe);
router.delete('/:id', verifyJWT, deleteRecipe);

module.exports = router
