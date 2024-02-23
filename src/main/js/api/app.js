import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import mesureRoutes from './routes/mesureRoutes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
));

app.use('/api/mesures', mesureRoutes);

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});




export default app;