import {Model, model, property} from '@loopback/repository';

@model()
export class OrderDetail extends Model {
  @property({
    type: 'string',
    enum:[''],
  })
  type?: string;

  @property({
    type: 'number',
  })
  amount?: number;

  @property({
    type: 'number',
  })
  discount?: number;

  @property({
    type: 'number',
  })
  profit?: number;

  @property({
    type: 'object',
  })
  metadata?: object;

  @property({
    type: 'number',
  })
  quantity?: number;


  constructor(data?: Partial<OrderDetail>) {
    super(data);
  }
}

export interface OrderDetailRelations {
  // describe navigational properties here
}

export type OrderDetailWithRelations = OrderDetail & OrderDetailRelations;
