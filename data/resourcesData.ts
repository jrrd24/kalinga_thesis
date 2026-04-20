import {
  BookOpen,
  Presentation,
  ExternalLink,
  FileDown,
  LucideIcon,
} from "lucide-react";

export interface Resource {
  title: string;
  link: string;
  tags: string[];
  type: string;
  citation?: string;
}

export interface ConfigItem {
  icon: LucideIcon;
  colorClass: string;
  btnClass: string;
  hoverClass: string;
  btnText: string;
  btnIcon: LucideIcon;
}

export const RESOURCE_CONFIG: Record<string, ConfigItem> = {
  article: {
    icon: BookOpen,
    colorClass: "text-brand",
    btnClass: "bg-brand hover:bg-brand-accent focus:bg-brand/90",
    hoverClass: "hover:shadow-brand/30",
    btnText: "Read Article",
    btnIcon: ExternalLink,
  },
  "learning-material": {
    icon: Presentation,
    colorClass: "text-brand-secondary",
    btnClass:
      "bg-brand-secondary hover:bg-brand-secondary/90 focus:bg-brand-secondary/80",
    hoverClass: "hover:shadow-brand-secondary/30",
    btnText: "Download PPTX",
    btnIcon: FileDown,
  },
};

export const VIDEOS_DATA = [
  {
    title: "The last Kalinga tattoo artist, Whang Od",
    description: undefined,
    category: "Multimedia",
    type: "video",
    isFeatured: true,
    link: "https://www.youtube.com/watch?v=HPJjQJ1UWn4",
    thumbnailUrl: "/videoThumbnails/wang-od-thumbnail.jpg",
    duration: "26:19",
    order: 2,
  },
  {
    title: "Ullalim; The Story of Kalinga",
    description: undefined,
    category: "Multimedia",
    type: "video",
    isFeatured: true,
    link: "https://www.youtube.com/watch?v=pyEuP5QIQ-c&pp=ygUPa2FsaW5nYSBoaXN0b3J5",
    thumbnailUrl: "/videoThumbnails/ulalim-thumbnail.jpg",
    duration: "16:06",
    order: 1,
  },
];

export const OTHER_RESOURCES = [
  {
    title: "The Kalinga Archaeological Excavation. ",
    link: "https://ejournals.ph/article.php?id=14569",
    tags: ["Related Study / Article"],
    type: "article",
    citation:
      "Citation: Reyes-Magloyuan, M., & Belarmino, M. (2018). The Kalinga Archaeological Excavation. https://ejournals.ph/article.php?id=14569&fbclid=IwY2xjawROm6lleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeRGurIWMqzlYOV6YDJzRV1QE-nhXJmIFsqp9jJ_efhUN4ubS7n291fkdUp9U_aem_Zenua70Lewm1OaK-VDttDg",
  },
  {
    title: "SENATE P.S.R. No. 784",
    link: "https://legacy.senate.gov.ph/lisdata/1946216578!.pdf",
    tags: ["Related Study / Article"],
    type: "article",
  },
  {
    title:
      "Earliest known hominin activity in the Philippines by 709 thousand years ago",
    link: "https://www.nature.com/articles/s41586-018-0072-8?utm_id=97758_v0_s00_e0_tv0#citeas",
    tags: ["Related Study / Article"],
    type: "article",
    citation:
      "Citation: Ingicco, T., Van Den Bergh, G. D., Jago-On, C., Bahain, J., Chacón, M. G., Amano, N., Forestier, H., King, C., Manalo, K., Nomade, S., Pereira, A., Reyes, M. C., Sémah, A., Shao, Q., Voinchet, P., Falguères, C., Albers, P. C. H., Lising, M., Lyras, G., . . . De Vos, J. (2018). Earliest known hominin activity in the Philippines by 709 thousand years ago. Nature, 557(7704), 233–237. https://doi.org/10.1038/s41586-018-0072-8",
  },
  {
    title: "The Kalingas: Their Institutions and Custom Law",
    link: "https://archium.ateneo.edu/phstudies/vol1/iss1/13/",
    tags: ["Related Study / Article"],
    type: "article",
    citation:
      "Lynch, F. (1953). The Kalingas: their institutions and custom law. Philippine Studies Historical and Ethnographic Viewpoints, 1(1). https://doi.org/10.13185/2244-1638.3554",
  },
  {
    title:
      "Exploring Traditional Ecological Knowledge (TEK) in Kalinga Province: Practices, Preservation, and Perspectives",
    link: "https://asianresearchcenter.org/blog/articles/exploring-traditional-ecological-knowledge-tek-in-kalinga-province-practices-preservation-and-perspectives",
    tags: ["Related Study / Article"],
    type: "article",
    citation:
      "Tumbali, G. C. (2025). Exploring Traditional Ecological Knowledge (TEK) in Kalinga Province: Practices, preservation, and perspectives. Religion and Social Communication, 23(1), 9–35. https://doi.org/10.62461/gct101624",
  },
  {
    title: "Culture and History of Kalinga (rizal)",
    link: "https://docs.google.com/presentation/d/1bMV0aWdwJ3eEdU1vtkih4lUL3Mt6MSr_bpfaWFKrtN0/edit?slide=id.g3d64d0ef802_0_65#slide=id.g3d64d0ef802_0_65",
    tags: ["PPT (Materials)"],
    type: "learning-material",
  },
  {
    title: "Political Sttructure and Organization (Kalinga)",
    link: "https://docs.google.com/presentation/d/1t0A3htVLKCQhgvB2Ff7km0GP4JoFej_vjgABBlEZ3pU/edit?slide=id.p#slide=id.p",
    tags: ["PPT (Materials)"],
    type: "learning-material",
  },
  {
    title: "Gammonnang of Rizal — Way of Life",
    link: "https://docs.google.com/presentation/d/1EN2GY3Iws1Kppyo-1pjViQ3VNip8NyDHKPxWDeuy6Cg/edit",
    tags: ["PPT (Materials)"],
    type: "learning-material",
  },
  {
    title:
      "Kalinga peace advocates seek permanent solution to boundary dispute",
    link: "https://pia.gov.ph/news/kalinga-peace-advocates-seek-permanent-solution-to-boundary-dispute/#:~:text=The%20boundary%20was%20established%20on,nga%20ili%2C%E2%80%9D%20Abbacan%20said",
    tags: ["Current Events", "News"],
    type: "article",
  },
  {
    title: "Tribal wars and bodong in the Cordillera",
    link: "https://philippinerevolution.nu/1998-2005/cgi_bin/abshow/abshowba.htm?year=2003;month=10;day=07;edition=eng;article=07",
    tags: ["Current Events", "News"],
    type: "article",
  },
];
