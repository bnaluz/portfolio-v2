export type Project = {
  title: string;
  description: string;
  longDescription?: string[] | string;
  image: string;
  link: string;
  slug: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    title: 'Amazon Web Services (AWS)',
    description:
      'Building the Aura Design System for AWS: engineering a scalable React component library and flexible patterns that power the global AWS web experience and high-traffic event takeovers.',
    slug: 'aws-amazon',
    image: '/aws-logo.png',
    link: 'https://aws.amazon.com',
    technologies: [
      'React',
      'TypeScript',
      'SCSS',
      'Aura Design System',
      'Storybook',
      'Adobe Experience Manager (AEM)',
      'Adobe Analytics API',
      'WCAG Accessibility',
    ],
    longDescription: [
      'Since joining the AWS CX-Eng team last summer, I’ve been focused on building out Aura, our new internal design system. My role is to engineer robust, accessible React components that serve as the building blocks for the entire AWS site. I focus on making these patterns highly flexible so they can be wrapped into AEM templates, giving content authors a high-quality UI to work with while maintaining brand consistency across thousands of pages.',
      "A major test for the Aura system was the re:Invent Takeover Experience. I was responsible for the 'Daily Recap' section, which was a complex, grouped content area with a left-side menu and dynamic right-side content. I built specialized keynote speaker cards and article summary patterns that had to perform perfectly under massive global traffic. During the takeover, I also worked closely with Product Managers to refactor our analytics wrapper, ensuring that every click and hover was accurately captured by the Adobe Analytics API.",
      'When I’m not building new components for Aura, I’m focused on the long-term health of the site. I recently collaborated with a third-party team on a site-wide accessibility audit, remediating patterns to meet WCAG standards. Right now, I’m also leading a technical spike to migrate our feedback systems from Aperture to Pulse. I’m mapping out the implementation to ensure 1:1 data parity, making sure the transition is seamless so that our user feedback loops stay reliable and high-quality.',
    ],
  },
  {
    title: 'Alphasense',
    description:
      'Redesign of AlphaSense’s website with dynamic content and improved user experience.',
    longDescription:
      'While at Instrument, I worked on redesigning AlphaSense’s website, an AI-powered platform for market research and insights. I built the footer, card system, buttons, integrated Marketo forms, and set up dynamic resource pages. Using Next.js, React, and TypeScript, I focused on making components reusable, fast, and easy to maintain. The site runs on Vercel, and with Sanity, the marketing team can update content quickly. The project was all about building reliable, flexible front-end patterns and working closely with design and product teams.',
    image: '/AlphaSense.png',
    link: 'https://www.alpha-sense.com',
    slug: 'alphasense-website',
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel', 'Sanity'],
  },
  {
    title: 'mBOLDen Change',
    description:
      'Website redesign and rebrand for a non-profit, with dynamic content and improved user experience.',
    longDescription:
      'As the lead engineer on the rebrand of My New Red Shoes to mBOLDen Change, I worked closely with the executive director and led a team of three engineers. I managed tasks through Jira, ran standups, and coordinated UAT sessions with stakeholders to make sure the site met their needs. We built the site using Next.js, React, TypeScript, SCSS, Vercel, and Sanity, focusing on reusable components, dynamic content pages, and a smooth editorial workflow. My role combined hands-on development with team leadership, ensuring the site was both fully functional and easy for the non-profit team to maintain.',
    image: '/mbolden-change-logo.png',
    link: 'https://mboldenchange.org',
    slug: 'mbolden-change-website',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'SCSS',
      'Vercel',
      'Sanity',
    ],
  },
  {
    title: 'LegiAct',
    description:
      'Civic engagement platform connecting students with state legislatures.',
    longDescription:
      'I contributed to LegiAct, a platform designed to connect students in rural areas with their state legislatures, enabling them to actively participate in the political process. My work involved implementing a comprehensive site restructure using Next.js, TypeScript, tRPC, Prisma, and Tailwind CSS. I led the development of interactive UI forms that integrate with Slack Apps, enhancing user interaction and resulting in a 30% quicker response time to inquiries. Additionally, I collaborated on version control with GitHub, ensuring smooth deployment to Vercel.',
    image: '/legiact.png',
    link: 'https://www.legiact.com/',
    slug: 'legiact',
    technologies: [
      'Next.js',
      'TypeScript',
      'tRPC',
      'Prisma',
      'Tailwind CSS',
      'GitHub',
      'Vercel',
      'Slack API',
    ],
  },
  {
    title: 'ADDC',
    description:
      'Internal inventory management tool for tracking products, vendors, and purchase orders.',
    longDescription:
      'I developed Count Me Inv, a full-stack inventory management application used internally at Arnouse Digital Devices Corp. The platform helps the organization track products, vendors, and purchase orders, streamlining workflows and saving around 20% of weekly administrative time. I built scalable CRUD features for managing products, vendors, purchase orders, organizations, and user roles, with real-time updates powered by Prisma and Supabase. On the front end, I optimized state management with Zustand, created a responsive interface using Tailwind CSS, and ensured smooth user interactions. I also collaborated directly with stakeholders to continuously refine the platform, focusing on user experience, performance, and maintainability.',
    image: '/addclogo.png',
    link: 'https://addc.com',
    slug: 'count-me-inv',
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'Supabase',
      'Zustand',
      'Tailwind CSS',
    ],
  },
];
