"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function ProductRedirect() {
  const { id } = useParams();

  useEffect(() => {
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.alkwaityalawalapp";
    
    // Delay to allow app to open (if installed)
    setTimeout(() => {
      window.location.href = playStoreUrl;
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Redirecting...</h2>
      <p>
        If you are not redirected,{" "}
        <a href="https://play.google.com/store/apps/details?id=com.alkwaityalawalapp">
          click here
        </a>{" "}
        to download the app.
      </p>
    </div>
  );
}
