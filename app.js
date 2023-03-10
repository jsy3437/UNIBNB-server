import express from 'express';
import cors from 'cors';
import db from './models/index.js';
import userRouter from './router/user.js';

const app = express();
const port = 3308;

const corsOptions = { origin: 'http://localhost:3000', credentials: true };

app.use(cors(corsOptions));

app.use('/auth', userRouter);

db.sequelize
	.sync()
	.then(() => console.log('연결됨@'))
	.catch((err) => console.error(err));

app.listen(port, () => {
	console.log('서버실행중...');
});
