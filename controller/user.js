import * as userRepo from '../data/user.js';

export async function signup(req, res) {
	const { email, firstname, lastname, birthday, password } = req.body;

	const overlapEmail = await userRepo.findByEmail(email);

	if (overlapEmail) {
		return res.status(202);
	}

	return res.status(201);
}
