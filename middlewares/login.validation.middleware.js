const { validateLogin } = require('./validators/login.validation');
const { objectToString } = require('../helpers/objectToString');

const loginUserValid = (req, res, next) => {
	const { errors, isValid } = validateLogin(req.body);

	if (!isValid) {
		return res.status(400).json({
			error: true,
			message: objectToString(errors),
		});
	}

	next();
};

exports.loginUserValid = loginUserValid;
