import {Model, model, property} from '@loopback/repository';

@model()
export class Patner extends Model {
  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
    enum:[],
    
  })
  type?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  email?: string;


  constructor(data?: Partial<Patner>) {
    super(data);
  }
}

export interface PatnerRelations {
  // describe navigational properties here
}

export type PatnerWithRelations = Patner & PatnerRelations;
