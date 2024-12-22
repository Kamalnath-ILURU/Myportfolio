import { Profile, Project, Certificate, Skill } from '../data/types';

const STORAGE_KEYS = {
  PROFILE: 'portfolio_profile',
  PROJECTS: 'portfolio_projects',
  CERTIFICATES: 'portfolio_certificates',
  SKILLS: 'portfolio_skills',
};

export const storage = {
  getProfile: (): Profile | null => {
    const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
    return data ? JSON.parse(data) : null;
  },

  setProfile: (profile: Profile): void => {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  },

  getProjects: (): Project[] => {
    const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    return data ? JSON.parse(data) : [];
  },

  setProjects: (projects: Project[]): void => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  },

  getCertificates: (): Certificate[] => {
    const data = localStorage.getItem(STORAGE_KEYS.CERTIFICATES);
    return data ? JSON.parse(data) : [];
  },

  setCertificates: (certificates: Certificate[]): void => {
    localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(certificates));
  },

  getSkills: (): Skill[] => {
    const data = localStorage.getItem(STORAGE_KEYS.SKILLS);
    return data ? JSON.parse(data) : [];
  },

  setSkills: (skills: Skill[]): void => {
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills));
  },
};