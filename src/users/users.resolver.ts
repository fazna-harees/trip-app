import { Resolver, Query } from '@nestjs/graphql';

// eslint-disable-next-line prettier/prettier
@Resolver()
export class UsersResolver {
  @Query(() => String)
  async hello() {
    return 'bleh';
  }
}
