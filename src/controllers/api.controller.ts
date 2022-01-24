// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {PeopleService} from '../services';
import {
  get,
  
  param,

} from '@loopback/rest';
// import {inject} from '@loopback/core';


export class ApiController {
  constructor(
    @inject('services.PeopleService')
    protected peopleService: PeopleService,
  ) {}
  @get('/people/{personId}')
  async getCharacter(
    @param.path.integer('personId') personId: number,
  ): Promise<object> {
    //Preconditions

    return this.peopleService.getCharacter(personId);
  }
//
}
