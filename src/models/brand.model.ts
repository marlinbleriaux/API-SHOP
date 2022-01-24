import {Model, model, property} from '@loopback/repository';

@model()
export class Brand extends Model {
  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'buffer',
  })
  logo?: Buffer;


  constructor(data?: Partial<Brand>) {
    super(data);
  }
}

export interface BrandRelations {
  // describe navigational properties here
}

export type BrandWithRelations = Brand & BrandRelations;
