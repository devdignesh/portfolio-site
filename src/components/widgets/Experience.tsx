import { experiencesConfig } from "@/config/experience";
import { Experience } from "@/types/types";
 

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative mt-10 overflow-hidden
      after:content['']
      after:to-transparent
      after:from-background
      after:bg-gradient-to-t
      after:right-0
      after:bottom-[-30px]
      after:w-full
      after:h-20
      after:z-10
      after:absolute"
    >
      <h1 className="text-2xl primary-gradient font-bold tracking-tighter mb-3 z-50 md:text-4xl sm:text-3xl">
        Experiences
      </h1>
      <div className="relative flex flex-col justify-between h-[350px] overflow-y-scroll">
        {experiencesConfig.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
        {/* <div className="relative flex items-center">
          <span className="mt-3 w-3 h-3 rounded-full icon-glow-muted"></span>
          <p className="mt-3 mx-1">👋</p>
        </div> */}
      </div>
    </section>
  );
};

const Experience = ({ experience }: { experience: Experience }) => {
  return (
    <div className="relative flex gap-2 items-start text-md pb-4">
      <span
        className="
                  mt-2 w-3 h-3 rounded-full icon-glow-muted
                  before:content['']
                  before:to-primary/40
                  before:from-primary/40
                  before:bg-gradient-to-t
                  before:left-[5px]
                  before:top-5
                  before:w-[1px]
                  before:h-full
                  before:absolute
                  "
      ></span>
      <div>
        <h1 className="text-base font-medium mb-1   sm:text-lg">{experience.title}</h1>
        <div className="primary-gradient">
          <a
            href={experience.company.url}
            target="_blank"
            className="hover:underline font-medium primary-gradient text-sm sm:text-base"
          >
            {experience.company.name}
          </a>
          {" | "}
          <span className="text-sm sm:text-base primary-gradient">{experience.employmentType}</span>
        </div>
        <p className="text-sm text-muted-foreground">
          {experience.start} - {experience.end}
        </p>
        <a href={experience.location.url} className="my-1 text-sm primary-gradient">
          {experience.location.name}
        </a>
        <ul className="mt-3 text-muted-foreground">
          {experience.description.map((desc, index) => (
            <li key={index} className="max-w-lg text-sm">
              - {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
