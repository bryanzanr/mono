import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

const serviceAccount = {
  "type": process.env.FIREBASE_SERVICE_ACCOUNT_TYPE!, 
  "project_id": process.env.FIREBASE_SERVICE_ACCOUNT_PROJECT_ID!, 
  "private_key_id": process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY_ID!, 
  "private_key": process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY!.replace(/\\n/g, '\n'), 
  "client_email": process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL!, 
  "client_id": process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_ID!, 
  "auth_uri": process.env.FIREBASE_SERVICE_ACCOUNT_AUTH_URL!, 
  "token_uri": process.env.FIREBASE_SERVICE_ACCOUNT_TOKEN_URL!, 
  "auth_provider_x509_cert_url": process.env.FIREBASE_SERVICE_ACCOUNT_CERT_URL!, 
  "client_x509_cert_url": process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_URL!, 
  "universe_domain": process.env.FIREBASE_SERVICE_ACCOUNT_UNIVERSE_DOMAIN!
} as admin.ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
export { db };
