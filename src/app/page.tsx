import Details from "@/components/widgets/Details";
import { ExperienceSection } from "@/components/widgets/Experience";
import Navbar from "@/components/widgets/Navbar";
import Projects from "@/components/widgets/Projects";

export default function Home() {
  return (
    <>
      <div className="mx-auto py-4 px-4 md:px-8  sm:max-w-5xl items-start justify-start">
        <Navbar />
        <div className="">
        <div className="space-y-4 sm:space-y-8 mt-5 mb-10 sm:mt-10 max-w-xl mx-0 md:mx-auto lg:mx-0 sm:mx-auto">
            <Details />
            <ExperienceSection />
            <Projects/>
          </div>
        </div>
          
         
      </div>
    </>
  );
}
