/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  File as PrismaFile,
  Record as PrismaRecord,
} from "@prisma/client";

export class FileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FileCountArgs, "select">): Promise<number> {
    return this.prisma.file.count(args);
  }

  async files(args: Prisma.FileFindManyArgs): Promise<PrismaFile[]> {
    return this.prisma.file.findMany(args);
  }
  async file(args: Prisma.FileFindUniqueArgs): Promise<PrismaFile | null> {
    return this.prisma.file.findUnique(args);
  }
  async createFile(args: Prisma.FileCreateArgs): Promise<PrismaFile> {
    return this.prisma.file.create(args);
  }
  async updateFile(args: Prisma.FileUpdateArgs): Promise<PrismaFile> {
    return this.prisma.file.update(args);
  }
  async deleteFile(args: Prisma.FileDeleteArgs): Promise<PrismaFile> {
    return this.prisma.file.delete(args);
  }

  async findRecords(
    parentId: string,
    args: Prisma.RecordFindManyArgs
  ): Promise<PrismaRecord[]> {
    return this.prisma.file
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .records(args);
  }
}
