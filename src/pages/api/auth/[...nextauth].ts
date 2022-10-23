import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { getMongoClient } from "../../../lib/mongodb";

const clientId = process.env.GOOGLE_ID;
const clientSecret = process.env.GOOGLE_SECRET;

if (!clientId || !clientSecret) {
  throw new Error("Missing required credentials");
}

const authOptions = {
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],
  adapter: MongoDBAdapter(getMongoClient()),
};

export { authOptions };
export default NextAuth(authOptions);
