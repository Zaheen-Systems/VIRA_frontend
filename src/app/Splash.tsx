import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import ZaheenLogo from "@/app/assets/logos/zaheen_logo.png"; // Update the path to your logo file

type SplashProps = {
  handleReady: (url: string) => void;
};

const Splash: React.FC<SplashProps> = ({ handleReady }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStreamUrl = () => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_CEREBRIUM_URL}/create_tavus_conversation`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CEREBRIUM_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "sales" }),
    })
      .then(async (response) => {
        if (response.status === 200) {
          const data = await response.json();
          handleReady(data.result.conversation_url);
        } else {
          throw new Error("Failed to fetch stream URL");
        }
      })
      .catch((error) => {
        console.error("Error fetching stream URL:", error);
        setError("We are at capacity at the moment. Please try again later!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-between bg-primary-200 p-4">
      <div className="flex flex-col gap-8 items-center w-full max-w-3xl mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-center">VIRA</h1>

        <p className="text-center text-lg text-primary-600">
          An angry zoo visitor has come up to share his greviences, talk to him and calm him down. 
        </p>

        {isLoading ? (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </Button>
        ) : (
          <Button onClick={fetchStreamUrl}>Start Demo</Button>
        )}

        {error && <div className="text-red-500 mt-4">Error: {error}</div>}
      </div>
      <div className="flex flex-col items-center gap-2 mb-8">
        <Image src={ZaheenLogo} alt="Zaheen Systems Logo" width={150} height={50} />
      </div>
    </main>
  );
};

export default Splash;
