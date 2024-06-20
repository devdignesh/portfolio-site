import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/config/projects";

const Projects = () => {
  return (
    <section>
      <span className="text-2xl primary-gradient font-bold tracking-tighter md:text-3xl sm:text-2xl">
        Projects
      </span>
      {projects.map((project, index) => (
        <div className="mt-5" key={index}>
          <a href={project.link} target="_blank">
            <Card className="cursor-pointer">
              <CardHeader>
                <CardTitle>
                  {project.title} - {project.project_title}
                </CardTitle>
                <CardDescription>
                  <ul className="mt-3 text-muted-foreground">
                    {project.description.map((desc, index) => (
                      <li key={index} className="max-w-lg text-sm">
                        - {desc}
                      </li>
                    ))}
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
