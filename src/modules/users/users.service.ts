import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const newUser = new User(user);
  const createdUser = await newUser.save();
  return createdUser;
};

// get all users
const getUsers = async (): Promise<IUser[]> => {
  const users = await User.find({}).sort({ _id: -1 });
  return users;
};

export const UserService = {
  createUser,
  getUsers,
};
