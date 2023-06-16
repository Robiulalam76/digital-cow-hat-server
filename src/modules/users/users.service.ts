import { IUser } from './user.interface';

const createUser = async (user: IUser): Promise<IUser | null> => {
  return createdUser;
};

export const UserService = {
  createUser,
};
