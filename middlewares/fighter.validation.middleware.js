//const { fighter } = require('../models/fighter');
const { validateFighter } = require('./validators/fighter.validation');
const { objectToString } = require('../helpers/objectToString');

const createFighterValid = (req, res, next) => {
	// TODO: Implement validatior for fighter entity during creation
	const { errors, isValid } = validateFighter(req.body);
	if (!isValid) {
		return res.status(400).json({
			error: true,
			message: objectToString(errors),
		});
	}

	next();
};

const updateFighterValid = (req, res, next) => {
	// TODO: Implement validatior for fighter entity during update
	const { errors, isValid } = validateFighter(req.body);
	if (!isValid) {
		return res.status(400).json({
			error: true,
			message: objectToString(errors),
		});
	}

	next();
};

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;
