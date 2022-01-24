import {Model, model, property} from '@loopback/repository';

@model()
export class ProductPrice extends Model {
  @property({
    type: 'string',
    enum: [''],
  })
  unit?: string;

  @property({
    type: 'string',
    enum: [''],

  })
  portion?: string;

  @property({
    type: 'number',
  })
  purchased_price?: number;

  @property({
    type: 'boolean',
  })
  is_active?: boolean;

  @property({
    type: 'number',
  })
  min_price?: number;

  @property({
    type: 'number',
  })
  desired_price?: number;


  constructor(data?: Partial<ProductPrice>) {
    super(data);
  }
}

export interface ProductPriceRelations {
  // describe navigational properties here
}

export type ProductPriceWithRelations = ProductPrice & ProductPriceRelations;
