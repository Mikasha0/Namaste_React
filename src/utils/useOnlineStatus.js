import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", ()=>{
        setOnlineStatus(true);
    })
  }, []);

  return onlineStatus;
};
