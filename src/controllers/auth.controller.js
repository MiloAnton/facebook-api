import jwt from "jsonwebtoken";
import * as UserModel from "../models/users.model";
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Function responsible for registering a new user 
export const register = async (request, response) => {
  const { email, password } = request.body;
  let updateAt = new Date();
  let createdAt = new Date();
  // Password is hashed before being stored in DB
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    const user = await UserModel.createUser({
      email,
      password: hash,
      createdAt,
      updateAt,
    });
    console.log("New user created : " + user);
    response.status(201).json(user);
  });
};

// Function responsible for the login of a registered user
export const login = async (request, response) => {
  const { email, password } = request.body;
  // Password provided is hashed and compared with the DB's hashed password
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    const user = await UserModel.findByCredentials({
      email,
      password: hash,
    });
    const token = jwt.sign({ email: email }, "SECRET");
    response.json({
      user,
      token,
    });
  });
};