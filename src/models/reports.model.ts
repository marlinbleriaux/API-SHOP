import {Entity, model, property} from '@loopback/repository';

@model()
export class Reports extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    mongodb: {dataType: 'ObjectId'}

  })
  id?: string;

  @property({
    type: 'string',
    enum: [''],
  })
  type?: string;

  @property({
    type: 'date',
  })
  created_at?: string;

  @property({
    type: 'object',
  })
  shop_id?: object;

  @property({
    type: 'object',
  })
  agency_id?: object;

  @property({
    type: 'string',
  })
  hour?: string;

  @property({
    type: 'string',
  })
  day?: string;

  @property({
    type: 'string',
  })
  mmonth?: string;

  @property({
    type: 'string',
  })
  year?: string;

  @property({
    type: 'string',
  })
  day_of_week?: string;

  @property({
    type: 'number',
  })
  total_amount?: number;

  @property({
    type: Reports,
    itemType: 'object',
  })
  report_items?: Reports[];

  @property({
    type: 'object',
  })
  metadata?: object;


  constructor(data?: Partial<Reports>) {
    super(data);
  }
}

export interface ReportsRelations {
  // describe navigational properties here
}

export type ReportsWithRelations = Reports & ReportsRelations;
