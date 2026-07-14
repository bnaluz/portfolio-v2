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
      'Adobe Customer Journey Analytics (CJA)',
      'JSON-LD Structured Data',
      'AWS QuickSight',
      'WCAG Accessibility',
    ],
    longDescription: [
      'Since joining the AWS CX-Eng team last summer, I’ve been focused on building out Aura, our new internal design system. My role is to engineer robust, accessible React components that serve as the building blocks for the entire AWS site. I focus on making these patterns highly flexible so they can be wrapped into AEM templates, giving content authors a high-quality UI to work with while maintaining brand consistency across thousands of pages.',
      "A major test for the Aura system was the re:Invent homepage takeover on aws.amazon.com. I built a high-visibility 'Daily Recap' component for the takeover — a grouped content area with a left-side menu and dynamic right-side content, including specialized keynote speaker cards and article summary patterns that had to perform perfectly under massive global traffic. Alongside the build, I updated the template’s analytics events and coordinated closely with the Adobe Customer Journey Analytics (CJA) team to make sure every interaction was captured correctly and the dashboard reporting stayed valid.",
      'I also led a global feedback API migration for the site. This involved updating CSP allowlists and carefully preserving the end-to-end flow from the web layer to our services API, into S3, and on to LLM ingestion for QuickSight reporting. Keeping that pipeline intact was critical, since it powers enhanced translation and sentiment scoring on top of the raw feedback we collect worldwide.',
      'Beyond feature work, I focus on the long-term health of the site. I implemented JSON-LD structured data support for our special templates, mapping author-controlled fields to structured data output and improving Google rich results eligibility across six additional page types. I’ve also collaborated with a third-party team on a site-wide accessibility audit, remediating Aura patterns to meet WCAG standards.',
    ],
  },
  {
    title: 'Alphasense',
    description:
      'Full marketing-site rebuild for AlphaSense, an AI-powered market intelligence platform, delivered in three months by a four-developer team.',
    longDescription:
      'While at Instrument, I was part of a four-developer team that delivered a full rebuild of AlphaSense’s marketing site in three months. I worked across both the Sanity Studio and the Next.js front end, turning Figma designs into reusable, authorable page modules by writing the schemas, queries, and typed React components that let the marketing team compose pages on their own. My hands-on contributions included the footer, card system, buttons, Marketo form integrations, and dynamic resource pages. Throughout the build, I raised the site’s accessibility, SEO, and performance standards using semantic HTML, accessible labels, Sanity SEO fields, and component best practices, which helped us reach 100 Lighthouse scores across all categories. The platform runs on Next.js, React, TypeScript, and SCSS, deployed on Vercel with Sanity CMS powering content.',
    image: '/AlphaSense.png',
    link: 'https://www.alpha-sense.com',
    slug: 'alphasense-website',
    technologies: ['Next.js', 'React', 'TypeScript', 'SCSS', 'Vercel', 'Sanity'],
  },
  {
    title: 'mBOLDen Change',
    description:
      'Nonprofit rebrand and website build, plus the Thread the Change fundraising event site, with dynamic content and a smooth editorial workflow.',
    longDescription:
      'As the volunteer lead engineer on the rebrand of My New Red Shoes to mBOLDen Change, I worked closely with the executive director and coordinated a team of three developers through Jira tickets, standups, stakeholder reviews, and UAT sessions. We built the site using Next.js, React, TypeScript, and SCSS, deployed on Vercel with Sanity, focusing on reusable components and a smooth editorial workflow. I built Sanity Studio schemas and reusable Next.js components for educational resources, reports, statements, case studies, and marketing pages, so the nonprofit’s staff can manage content without developer support. Earlier, I developed the organization’s Thread the Change fundraising event site using Next.js, React, and Tailwind CSS, which supported 100+ guests and 50 volunteers and helped raise more than $40,000.',
    image: '/mbolden-change-logo.png',
    link: 'https://mboldenchange.org',
    slug: 'mbolden-change-website',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'SCSS',
      'Tailwind CSS',
      'Vercel',
      'Sanity',
    ],
  },
  {
    title: 'LegiAct',
    description:
      'Civic engagement platform connecting students with state legislatures.',
    longDescription:
      'I contributed to LegiAct, a platform designed to connect students in rural areas with their state legislatures, enabling them to actively participate in the political process. My work involved a comprehensive platform restructure using Next.js, TypeScript, tRPC, Prisma, and Tailwind CSS, which improved type safety, maintainability, and site performance. I led the development of interactive UI forms that integrate with Slack Apps, improving internal response workflows and reducing inquiry time by roughly 30%. As part of the restructure, I also refactored front-end components to improve reusability and implementation consistency, and I collaborated on version control with GitHub to ensure smooth deployment to Vercel.',
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
      'I developed Count Me Inv, a full-stack inventory management application used internally at Arnouse Digital Devices Corp to track products, vendors, and purchase orders, streamlining workflows and saving around 20% of weekly administrative time. I built the purchase order forms and submission workflows around inventory products, vendors, and project data, creating a cleaner path for future accounting-software integration. I also modeled user roles and permission levels directly in the ORM schema to control access to inventory, vendor, and purchase order workflows across internal teams, and implemented a distributor search workflow that queried vendor APIs by part number so purchasing teams could compare component availability and pricing across account-based suppliers. On the front end, I optimized state management with Zustand and built a responsive interface with Tailwind CSS, backed by real-time updates through Prisma and Supabase. Throughout, I collaborated directly with stakeholders to refine the platform’s user experience, performance, and maintainability.',
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
      'REST APIs',
    ],
  },
];
