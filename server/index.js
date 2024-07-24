import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
import client from 'prom-client'; // Metric Collection

dotenv.config();

const app = express();

//Use Prometheus
const collectDefaultMetrics = client.collectDefaultMetrics;

collectDefaultMetrics({register: client.register});

// Route For Metrics
app.get('/metrics', async(req, res) =>{
    res.setHeader('Content-Type', client.register.contentType);
    const metrics = await client.register.metrics();
    res.send(metrics);
});

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Connect to the database
const CONNECTION_URL = process.env.DATABASE_URL
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)  
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));



