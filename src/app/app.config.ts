import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyBVwrgO49WF2mafI4VZJjShfo7CRqxMCTY",
  authDomain: "rodzinny-planner.firebaseapp.com",
  projectId: "rodzinny-planner",
  storageBucket: "rodzinny-planner.firebasestorage.app",
  messagingSenderId: "568084161910",
  appId: "1:568084161910:web:408b75a9dfc68853820657"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ]
};
