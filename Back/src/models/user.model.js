import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
    },
    role: {
      type: String,
      enum: ['user', 'admin'], // Define los roles disponibles
      default: 'user', // Asigna un rol por defecto
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

const User = mongoose.model('User', userSchema);

export default User;
