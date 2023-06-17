import { IOrder } from './order.interface';
import Order from './order.model';

const newOrder = async (orderData: IOrder): Promise<IOrder> => {
  const newOrder = new Order(orderData);
  const result = await newOrder.save();
  return result;
};

export const OrderService = {
  newOrder,
};
