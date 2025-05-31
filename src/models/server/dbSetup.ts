import { db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import { databases } from "./config";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";

export default async function getOrCreateDB() {
  try {
    await databases.get(db);
    console.log("Database connected");
  } catch (error) {
    try {
      await databases.create(db, db);
      console.log("Database created");
// create collections
      Promise.all([
        await createQuestionCollection(),
        await createAnswerCollection(),
        await createCommentCollection(),
        await createVoteCollection(),
      ]);
      console.log("Collection created");
      console.log("Database connected");
    } catch (error) {
      console.error("Error creating database or collections", error);
    }
  }
 return databases
}
