import {Model, model, property} from '@loopback/repository';

@model()
export class Station extends Model {
  @property({
    type: 'string',
  })
  id?: string;

  @property({
    type: 'string',
  })
  code?: string;

  @property({
    type: 'number',
  })
  capacity?: number;

  @property({
    type: 'object',
  })
  metadata?: object;

  @property({
    type: 'date',

  })
  shape?: any;

  @property({
    type: 'string',

  })
  stage?: string;

  @property({
    type: 'date',
  })
  created_at?: string;

  @property({
    type: 'date',
  })
  updated_at?: string;

  @property({
    type: 'number',
  })
  x?: number;

  @property({
    type: 'number',
  })
  y?: string;


  constructor(data?: Partial<Station>) {
    super(data);
  }
}

export interface StationRelations {
  // describe navigational properties here
}

export type StationWithRelations = Station & StationRelations;
