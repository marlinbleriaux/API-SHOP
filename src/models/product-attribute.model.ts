import {Model, model, property} from '@loopback/repository';

@model()
export class ProductAttribute extends Model {
  @property({
    type: 'string',
    enum: ['']
  })
  type?: string;

  @property({
    type: 'string',
  })
  name?: string;


  constructor(data?: Partial<ProductAttribute>) {
    super(data);
  }
}

export interface ProductAttributeRelations {
  // describe navigational properties here
}

export type ProductAttributeWithRelations = ProductAttribute & ProductAttributeRelations;
