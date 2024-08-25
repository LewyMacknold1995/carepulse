import { Query } from "node-appwrite";

import { users } from "../appwrite.config";

export const createUser = async (user: CreateUserParams) => {
    try {

    } catch (error: any) {
        // Check existing user
        if (error && error?.code === 409) {
          const existingUser = await users.list([
            Query.equal("email", [user.email]),
          ]);
    
          return existingUser.users[0];
        }
        console.error("An error occurred while creating a new user:", error);
      }
    };