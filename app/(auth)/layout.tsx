import Image from "next/image";
import React, { ReactNode } from "react";
import BackgroundImage from "../../public/login_background.jpg";
import Logo from "../../public/netflix_logo.svg";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative overflow-hidden flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="Image"
        className=" hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />
      <Image
        src={Logo}
        alt="Image"
        width={120}
        height={120}
        className="absolute top-4 left-4 object-contain md:left-10 md:top-6"
        priority
      />
      {children}
    </div>
  );
};

export default layout;
