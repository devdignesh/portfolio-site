type defaultProfile = {
  name: string;
  url?: string; 
};

export type Experience = {
  title: string;
  role: string;
  company: defaultProfile;
  location: defaultProfile;
  start: string;
  end: string;
  description: string[];
};

export type Project = {
  title: string;
  project_title:string;
  description: string[];
  link: string;
};
