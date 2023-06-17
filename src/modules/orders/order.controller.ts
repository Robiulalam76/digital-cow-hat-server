import { RequestHandler } from 'express';
import { OrderService } from './order.service';
import httpStatus from 'http-status';
import sendResponse from '../../shared/sendResponse';

const createNewOrder: RequestHandler = async (req, res, next) => {
  try {
    const result = await OrderService.newOrder(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Order create successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const OrderController = {
  createNewOrder,
};
