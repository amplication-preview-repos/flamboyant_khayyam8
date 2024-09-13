import { InputJsonValue } from "../../types";
import { RecordUpdateManyWithoutFilesInput } from "./RecordUpdateManyWithoutFilesInput";

export type FileUpdateInput = {
  fileData?: InputJsonValue;
  fileName?: string | null;
  records?: RecordUpdateManyWithoutFilesInput;
};
