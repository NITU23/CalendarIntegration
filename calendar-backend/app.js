const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const eventRoutes = require('./route/eventRoute');
const connectDB = require('./config/dbConnection');
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/events', eventRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
