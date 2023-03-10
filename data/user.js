import db from '../models/index.js';

export async function create(user) {
	return db.User.create(user).then(console.log);
}

export async function findByEmail(email) {
	return db.User.findOne({ where: { email: email } });
}
