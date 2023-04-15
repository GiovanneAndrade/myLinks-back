export type Links = {
  linkId: { id: number }[];
}

export type MetaDados = {
  id:number;
  website:string;
  title:string;
  banner:string;
  description:string;
  createdAt:Date;
}
export type PageData = {
  metadata: {
    website: string;
    title?: string;
    description?: string;
    banner?: string;
    themeColor?: string;
  };
  socials: Record<string, string>;
  favicons: string[];
}

export type Link = {
  linkId: number;
}

