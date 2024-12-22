export interface Profile {
  name: string;
  title: string;
  about: string;
  image: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Skill {
  category: string;
  items: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
}