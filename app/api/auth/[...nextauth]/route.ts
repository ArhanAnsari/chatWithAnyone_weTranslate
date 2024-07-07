import { authOptions } from "@/auth";
import { adminDb } from "@/firebase-admin";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

