import './index.css'
import React from 'react';
import Home from './components/Main/Home'
import FooterOne from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slider from './components/Main/Home/Slider/Slider';
import Input from './components/Main/Home/Input/Input';
import Unfold from './components/Main/Home/Unfold/Unfold';

import { doc, getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirestoreDocData, useFirestore, useFirebaseApp } from 'reactfire';

function GetMail() {
  // easily access the Firestore library
  const usersRef = doc(useFirestore(), 'emails', 'users');

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(usersRef);

  // easily check the loading status
  if (status === 'loading') {
    return <p>Getting email</p>;
  }

  return <p>The email is {data.mail}</p>;
}

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <h1>🌯</h1>
      <GetMail />
    </FirestoreProvider>
  );
}

/*
function App() {
  
  return (
    <div className='App'>
    <Header/>
    <Slider/>
    <Input/>
    <Unfold/>
    <FooterOne/>
    </div>
  );
}
*/

export default App;
