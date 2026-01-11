exports.addRecipe = async (req, res) =>{
    const recipe = await recipe.create(req.body);
    res.json(recipe)
}

exports.getRecipe = async (req, res) =>{
    const recipe = await recipe.findOne(req.body);
    res.json(recipe)
}

exports.deleteRecipe = async(req, res) =>{
    const recipe = await recipe.findOneAndDelete(req.body);
    res.json(recipe)
}

exports.updateRecipe = async(req, res) =>{
    const recipe = await recipe.findOneAndUpdate(req.body);
    res.json(recipe)
}


