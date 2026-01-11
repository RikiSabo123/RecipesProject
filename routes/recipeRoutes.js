const express = require('express');
const verifyJWT = require("../middleware/authMiddleware")

const router = express.Router();
const {addRecipe, getRecipe, deleteRecipe, updateRecipe} = require('../controllers/recipeController')

router.post('/addRecipe',addRecipe);
router.get('/getRecipe',getRecipe);
router.delete('/deleteRecipe',deleteRecipe);
router.put('/updateRecipe',updateRecipe);

module.exports = router