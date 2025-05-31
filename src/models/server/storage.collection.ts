import { storage } from "./config";
import {questionAttachmentBucket} from "../name";
import { Permission } from "appwrite";

export default async function getOrCreateStorage() {
    try {
        await storage.getBucket(questionAttachmentBucket)
        console.log('Storage connected')
    } catch (error) {
        try {
            await storage.createBucket(questionAttachmentBucket, questionAttachmentBucket, [
                Permission.read('any'),
                Permission.read('users'),
                Permission.create('users'),
                Permission.update('users'),
                Permission.delete('users')
            ],
            false,
            undefined,
            undefined,
            ['jpg', 'png', 'gif', 'jpeg', 'webp', 'pdf', 'heic'],
        )
        console.log('Storage connected')
        console.log('Storage connected')
        } catch (error) {
            console.error("Error creating storage", error)
        }
        
       
    }

 
  
}
