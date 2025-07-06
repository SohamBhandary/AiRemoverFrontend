import React from 'react';
import Menubar from './Components/Menubar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import UserSynchandler from './Components/UserSynchandler';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import Result from './Pages/Result';

const App = () => {
  return (
    <>
      <UserSynchandler />
      <Menubar />
      <Toaster />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/result"
          element={
            <>
              <SignedIn>
                <Result />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
