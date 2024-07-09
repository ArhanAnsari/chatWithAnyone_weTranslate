import { initFirestore } from '@auth/firebase-adapter';
import admin from 'firebase-admin';

let app;

if(!admin.apps.length) {
    app = admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY
                ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n")
                : undefined,
        }),
    });
}

const adminDb = initFirestore({
    credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY
        ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n")
        : undefined,
    }),
});

const adminAuth = admin.auth(app);

export { adminAuth, adminDb };