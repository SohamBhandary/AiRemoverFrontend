import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import React from "react";
import toast from "react-hot-toast";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [credits, setCredit] = useState(null); // ✅ fix: default null
  const { getToken } = useAuth();
  const { user } = useUser(); // get the current Clerk user
  const[image,setImage]=useState(false);
  const[resultImage,setResultImage]=useState(false);

  const loadUserCredits = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(`${backendUrl}/users/credits`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setCredit(response.data.data.credits);
      } else {
        toast.error("Error loading the credits");
      }
    } catch (error) {
      toast.error("Error loading the credits");
    }
  };

  // ✅ fix: create user on backend and load credits when user is available
  useEffect(() => {
    const initUser = async () => {
      try {
        const token = await getToken();

        // Call backend to ensure user is created with default credits
        await axios.post(
          `${backendUrl}/users`,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // Then load credits
        await loadUserCredits();
      } catch (error) {
        console.log("Error creating/loading user:", error);
        toast.error("Failed to initialize user credits");
      }
    };

    if (user) {
      initUser();
    }
  }, [user]); // re-run when user logs in or signs up

  const contextValue = {
    credits,
    setCredit,
    backendUrl,
    loadUserCredits,
    setImage,
    setResultImage
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
