import express from 'express';
import db from './models/index.js';

const app = express();
const port = 3308;

const corsUrl = 'http://localhost:3000/';

app.get('/', (req, res) => {
	const allowOption = req.rawHeaders.findIndex((url) => url === corsUrl);

	if (allowOption) {
		res.setHeader('Access-Control-Allow-origin', '*');
	}

	res.send('hello!!');
});

db.sequelize
	.sync()
	.then(() => console.log('연결됨@'))
	.catch((err) => console.error(err));

app.listen(port, () => {
	console.log('서버실행중...');
});
