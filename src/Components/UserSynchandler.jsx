import { useAuth, useUser } from '@clerk/clerk-react';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/appContext';
import toast from 'react-hot-toast';
import axios from "axios";

const UserSynchandler = () => {
   const { isLoaded, isSignedIn, getToken } = useAuth(); // ✅ include getToken
   const { user } = useUser();
   const [synced, setSynced] = useState(false);
   const { backendUrl, loadUserCredits } = useContext(AppContext);

   useEffect(() => {
      const saveUser = async () => {
         if (!isLoaded || !isSignedIn || synced) return;

         try {
            const token = await getToken(); // ✅ Get Clerk JWT

            const userData = {
               clerkId: user.id,
               email: user.primaryEmailAddress.emailAddress,
               firstName: user.firstName,
               lastName: user.lastName,
               photoUrl: user.imageUrl
            };

            await axios.post(
               `${backendUrl}/users`,
               userData,
               {
                  headers: {
                     Authorization: `Bearer ${token}` // ✅ Send token
                  }
               }
            );

            await loadUserCredits();
            setSynced(true);
         } catch (err) {
            console.error("User synchronization failed", err);
            toast.error("User sync failed, please try again");
         }
      };

      saveUser();
   }, [isLoaded, isSignedIn, user, synced]);

   return null;
};

export default UserSynchandler;
