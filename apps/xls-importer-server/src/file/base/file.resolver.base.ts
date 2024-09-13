/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { File } from "./File";
import { FileCountArgs } from "./FileCountArgs";
import { FileFindManyArgs } from "./FileFindManyArgs";
import { FileFindUniqueArgs } from "./FileFindUniqueArgs";
import { CreateFileArgs } from "./CreateFileArgs";
import { UpdateFileArgs } from "./UpdateFileArgs";
import { DeleteFileArgs } from "./DeleteFileArgs";
import { RecordFindManyArgs } from "../../record/base/RecordFindManyArgs";
import { Record } from "../../record/base/Record";
import { FileService } from "../file.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => File)
export class FileResolverBase {
  constructor(
    protected readonly service: FileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "File",
    action: "read",
    possession: "any",
  })
  async _filesMeta(
    @graphql.Args() args: FileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [File])
  @nestAccessControl.UseRoles({
    resource: "File",
    action: "read",
    possession: "any",
  })
  async files(@graphql.Args() args: FileFindManyArgs): Promise<File[]> {
    return this.service.files(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => File, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "File",
    action: "read",
    possession: "own",
  })
  async file(@graphql.Args() args: FileFindUniqueArgs): Promise<File | null> {
    const result = await this.service.file(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => File)
  @nestAccessControl.UseRoles({
    resource: "File",
    action: "create",
    possession: "any",
  })
  async createFile(@graphql.Args() args: CreateFileArgs): Promise<File> {
    return await this.service.createFile({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => File)
  @nestAccessControl.UseRoles({
    resource: "File",
    action: "update",
    possession: "any",
  })
  async updateFile(@graphql.Args() args: UpdateFileArgs): Promise<File | null> {
    try {
      return await this.service.updateFile({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => File)
  @nestAccessControl.UseRoles({
    resource: "File",
    action: "delete",
    possession: "any",
  })
  async deleteFile(@graphql.Args() args: DeleteFileArgs): Promise<File | null> {
    try {
      return await this.service.deleteFile(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Record], { name: "records" })
  @nestAccessControl.UseRoles({
    resource: "Record",
    action: "read",
    possession: "any",
  })
  async findRecords(
    @graphql.Parent() parent: File,
    @graphql.Args() args: RecordFindManyArgs
  ): Promise<Record[]> {
    const results = await this.service.findRecords(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
