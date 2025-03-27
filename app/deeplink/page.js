"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function ProductRedirect() {
  const { id } = useParams();

  useEffect(() => {
    const appScheme = `yourapp://productDetails/${id}`; // Your deep link scheme
    const playStoreUrl = "https://play.google.com/store/apps/details?id=your.package.name";

    // Attempt to open the app
    window.location.href = appScheme;

    // Redirect to Play Store if the app is not installed
    setTimeout(() => {
      window.location.href = playStoreUrl;
    }, 2000);
  }, [id]);

  return (
    <div>
      <h2>Redirecting...</h2>
      <p>
        If you are not redirected,{" "}
        <a href="https://play.google.com/store/apps/details?id=your.package.name">
          click here
        </a>{" "}
        to download the app.
      </p>
    </div>
  );
}
