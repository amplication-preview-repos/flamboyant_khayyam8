import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecordListRelationFilter } from "../record/RecordListRelationFilter";

export type FileWhereInput = {
  fileData?: JsonFilter;
  fileName?: StringNullableFilter;
  id?: StringFilter;
  records?: RecordListRelationFilter;
};
