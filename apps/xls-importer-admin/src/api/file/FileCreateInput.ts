import { InputJsonValue } from "../../types";
import { RecordCreateNestedManyWithoutFilesInput } from "./RecordCreateNestedManyWithoutFilesInput";

export type FileCreateInput = {
  fileData?: InputJsonValue;
  fileName?: string | null;
  records?: RecordCreateNestedManyWithoutFilesInput;
};
