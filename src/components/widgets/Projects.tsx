import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Projects = () => {
  return (
    <section>
      <span className="text-2xl primary-gradient font-bold tracking-tighter md:text-4xl sm:text-3xl">
        Projects
      </span>
      <div className="mt-5">
      <a href="https://github.com/devdignesh/nextjs14-weather-app.git" target="_blank">
      <Card className="cursor-pointer">
        <CardHeader>
          <CardTitle>Cloudcraft - weather application</CardTitle>
          <CardDescription>built with React, Next.js 14, Typescript, Redux toolkit and Shadcn UI library</CardDescription>
        </CardHeader>
      </Card>
      </a>
      </div>
    </section>
  );
};

export default Projects;
