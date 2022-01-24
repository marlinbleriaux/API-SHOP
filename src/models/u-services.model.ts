import {Entity, model, property} from '@loopback/repository';

@model()
export class UServices extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    mongodb: {dataType: 'ObjectId'}
  })
  id?: string;

  @property({
    type: 'string',
    enumerable: true,
  })
  type?: string;

  @property({
    type: 'number',
  })
  balance?: number;

  @property({
    type: 'object',
  })
  tarification?: object;

  @property({
    type: 'string',
  })
  provider?: string;

  @property({
    type: 'object',
  })
  metadata?: object;


  constructor(data?: Partial<UServices>) {
    super(data);
  }
}

export interface UServicesRelations {
  // describe navigational properties here
}

export type UServicesWithRelations = UServices & UServicesRelations;
