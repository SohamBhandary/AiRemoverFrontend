import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [credits, setCredit] = useState(null); // ✅ fix: default null
  const { getToken } = useAuth();
  const { user } = useUser(); // get the current Clerk user
  const[image,setImage]=useState(true);
  const[resultImage,setResultImage]=useState(false);
  const{isSignedIn}=useUser();
  const{openSignIn}=useClerk();
 const navigate =useNavigate();

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


  useEffect(() => {
    const initUser = async () => {
      try {
        const token = await getToken();

        
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
  }, [user]); 

  const removeBg=async(selectedImage)=>{
    try{
      if(!isSignedIn){
        return openSignIn();
      }
      setImage(selectedImage);
      setResultImage(false);
      navigate("/result");
    const token=await getToken();
    const formData=new FormData();
    selectedImage && formData.append("file",selectedImage);
   const { data: base64Image } = await axios.post(
  `${backendUrl}/images/remove-background`,
  formData,
  { headers: { Authorization: `Bearer ${token}` } }
);

// ✅ FIX: Add "data:image/png;base64," prefix here:
setResultImage(`data:image/png;base64,${base64Image}`);
    setCredit(credits-1)
    }catch(error){
      console.log(error);
      toast.error("Error loading credits")
      


    }
  }

  const contextValue = {
    credits,
    setCredit,
    backendUrl,
    loadUserCredits,
    image,
    setImage,
    resultImage,
    setResultImage,
    removeBg
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
