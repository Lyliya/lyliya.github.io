interface Experience {
  title: string;
  date: string;
  detail: string;
  skills: string[];
  link?: string;
}

interface Action {
  text: string;
  link: string;
  icon: string;
}

interface Project {
  title: string;
  body: string;
  image: string;
  actions?: Action[];
  skills: string[];
}

export { Experience, Project, Action };
