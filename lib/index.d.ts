// ctm-library/index.d.ts
export const s3Untility: {
  initS3Client: (config: {
    endpoint: string;
    region?: string;
    accessKeyId: string;
    secretAccessKey: string;
  }) => any;

  uploadMultipleFilesAsync: (
    files: any[],
    folderPath: string,
    organization: string
  ) => Promise<any>;

  uploadFilesJoinInFolderAsync: (
    files: any[],
    folderPath: string,
    organization: string
  ) => Promise<any>;

  deleteFolderAsync: (
    folderPath: string,
    organization: string
  ) => Promise<any>;
};
