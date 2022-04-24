export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  email = 'email',
  stackoverflow = 'stackoverflow',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@VanshajGirotra',
  site: 'vanshajgirotra.com',
  links: {
    github: 'https://github.com/vanshajg',
    linkedin: 'https://linkedin.com/in/vanshajgirotra',
    twitter: 'https://twitter.com/vanshajgirotra',
    email: 'mailto:contact@vanshajgirotra.com',
    stackoverflow: 'https://stackoverflow.com/users/5830776/',
  },
};
