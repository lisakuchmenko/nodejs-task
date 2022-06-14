const responseMiddleware = (req, res, next) => {
	// TODO: Implement middleware that returns result of the query
	const { statusCode, message } = res.err || {};
	if (message) {
		res.statusCode = statusCode;
		res.json({ error: true, message });
	} else {
		res.json(res.locals);
	}

	next();
};

exports.responseMiddleware = responseMiddleware;
