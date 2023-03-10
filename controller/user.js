import bcrypt from 'bcrypt';
import * as userRepo from '../data/user.js';

export async function signup(req, res) {
	const { email, firstname, lastname, birthday, password } = req.body;

	const hashedPassword = bcrypt.hashSync(password, 8);
	const overlapEmail = await userRepo.findByEmail(email);

	if (overlapEmail) {
		return res.status(202);
	}

	await userRepo.create({
		email,
		firstname,
		lastname,
		birthday,
		password: hashedPassword,
	});

	return res.status(201);
}
