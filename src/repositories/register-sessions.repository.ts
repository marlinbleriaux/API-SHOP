import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DataPostDataSource} from '../datasources';
import {RegisterSessions, RegisterSessionsRelations, Agencies, Users} from '../models';
import {AgenciesRepository} from './agencies.repository';
import {UsersRepository} from './users.repository';

export class RegisterSessionsRepository extends DefaultCrudRepository<
  RegisterSessions,
  typeof RegisterSessions.prototype.id,
  RegisterSessionsRelations
> {

  public readonly agencies: BelongsToAccessor<Agencies, typeof RegisterSessions.prototype.id>;

  public readonly users: BelongsToAccessor<Users, typeof RegisterSessions.prototype.id>;

  constructor(
    @inject('datasources.dataPost') dataSource: DataPostDataSource, @repository.getter('AgenciesRepository') protected agenciesRepositoryGetter: Getter<AgenciesRepository>, @repository.getter('UsersRepository') protected usersRepositoryGetter: Getter<UsersRepository>,
  ) {
    super(RegisterSessions, dataSource);
    this.users = this.createBelongsToAccessorFor('users', usersRepositoryGetter,);
    this.registerInclusionResolver('users', this.users.inclusionResolver);
    this.agencies = this.createBelongsToAccessorFor('agencies', agenciesRepositoryGetter,);
    this.registerInclusionResolver('agencies', this.agencies.inclusionResolver);
  }
}
