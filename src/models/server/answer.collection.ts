import { databases } from "./config";
import { db, answerCollection } from "../name";
import { Permission } from "appwrite";

export default async function createAnswerCollection() {
  // Create a new collection
  await databases.createCollection(db, answerCollection, answerCollection, [
    Permission.read("users"),
    Permission.read("any"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);

  console.log("Answer collection created");
  // Create attributes for the collection

  await Promise.all([
    databases.createStringAttribute(db, answerCollection, "title", 100, true),
    databases.createStringAttribute(
      db,
      answerCollection,
      "content",
      10000,
      true,
    ),
    databases.createStringAttribute(db, answerCollection, "authorId", 50, true),
    // databases.createStringAttribute(db, answerCollection, "tags", 50, true, undefined, true),
    // databases.createStringAttribute(db, answerCollection, "attachmentId", 50, false),
  ]);

  console.log("Answer attributes created");

 
}
