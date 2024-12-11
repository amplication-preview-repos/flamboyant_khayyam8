import { Injectable } from "@nestjs/common";
import { SignupInput } from "./SignupInput";

@Injectable()
export class AuthService {
  constructor() {}
  async Signup(args: SignupInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
