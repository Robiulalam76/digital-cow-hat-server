import { RequestHandler } from 'express';
import { UserService } from './users.service';

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const result = await UserService.createUser(req.body);
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createUser,
};
