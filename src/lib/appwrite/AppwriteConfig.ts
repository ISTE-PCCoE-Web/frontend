import { Client, Account, Storage, Databases, Avatars } from 'appwrite';

export const AppwriteConfig = {
    projectId: process.env.REACT_APP_APPWRITE_PROJECT_ID || '',
    url: process.env.REACT_APP_APPWRITE_PROJECT_URL || '',
    storageId: process.env.REACT_APP_APPWRITE_STORAGE_ID || '',
    databaseId: process.env.REACT_APP_APPWRITE_DATABASE_ID || '',
    databaseSavesId: process.env.REACT_APP_DATABASE_SAVES_ID || '',
    databasePostsId: process.env.REACT_APP_DATABASE_POSTS_ID || '',
    databaseUserId: process.env.REACT_APP_DATABASE_USER_ID || '',
}

export const client = new Client();
// console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);
client.setProject(AppwriteConfig.projectId);
client.setEndpoint(AppwriteConfig.url);

export const account = new Account(client);
export const storage = new Storage(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);