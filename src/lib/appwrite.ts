// src/lib/appwrite.ts
import { Account, Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint(
    import.meta.env.VITE_APPWRITE_ENDPOINT || "YOUR_APPWRITE_ENDPOINT"
  )
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || "YOUR_PROJECT_ID");

export const account = new Account(client);
export const databases = new Databases(client);

export const DATABASE_ID =
  import.meta.env.VITE_APPWRITE_DATABASE_ID || "YOUR_DATABASE_ID";
export const ONBOARDING_COLLECTION_ID =
  import.meta.env.VITE_APPWRITE_COLLECTION_ID || "YOUR_COLLECTION_ID";

export { client };

export interface OnboardingApplication {
  $id?: string;
  nickname: string;
  contact: string;
  contactType: "email" | "twitter";
  currentPlatform?: string;
  experience?: string;
  createdAt?: string;
  status?: "pending" | "contacted" | "scheduled" | "completed";
}

export const submitOnboardingApplication = async (
  data: Omit<OnboardingApplication, "$id" | "createdAt" | "status">
) => {
  try {
    const document = await databases.createDocument(
      DATABASE_ID,
      ONBOARDING_COLLECTION_ID,
      "unique()",
      {
        ...data,
        createdAt: new Date().toISOString(),
        status: "pending",
      }
    );
    return { success: true, data: document };
  } catch (error) {
    console.error("Error submitting application:", error);
    return { success: false, error };
  }
};
