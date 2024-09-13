import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RecordWhereInput = {
  file?: FileWhereUniqueInput;
  id?: StringFilter;
  recordData?: JsonFilter;
};
