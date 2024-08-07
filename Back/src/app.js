import express from 'express';
import morgan from 'morgan';
import cors from 'cors'; // Asegúrate de importar cors
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import taskRoutes from './routes/task.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Configuración CORS
app.use(cors({
    origin: (origin, callback) => {
        const ACCEPTED_ORIGINS = [
            'http://localhost:3000',
        ];
        if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
            return callback(null, true);
        }
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true // Importante para permitir el envío de cookies
}));

// Definición de rutas
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;