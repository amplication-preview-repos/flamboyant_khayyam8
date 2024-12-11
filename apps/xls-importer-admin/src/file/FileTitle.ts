import { File as TFile } from "../api/file/File";

export const FILE_TITLE_FIELD = "fileName";

export const FileTitle = (record: TFile): string => {
  return record.fileName?.toString() || String(record.id);
};
