import {injectable, /* inject, */ BindingScope} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class PeapleService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */
}
export interface PeopleService {
  getCharacter(personId: number): Promise<object>;
}
/**
 * A generic service interface with any number of methods that return a promise
 */
 export interface GenericService {
  [methodName: string]: (...args: any[]) => Promise<any>;
}
