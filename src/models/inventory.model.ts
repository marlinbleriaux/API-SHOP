import {Model, model, property} from '@loopback/repository';

@model()
export class Inventory extends Model {
  @property({
    type: 'string',
    id: true,
    generated: true,
    mongodb: {dataType: 'ObjectId'}

  })
  id?: string;

  @property({
    type: 'string',
    enum: ['']
  })
  unit?: string;

  @property({
    type: 'string',
    enum: ['']
  })
  portion?: string;

  @property({
    type: 'number',
  })
  quantity?: number;

  @property({
    type: 'number',
  })
  min_qantity?: number;

  @property({
    type: 'boolean',
  })
  is_life?: boolean;

  @property({
    type: 'date',
    default: new Date()
  })
  created_at?: string;

  @property({
    type: 'date',
    default: new Date(),
  })
  updated_at?: Date;


  constructor(data?: Partial<Inventory>) {
    super(data);
  }
}

export interface InventoryRelations {
  // describe navigational properties here
}

export type InventoryWithRelations = Inventory & InventoryRelations;
