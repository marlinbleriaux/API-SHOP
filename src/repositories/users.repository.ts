import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {MiddlewareContext, RestBindings} from '@loopback/rest';
import {DataPostDataSource} from '../datasources';
import {Users, UsersRelations} from '../models';


export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id,
  UsersRelations
> {

  constructor(
    dataSource: juggler.DataSource,
    // @inject('datasources.dataPost') dataSource: DataPostDataSource,
    @inject.getter(RestBindings.Http.CONTEXT)
    protected getHttpContext: Getter<MiddlewareContext>,

    ) {
    super(Users, dataSource);
  }

  // definePersistedModel(
  //   entityClass: typeof Users,
  // ): typeof juggler.PersistedModel {
  //   const modelClass = super.definePersistedModel(entityClass);
  //   const cb = async () => {
  //     try {
  //       const httpCtx = await this.getHttpContext();
  //       console.log(`httpCtx.request.method=${httpCtx.request?.method}`);
  //     } catch (ex) {
  //       console.log(`httpCtx=undefined`);
  //     }
  //   };
  //   modelClass.observe('before save', cb);
  //   modelClass.observe('access', cb);
  //   return modelClass;
  // }


  definePersistedModel(entityClass: typeof Users) {
    const modelClass = super.definePersistedModel(entityClass);

    modelClass.observe('before save', async ctx => {
      console.log(`going to save ${ctx.Model.modelName}`);
    });
    return modelClass;
  }
  


}





// import {inject} from '@loopback/core';
// import {DefaultCrudRepository} from '@loopback/repository';
// import {DataPostDataSource} from '../datasources';
// import {Users, UsersRelations} from '../models';

// export class UsersRepository extends DefaultCrudRepository<
//   Users,
//   typeof Users.prototype.id,
//   UsersRelations
// > {
//   constructor(
//     @inject('datasources.dataPost') dataSource: DataPostDataSource,
//   ) {
//     super(Users, dataSource);
//   }
// }


