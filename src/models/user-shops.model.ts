import {Model, model, property} from '@loopback/repository';

@model()
export class UserShops extends Model {
  @property({
    type: 'string',
  })
  shop_id?: string;

  @property({
    type: 'string',
    enum: ['type1', 'type2'],
  })
  role?: string;

  @property({
    type: 'string',
    enum: ['type1', 'type2'],
  })
  status?: string;


  constructor(data?: Partial<UserShops>) {
    super(data);
  }
}

export interface UserShopsRelations {
  // describe navigational properties here
}

export type UserShopsWithRelations = UserShops & UserShopsRelations;
