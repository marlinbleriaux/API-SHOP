import {Model, model, property} from '@loopback/repository';

@model()
export class GeoPoint extends Model {
  @property({
    type: 'number',
  })
  lat?: number;

  @property({
    type: 'number',
  })
  lon?: number;


  constructor(data?: Partial<GeoPoint>) {
    super(data);
  }
}

export interface GeoPointRelations {
  // describe navigational properties here
}

export type GeoPointWithRelations = GeoPoint & GeoPointRelations;
