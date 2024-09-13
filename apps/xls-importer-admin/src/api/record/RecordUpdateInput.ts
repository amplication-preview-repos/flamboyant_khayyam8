import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RecordUpdateInput = {
  file?: FileWhereUniqueInput | null;
  recordData?: InputJsonValue;
};
