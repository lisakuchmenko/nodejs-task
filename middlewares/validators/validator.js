class Validator {
	isEmpty = (value) => {
		return value === '' ? true : false;
	};

	isNumber = (value) => {
		if (typeof value === 'number') return true;
		return /^\d+$/g.test(value);
	};

	isMoreThan = (value, min) => {
		return Number(value) >= min;
	};

	isLessThan = (value, max) => {
		return Number(value) < max;
	};

	isEmail = (value) => {
		return /(\W|^)[\w.+\-]*@gmail\.com(\W|$)/gi.test(value);
	};

	isPhoneNumber = (value) => {
		return /^\+380(\d{9})$/g.test(value);
	};

	hasOnlyImportantFields = (object, count) => {
		return Object.keys(object).length === count;
	};

	isLength = (value, { min, max }) => {
		if (min) {
			if (max) {
				return value.length >= min && value.length < max;
			}
			return value.length >= min;
		}
	};
}

module.exports = new Validator();
