import { IOrder } from './order.interface';
import Order from './order.model';

const newOrder = async (orderData: IOrder): Promise<IOrder> => {
  const newOrder = new Order(orderData);
  const result = await newOrder.save();
  return result;
};

// get all cows
const getOrders = async (): Promise<IOrder[]> => {
  const cows = await Order.find({}).sort({ _id: -1 });
  return cows;
};

export const OrderService = {
  newOrder,
  getOrders,
};
