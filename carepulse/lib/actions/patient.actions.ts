import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  console.log('createUser function called with:', user);
  try {
      const newUser = await users.create(
          ID.unique(),
          user.email,
          user.phone,
          undefined,
          user.name
      );
      console.log('New User Created:', newUser);
      return parseStringify(newUser);
  } catch (error: any) {
      console.error('Error creating user:', error);

      if (error?.code === 409) {
          try {
              const documents = await users.list([Query.equal("email", [user.email])]);
              const existingUser = documents?.users[0];
              console.log('Existing User Found:', existingUser);
              return existingUser;
          } catch (listError) {
              console.error('Error fetching existing user:', listError);
          }
      }
  }
};


// GET USER
export const getUser = async (userId: string) => {
    try {
      const user = await users.get(userId);
  
      return parseStringify(user);
    } catch (error) {
      console.error(
        "An error occurred while retrieving the user details:",
        error
      );
    }
  };
  
