import {Model, model, property} from '@loopback/repository';

@model()
export class Confirmation extends Model {
  @property({
    type: 'string',
    enum: [],
  })
  type?: string;

  @property({
    type: 'string',
    enum: [],

  })
  status?: string;

  @property({
    type: 'string',
  })
  code?: string;

  @property({
    type: 'string',
    mongodb: {dataType: 'ObjectId'}
    })
  conerm_id?: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: Date;


  constructor(data?: Partial<Confirmation>) {
    super(data);
  }
}

export interface ConfirmationRelations {
  // describe navigational properties here
}

export type ConfirmationWithRelations = Confirmation & ConfirmationRelations;
