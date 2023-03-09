import Sequelize from 'sequelize';
import config from '../config/config.js';
import User from './users.js';

const db = {};
const sequelize = new Sequelize(
	config.development.database,
	config.development.user,
	config.development.password,
	{
		host: config.development.host,
		dialect: config.development.dialect,
	}
);

db.sequelize = sequelize;
db.User = User;

User.init(sequelize);

export default db;
