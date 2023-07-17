import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // facebook? discord? etc...
  ],
  callbacks: {
    async signIn(user, account, profile) {
      await client.connect();
      console.log(user)
      console.log("Connected to the database");
      const db = client.db("printbnb");

      const existingUser = await db.collection('users').findOne({ email: user.user.email });
      // If user doesn't exist, insert them
      if (!existingUser) {
        const result = await db.collection('users').insertOne(user.user);
        // console.log(result)
        console.log("User inserted");
        client.close();
        return result.insertedId ? true : false;
      } else {
        // console.log(existingUser)
        console.log("User already exists");
        client.close();
        return true;
      }
    },
  },

  database: process.env.MONGODB_URI,
});
