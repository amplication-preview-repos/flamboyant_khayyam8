import { File } from "../file/File";
import { JsonValue } from "type-fest";

export type Record = {
  createdAt: Date;
  file?: File | null;
  id: string;
  recordData: JsonValue;
  updatedAt: Date;
};
