import { databases } from "./config";
import { db, commentCollection } from "../name";
import { Permission } from "appwrite";

export default async function createCommentCollection() {
    // Create a new collection
  await databases.createCollection(db, commentCollection, commentCollection, [
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);

  console.log("Comment collection created");
  // Create attributes for the collection

  await Promise.all([
    databases.createStringAttribute(db, commentCollection, "content", 10000, true),
    databases.createEnumAttribute(db, commentCollection, "type", ["answer", "question"], true),
    databases.createStringAttribute(db, commentCollection, "authorId", 50, true),
    databases.createStringAttribute(db, commentCollection, "typeId", 50, true),
   
    
  ]);

  console.log("Comment attributes created");


  
}
