import { Client, Account, Databases, Query, Storage } from 'appwrite';
import config from '../config/config';

export class Service
{
  client = new Client();
  database;
  bucket;
  constructor()
  {
    this.client.setEndpoint( config.appwriteUrl ).setProject( config.appwriteProjectId );
    this.database = new Databases( this.client );
    this.bucket = new Storage( this.client );
  }

  async cretePost ( { title, content, featureImage, status, userId, slug } )
  {
    try
    {
      return await this.database.createDocument( config.appwriteDatabaseId, config.appwriteCollectionId, slug, {
        title,
        content,
        status,
        featureImage,
        userId
      } );
    } catch ( error )
    {
      console.log( "Error:", error );
    }
  }
  async editPost ( slug, { title, content, featureImage, status, userId, } )
  {
    try
    {

      return await this.database.updateDocument( config.appwriteDatabaseId, config.appwriteCollectionId, slug, {
        title,
        content,
        status,
        featureImage,
        userId
      } );
    } catch ( error )
    {
      console.log( "Error:", error );
    }
  }
  async deletePost ( { slug } )
  {
    try
    {
      await this.database.deleteDocument( config.appwriteDatabaseId, config.appwriteCollectionId, slug );
      return true;
    } catch ( error )
    {
      console.log( "Error:", error );
      return;
    }
  }

  async getPost ( slug )
  {
    try
    {
      await this.database.getDocument( config.appwriteDatabaseId, config.appwriteCollectionId, slug );
      return true;
    } catch ( error )
    {
      console.log( "Error:", error );
      return;
    }
  }
  async getPosts ( queries = [
    Query.equal( "status", "active" )
  ] )
  {
    try
    {
      return await this.database.listDocuments( config.appwriteDatabaseId, config.appwriteProjectId,
        queries );
    } catch ( error )
    {
      console.log( "Error:", error );
      return;
    }
  }


  // file upload service

  async uploadFile ( file )
  {
    try
    {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch ( error )
    {
      console.log( "Appwrite serive :: uploadFile :: error", error );
      return false;
    }
  }

  async deleteFile ( fileId )
  {
    try
    {
      await this.bucket.deleteFile(
        config.appwriteBucketId,
        fileId
      );
      return true;
    } catch ( error )
    {
      console.log( "Appwrite serive :: deleteFile :: error", error );
      return false;
    }
  }

  getFilePreview ( fileId )
  {
    return this.bucket.getFilePreview(
      config.appwriteBucketId,
      fileId
    );
  }
  //https://appwrite.io/docs/references/cloud/client-web/storage
}

const appwriteService = new Service();

export default appwriteService;