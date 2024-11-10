// index.js
require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');

const app = express();
const PORT = 4000;

app.use(express.json());
app.get('/', (req, res) => {
	res.send('Hey this is my API running 🥳');
});

app.get('/about', (req, res) => {
	res.send('This is my about route..... ');
});

app.post('/stats', async (req, res) => {
	// get stats
	res.status(200).json({ message: 'Stats found' });
	/* try {
		const stats = await Stats.findOne();
		if (stats) {
			res.status(200).json(stats);
		} else {
			res.status(404).json({ message: 'Stats not found' });
		}
	} catch (err) {
		res.status(500).json({ message: 'Internal Server Error' });
	} */
});
app.listen(PORT, () => {
	console.log(`API listening on PORT ${PORT} `);
});
// Connect to MongoDB
/* mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
	})
	.catch(err => {
		console.log(err);
	}); */

// Export the Express API
module.exports = app;
