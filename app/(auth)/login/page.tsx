import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import GoogleIcon from "../../../public/google.svg";
import Image from "next/image";

const page = () => {
  return (
    <div className=" mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:px-14 md:max-w-sm ">
      <form action="">
        <h1 className=" text-3xl font-semibold text-white">Login</h1>
        <div className=" space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className=" bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant="destructive"
            className=" bg-[#e50914] w-full"
          >
            Log in
          </Button>
        </div>
        <div className="text-gray-500 text-sm  mt-2">
          New to Netflix?{" "}
          <Link href="/sign-up" className=" text-white hover:underline">
            Sign up now!
          </Link>
        </div>
        <div className=" w-full flex items-center justify-center gap-x-3 mt-6">
          <Button variant="outline" size="icon" className="">
            <GithubIcon className=" w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="">
            <Image src={GoogleIcon} alt="Icon" className="w-6 h-6" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default page;
