import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

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
};

export { authOptions };
export default NextAuth(authOptions);
