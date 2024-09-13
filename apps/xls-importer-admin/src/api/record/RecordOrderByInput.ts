import { SortOrder } from "../../util/SortOrder";

export type RecordOrderByInput = {
  createdAt?: SortOrder;
  fileId?: SortOrder;
  id?: SortOrder;
  recordData?: SortOrder;
  updatedAt?: SortOrder;
};
