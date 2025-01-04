export type Document = {
  id: string;
  name: string;
  category: string;
  uploadDate: string;
  version: number;
  size: number;
  uploadedBy: string;
  sharedWith: string[];
}

export type Version = {
  version: number;
  uploadDate: string;
  uploadedBy: string;
  size: number;
}

