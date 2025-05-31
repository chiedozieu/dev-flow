import { IndexType } from "node-appwrite";
import { databases } from "./config";
import { db, voteCollection } from "../name";
import { Permission } from "appwrite";

export default async function createVoteCollection() {
    // Create a new collection
  await databases.createCollection(db, voteCollection, voteCollection, [
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);

  console.log("Vote collection created");
  // Create attributes for the collection

  await Promise.all([
    databases.createEnumAttribute(db, voteCollection, "type", ["question", "answer"], true),
    databases.createStringAttribute(db, voteCollection, "typeId", 50, true),
    databases.createEnumAttribute(db, voteCollection, "voteStatus", ["upvote", "downvote"], true),
    databases.createStringAttribute(db, voteCollection, "votedById", 50, true),
   
    
  ]);

  console.log("Vote attributes created");

  
}
