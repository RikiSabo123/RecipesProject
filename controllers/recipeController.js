const Recipe = require('../models/Recipe')

exports.getAllRecipes = async (req, res) => {
    const filter = req.query.category ? { category: req.query.category } : {}
    const recipes = await Recipe.find(filter)
    res.json(recipes)
}

exports.getRecipe = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' })
    res.json(recipe)
}

exports.addRecipe = async (req, res) => {
    const { name, time, ingredients, category, isFavorite } = req.body
    if (!name) return res.status(400).json({ message: 'Recipe name is required' })
    const recipe = await Recipe.create({ name, time, ingredients, category, isFavorite })
    res.status(201).json(recipe)
}

exports.updateRecipe = async (req, res) => {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
        returnDocument: 'after',
        runValidators: true
    })
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' })
    res.json(recipe)
}

exports.deleteRecipe = async (req, res) => {
    const recipe = await Recipe.findByIdAndDelete(req.params.id)
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' })
    res.json({ message: 'Recipe deleted', id: recipe._id })
}
