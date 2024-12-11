import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RecordCreateInput = {
  file?: FileWhereUniqueInput | null;
  recordData?: InputJsonValue;
};
