type User = {
  userid: string;
  createdAt: Date;
  updatedAt: Date;
  profile: {
    username: string;
    email: string;
    displayName: string;
    avatar: string | null;
    banner: string | null;
    description: string | null;
  };
  socials: {
    twitter: string | null;
    instagram: string | null;
    github: string | null;
    website: string | null;
  };
};

export type { User };
