import { Client, Account, ID } from 'appwrite';
import config from '../config/config';


export class AuthService
{

  client = new Client();
  account;

  constructor()
  {
    this.client.setEndpoint( config.appwriteUrl ).setProject( config.appwriteProjectId );
    this.account = new Account( this.client );
  }

  async createAccount ( { email, password, name } )
  {
    try
    {
      const userAccount = await this.account.create( Id.unique(), email, password, name );
      if ( userAccount )
      {
        // write a function
        this.login( email, password );
      } else
      {
        return userAccount;
      }

    } catch ( error )
    {
      throw error;
    }
  }

  async login ( { email, password } )
  {
    try
    {
      const loginUser = await this.account.createEmailSession( email, password );
      return loginUser;
    } catch ( error )
    {
      throw error;
    }
  }
  async getCurrentUser ()
  {
    try
    {
      return this.account.get();
    } catch ( error )
    {
      // throw error;
      console.log( error );
    }
    return null;
  }

  async logOutCurrentUser ()
  {
    try
    {
      await this.account.deleteSessions();
    } catch ( error )
    {
      console.log( error );
    }
  }
}

const authService = new AuthService();

export default authService;
