 
 type defaultProfile = {
    name: string;
    url?: string;
    image?: string;
  };
  
  
  export type Experience = {
    title: string;
    employmentType: string;
    company: defaultProfile;
    location: defaultProfile;
    start: string;
    end: string;
    description: string[];
  };
  