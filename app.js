import express from 'express';

const app = express();
const port = 3308;

app.get('/', (req, res) => {
	res.send('hello!!');
});

app.listen(port, () => {
	console.log('서버실행');
});
