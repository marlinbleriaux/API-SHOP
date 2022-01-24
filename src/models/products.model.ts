import {belongsTo, Entity, model, property} from '@loopback/repository';
// import {Brand, Image, Inventory, ProductAttribute, ProductCategories, ProductPrice} from '.';
import {Agencies} from './agencies.model';
import {Brand} from './brand.model';
import {Inventory} from './inventory.model';
import {ProductAttribute} from './product-attribute.model';
import {ProductCategories} from './product-categories.model';
import {ProductPrice} from './product-price.model';
import {Shop} from './shop.model';
import {Image} from './image.model';

// import {Agencies} from './agencies.model';
// import {Shop} from './shop.model';

@model()
export class Products extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
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
  description?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  tags?: string[];

  @property({
    type: ProductCategories,
    itemType: 'object',
  })
  product_categories?: ProductCategories[];

  @property({
    type: 'string',

    enum: [''],

  })
  status?: string[];

  @property({
    type: 'string',
  })
  bar_cade?: string;

  @property({
    type: Image,
    itemType: 'object',
  })
  assets?: Image[];

  @property({
    type: 'string',
  })
  sku?: string;

  @property({
    type: ProductPrice,
    itemType: 'object',
  })
  prices?: ProductPrice[];

  @property({
    type: Brand,
    itemType: 'object',
  })
  brand?: Brand[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  variants?: string[];

  @property({
    type: ProductAttribute,
    itemType: 'object',
  })
  attributes?: ProductAttribute[];

  @property({
    type: 'date',
  })
  created_at?: string;

  @property({
    type: 'array',
    itemType: 'date',
  })
  updated_at?: string[];

  @property({
    type:Inventory,
    itemType: 'object',
  })
  inventories?: Inventory[];

  @property({
    type: 'boolean',
  })
  is_inventory_tracked?: boolean;

  @property({
    type: 'boolean',
  })
  is_life?: boolean;

  @belongsTo(() => Agencies)
  agenciesId: string;

  @belongsTo(() => Shop)
  shopId: string;


  constructor(data?: Partial<Products>) {
    super(data);
  }
}

export interface ProductsRelations {
  // describe navigational properties here
}

export type ProductsWithRelations = Products & ProductsRelations;
