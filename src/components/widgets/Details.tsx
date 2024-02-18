import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ExperienceSection } from "./Experience";

const Details = () => {
  return (
    <>
      <div>
        <span className="text-4xl font-bold font-heading tracking-tight md:text-7xl sm:text-6xl bg-gradient-to-b from-primary to-muted-foreground bg-clip-text text-transparent">
          Dignesh Hirpara<span className="text-4xl md:text-6xl sm:text-7xl">.</span>
        </span>

        <div className="max-w-sm sm:mt-4 ">
          <p className="mt-2 sm:mt-5 text-base  sm:text-lg md:text-xl font-medium leading-loose primary-gradient">
            Fullstack Dev | I turn ideas into M.V.P. & take M.V.P.s to{" "}
            <span className="ml-1 before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-blue-400 before:dark:bg-blue-500 relative inline-block">
              <span className="relative text-white">production</span>
            </span>
          </p>
        </div>
        <div className="flex gap-4 align-middle items-center flex-wrap my-5">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="tracking-normal flex items-center"
          >
            <Link href="/#contact" className=" ">
              Get in touch
            </Link>
          </Button>
          <div className="flex items-center space-x-4">
            <HoverCard openDelay={50} closeDelay={5}>
              <HoverCardTrigger asChild>
                <div className="flex w-10 rounded-full items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-0 rounded-full w-24"
                  >
                    <FiGithub className="text-xl w-12" />
                  </Button>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-60">
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>RDS</AvatarFallback>
                  </Avatar>
                  <div>
                    <a
                      className="text-sm font-semibold underline"
                      href="https://github.com/devdignesh"
                      target="_blank"
                    >
                      devdignesh
                    </a>
                    <p className="text-sm break-all">
                      https://github.com/devdignesh
                    </p>
                    <div className="flex items-center pt-2">
                      <span className="text-xs text-muted-foreground">
                        Connect with me
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard openDelay={50} closeDelay={5}>
              <HoverCardTrigger asChild>
                <div className="flex w-10 rounded-full items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-0 rounded-full"
                  >
                    <CiLinkedin className="text-2xl w-12" />
                  </Button>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-60">
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>RDS</AvatarFallback>
                  </Avatar>
                  <div>
                    <a
                      className="text-sm font-semibold underline"
                      href="https://www.linkedin.com/in/dignesh-hirapara/"
                      target="_blank"
                    >
                      dignesh-hirapara
                    </a>
                    <p className="text-sm break-all">
                      https://www.linkedin.com/in/dignesh-hirapara/
                    </p>
                    <div className="flex items-center pt-2">
                      <span className="text-xs text-muted-foreground">
                        Connect with me
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
