import {Model, model, property} from '@loopback/repository';
import { GeoPoint } from './geo-point.model';

@model()
export class Address extends Model {
  @property({
    type: 'string',
  })
  country?: string;

  @property({
    type: 'string',
  })
  town?: string;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'string',
  })
  street?: string;

  @property({
    type: 'string',
  })
  tree_words?: string;

  @property({
    type: 'string',
  })
  near_by?: string;

  @property({
    type: GeoPoint,
    itemType:'object',
  })
  position?: GeoPoint;

  @property({
    type: 'boolean',
  })
  is_verified?: boolean;


  constructor(data?: Partial<Address>) {
    super(data);
  }
}

export interface AddressRelations {
  // describe navigational properties here
}

export type AddressWithRelations = Address & AddressRelations;
