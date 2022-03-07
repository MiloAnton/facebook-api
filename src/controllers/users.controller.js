import { response } from "express";
import * as userModel from "../models/users.model";

// Responsible for a user's display with it's ID
export const getById = async (_request, response) => {
  const { id } = _request.params;
  response.json({
    user: await userModel.getById({
      id,
    }),
  });
};

// Deletion of an user by it's ID 
export const deleteById = async (request, response) => {
  const { id } = request.params;
  const resp = await userModel.deleteById({ id });
  response.json({ resp });
};
