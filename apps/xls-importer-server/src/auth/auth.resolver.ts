import * as graphql from "@nestjs/graphql";
import { SignupInput } from "./SignupInput";
import { AuthService } from "./auth.service";

export class AuthResolver {
  constructor(protected readonly service: AuthService) {}

  @graphql.Mutation(() => String)
  async Signup(
    @graphql.Args()
    args: SignupInput
  ): Promise<string> {
    return this.service.Signup(args);
  }
}
