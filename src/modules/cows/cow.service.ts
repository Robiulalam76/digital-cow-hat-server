import { ICow } from './cow.interface';
import Cow from './cow.model';

const createCow = async (user: ICow): Promise<ICow | null> => {
  const newCow = new Cow(user);
  const createdCow = await newCow.save();
  return createdCow;
};

// get all users
const getCows = async (): Promise<ICow[]> => {
  const cows = await Cow.find({}).sort({ _id: -1 });
  return cows;
};

// get single Cow
const getSingleCowById = async (id: string): Promise<ICow | null> => {
  const cow = await Cow.findOne({ _id: id });
  return cow;
};

// update cow info
const updateCowById = async (
  id: string,
  updateData: object
): Promise<ICow | null> => {
  const cow = await Cow.findOneAndUpdate({ _id: id }, updateData, {
    new: true,
  });
  return cow;
};

// delete cow
const deleteCowById = async (id: string): Promise<ICow | null> => {
  const cow = await Cow.findByIdAndDelete({ _id: id });
  return cow;
};

export const CowService = {
  createCow,
  getCows,
  getSingleCowById,
  updateCowById,
  deleteCowById,
};
