import './index.css';
import React from 'react';
import Main from './components/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

/*
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
*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
