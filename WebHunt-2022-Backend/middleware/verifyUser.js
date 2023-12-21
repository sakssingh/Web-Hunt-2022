const admin = require("firebase-admin");

const errCodes = require("../errCodes");

exports.verifyUser = async (req, res, next) => {
	try {
		const { authtoken } = req.headers;
		if (!authtoken) {
			res.status(errCodes.BAD_REQUEST).json({ message: "token is null" });
			return;
		}
		const userData = await admin.auth().verifyIdToken(authtoken);
		req.userData = userData;
		next();
	} catch (err) {
		console.log(err);
		res.status(errCodes.BAD_REQUEST).json({ message: err.message });
	}
};
