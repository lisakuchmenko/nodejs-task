// const { user } = require('../models/user');
const { validateUser } = require('validators/user.validation');
const { objectToString } = require('../helpers/objectToString');

const createUserValid = (req, res, next) => {
	// TODO: Implement validatior for user entity during creation

	const { errors, isValid } = validateUser(req.body);
	if (!isValid) {
		return res.status(400).json({
			error: true,
			message: objectToString(errors),
		});
	}

	next();
};

const updateUserValid = (req, res, next) => {
	// TODO: Implement validatior for user entity during update

	const { errors, isValid } = validateUser(req.body);
	if (!isValid) {
		return res.status(400).json({
			error: true,
			message: objectToString(errors),
		});
	}

	next();
};

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;
