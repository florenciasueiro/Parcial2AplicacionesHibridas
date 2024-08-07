import express from 'express';
import { getAllUsers, updateUserRole, createUser, deleteUser } from '../controllers/admin.controller.js';
import { verifyToken, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

router.get('/users', verifyToken, isAdmin, getAllUsers);
router.put('/users/:id/role', verifyToken, isAdmin, updateUserRole);
router.post('/users', verifyToken, isAdmin, createUser);
router.delete('/users/:id', verifyToken, isAdmin, deleteUser);

export default router;
