import db from '../models/index.js';

export async function findByEmail(email) {
	return db.User.findOne({ where: { email: email } });
}
