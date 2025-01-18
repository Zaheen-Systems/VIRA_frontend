'use client'

import { LiveView } from "@/components/LiveView";
import Splash from "./Splash";
import { useState } from "react";

import Header from "../components/ui/header";
import ZaheenLogo from "@/app/assets/logos/zaheen_logo.png";
import Image from 'next/image';
const showSplashPage = process.env.NEXT_PRIVATE_SHOW_SPLASH;


export default function Home() {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [streamUrl, setStreamUrl] = useState<string | null>(null);
  
  

  if (showSplash && streamUrl === null) {
    return <Splash handleReady={(url) => setStreamUrl(url)} />;
  }


  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="text-center mb-8">
      </div>
      {streamUrl && <LiveView url={streamUrl} />}
      
      <div className="flex flex-col items-center gap-2 mb-8">
        <Image src={ZaheenLogo} alt="Zaheen Systems Logo" width={150} height={50} />
      </div>
        
    </main>
  );
}


/*
  return (
    <main>
      <header/>
      {streamUrl && <LiveView url={streamUrl} />}
      <div className="flex flex-col items-center gap-2 mt-auto mb-4">
        <Image src={ZaheenLogo} alt="Zaheen Systems Logo" width={150} height={50} />
      </div>
      public\zaheen_logo.png
    </main>
  );
}
*/