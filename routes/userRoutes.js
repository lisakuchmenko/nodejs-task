const { Router } = require('express');
const UserService = require('../services/userService');
const {
	createUserValid,
	updateUserValid,
} = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { User } = require('../models/user');

const router = Router();

// TODO: Implement route controllers for user

// route: GET /api/users
router.get('/', (req, res) => {
	const users = UserService.getUsers();
	if (users) {
		res.json(users);
	} else {
		res.json(400).json({
			error: true,
			message: 'No users in database',
		});
	}
});

// route: GET /api/users/:id
router.get('/:id', (req, res) => {
	const id = req.params.id;
	const foundUser = UserService.search({ id });
	if (foundUser) {
		res.json(foundUser);
	} else {
		res.status(404).json({
			error: true,
			message: 'No user with such id',
		});
	}
});

// route: POST /api/users
router.post('/', createUserValid, (req, res) => {
	const user = new User(req.body);
	const result = UserService.create(user);
	if (result) {
		res.json(result);
	} else {
		res.status(400).json({
			error: true,
			message: 'Error has occurred',
		});
	}
});

// route PUT /api/users/:id
router.put('/:id', updateUserValid, (req, res) => {
	const id = req.params.id;
	const userInfo = req.body;
	const updatedUser = UserService.update(id, userInfo);
	if (updatedUser) {
		res.json(updatedUser);
	} else {
		res.status(404).json({
			error: true,
			message: 'No user with such id',
		});
	}
});

// route DELETE /api/users/:id
router.delete('/:id', (req, res) => {
	const id = req.params.id;
	const deletedUser = UserService.remove(id);
	if (deletedUser) {
		res.json(deletedUser);
	} else {
		res.status(404).json({
			error: true,
			message: 'No user with such id',
		});
	}
});

module.exports = router;
