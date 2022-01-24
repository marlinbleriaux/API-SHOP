import {Model, model, property} from '@loopback/repository';

@model()
export class ProductCategories extends Model {
  @property({
    type: 'string',
    mongodb: {dataType: 'ObjectId'}

  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  parent_key?: string;

  @property({
    type: 'string',
  })
  description?: string;


  constructor(data?: Partial<ProductCategories>) {
    super(data);
  }
}

export interface ProductCategoriesRelations {
  // describe navigational properties here
}

export type ProductCategoriesWithRelations = ProductCategories & ProductCategoriesRelations;
