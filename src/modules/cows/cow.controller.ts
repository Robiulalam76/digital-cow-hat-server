import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { CowService } from './cow.service';
import sendResponse from '../../shared/sendResponse';

const createCow: RequestHandler = async (req, res, next) => {
  try {
    const result = await CowService.createCow(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Cow created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// get all cows
const getAllCows: RequestHandler = async (req, res, next) => {
  try {
    const result = await CowService.getCows();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Cows retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get single cow
const getSingleCow: RequestHandler = async (req, res, next) => {
  try {
    const result = await CowService.getSingleCowById(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Cow retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// update user info
const updateCowInfo: RequestHandler = async (req, res, next) => {
  try {
    const result = await CowService.updateCowById(req.params.id, req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Cow updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// delete user
const deleteCow: RequestHandler = async (req, res, next) => {
  try {
    const result = await CowService.deleteCowById(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Cow deleted successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const CowController = {
  createCow,
  getAllCows,
  getSingleCow,
  updateCowInfo,
  deleteCow,
};
