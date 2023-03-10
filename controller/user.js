import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
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

	const token = jwt.sign(String(email), config.development.jwtSecret);
	const expires = new Date(Date.now() + config.development.jwtExpires);
	res.setHeader(
		'Set-Cookie',
		`access_token=${token};path=/expires=${expires.toUTCString()};httponly`
	);
	return res.status(201);
}
