import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccesToken } from '../libs/jwt.js';

// Registro de usuario
export const register = async (req, res) => {
  const { email, password, username, firstName, lastName, phoneNumber, role } = req.body;

  try {
    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Encriptar la contraseña
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
      firstName,
      lastName,
      phoneNumber,
      role: role || 'user', // Asignar rol por defecto si no se proporciona
    });

    const userSaved = await newUser.save();
    const token = await createAccesToken({ id: userSaved._id });

    res.cookie('token', token, { httpOnly: true }); // Configura la cookie con httpOnly para mayor seguridad
    res.status(201).json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      firstName: userSaved.firstName,
      lastName: userSaved.lastName,
      phoneNumber: userSaved.phoneNumber,
      role: userSaved.role,
      createdAt: userSaved.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login de usuario
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(401).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, userFound.password);
    console.log("password", password, "userFound", userFound.password);
    if (!isMatch) return res.status(402).json({ message: 'Incorrect password' });

    const token = await createAccesToken({ id: userFound._id });

    console.log(token, 'token Login');
    res.cookie('token', token, { httpOnly: true }).json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      name: `${userFound.firstName} ${userFound.lastName}`,
      firstName: userFound.firstName,
      lastName: userFound.lastName,
      phoneNumber: userFound.phoneNumber,
      role: userFound.role,
      createdAt: userFound.createdAt,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Logout de usuario
export const logout = (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0),
    httpOnly: true,
  });
  return res.sendStatus(200);
};

// Perfil de usuario
export const profile = async (req, res) => {
  try {
    const userFound = await User.findById(req.user.id);

    if (!userFound) return res.status(400).json({ message: 'User not found' });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      firstName: userFound.firstName,
      lastName: userFound.lastName,
      phoneNumber: userFound.phoneNumber,
      birthday: userFound.birthday,
      role: userFound.role,
      createdAt: userFound.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualización de usuario
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, genero, mobile, role } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { name, genero, mobile, role }, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminación de usuario
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
