import { JsonValue } from "type-fest";
import { Record } from "../record/Record";

export type File = {
  createdAt: Date;
  fileData: JsonValue;
  fileName: string | null;
  id: string;
  records?: Array<Record>;
  updatedAt: Date;
};
