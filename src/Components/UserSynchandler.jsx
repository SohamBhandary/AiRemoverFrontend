import { useAuth, useUser } from '@clerk/clerk-react';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/appContext';
import toast from 'react-hot-toast';
import axios from "axios";

const UserSynchandler = () => {
   const { isLoaded, isSignedIn } = useAuth(); // removed getToken
   const { user } = useUser();
   const [synced, setSynced] = useState(false);
   const { backendUrl, loadUserCredits } = useContext(AppContext);

   useEffect(() => {
      const saveUser = async () => {
         if (!isLoaded || !isSignedIn || synced) return;

         try {
            const userData = {
               clerkId: user.id,
               email: user.primaryEmailAddress.emailAddress,
               firstName: user.firstName,
               lastName: user.lastName
            };

            // ✅ No token sent here — it’s public
            await axios.post(`${backendUrl}/users`, userData);

            // ✅ Now load credits (protected route)
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
