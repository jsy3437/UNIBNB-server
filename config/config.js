import * as dotenv from 'dotenv';
dotenv.config();

const config = {
	development: {
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: 'mariadb',
		jwtSecret: process.env.JWT_SECRET,
		jwtExpires: process.env.JWT_EXPIRES,
	},
};

export default config;
