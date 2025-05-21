// ctm-library/index.d.ts
export const s3Untility: {
  initS3Client: (config: {
    endpoint: string;
    region?: string;
    accessKeyId: string;
    secretAccessKey: string;
  }) => any;
  uploadSingleFileAsync: (
    files: any[],
    folderPath: string,
    organization: string,
    aspectRatio?:string
  ) => Promise<any>;
  uploadMultipleFilesAsync: (
    files: any[],
    folderPath: string,
    organization: string,
    aspectRatio?:string
  ) => Promise<any>;

  uploadFilesJoinInFolderAsync: (
    files: any[],
    folderPath: string,
    organization: string,
    aspectRatio?:string
  ) => Promise<any>;

  deleteFolderAsync: (
    folderPath: string,
    organization: string
  ) => Promise<any>;
};
