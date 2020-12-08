const router = require('express').Router();
const {
	Item
} = require('../models');

router.post('/', (req, res) => {
	const newItem = new Item({
		name: req.body.name,
		image: req.body.image,
		category: req.body.categoryId
	});

	newItem.save().then(data => res.json(data)).catch((err) => {
		console.log(err);
		res.status(400).json({
			message: "Failed to save Item!"
		})
	})
})

router.get('/', (req, res) => {
	Item.find().populate('category').then(data => res.json(data)).catch(err => {
		console.log(err);      //.populate() used    
		res.status(400).json({
			message: "Failed to fetch Items"
		})
	})
})
module.exports = router;