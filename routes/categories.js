const router = require('express').Router();
const {
	Category
} = require('../models/index')


router.post('/', (req, res) => {
	const newCategory = new Category({
		name: req.body.name
	});

	newCategory.save().then(data => res.json(data)).catch((err) => {
		console.log(err);
		res.status(400).json({
			message: "Failed to save Category!"
		})
	})
})

router.get('/', (req, res) => {
	Category.find().then(data => res.json(data)).catch(err => {
		console.log(err);
		res.status(400).json({
			message: "Failed to fetch Categories"
		})
	})
})
module.exports = router;