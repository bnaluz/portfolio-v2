export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  slug: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    title: 'AWS',
    description:
      'A personal portfolio website to showcase my projects and skills.',
    image: 'aws-logo.png',
    link: 'https://google.com',
    slug: 'portfolio-website',
    technologies: ['React', 'TypeScript', 'CSS'],
  },
  {
    title: 'Alphasense',
    description: 'An online platform for buying and selling products.',
    image: '/alphasense-logo.png',
    link: 'https://myecommerce.com',
    slug: 'ecommerce-platform',
    technologies: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'mBOLDen Change',
    description:
      'A blogging application with user authentication and CRUD features.',
    image: '/mbolden-change-logo.png',
    link: 'https://myblog.com',
    slug: 'blog-application',
    technologies: ['Django', 'Python', 'SQLite'],
  },
];
