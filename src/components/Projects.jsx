import backupCliImg from '../assets/project-backup-cli.png';
import hostelMgmtImg from '../assets/project-hostel-mgmt.png';
import freelanceBidImg from '../assets/project-freelance-bid.png';

const projects = [
  {
    title: 'Database Backup CLI',
    description: 'Automated PostgreSQL/MySQL backup tool with intelligent scheduling and cloud integration.',
    image: backupCliImg,
    features: [
      'Cron-based automated backup scheduling',
      'Compression & encryption for secure storage',
      'Cloud upload support (AWS S3, Google Cloud)',
      'Restore verification & integrity checks', 
    ],
    tags: ['Go', 'Mysql', 'Bash',],
    github: 'https://github.com/Sarthak05-code',
  },
  {
    title: 'Hostel Management System',
    description: 'Full-stack hostel administration platform with role-based access control.',
    image: hostelMgmtImg,
    features: [
      'Room allocation & availability tracking',
      'Student fee management & payment history',
      'Role-based access (admin, warden, student)',
      'Reporting dashboard with analytics',
    ],
    tags: ['Java', 'MySQL', 'Spring Boot'],
    github: 'https://github.com/Sarthak05-code',
  },
  {
    title: 'Freelance Bidding System',
    description: 'Freelancer-client matching platform with real-time bidding and integrated payments.',
    image: freelanceBidImg,
    features: [
      'Project posting & bid management',
      'Real-time messaging between parties',
      'Payment integration with Stripe',
      'Rating & review system',
    ],
    tags: ['PHP', 'HTML', 'MYSQL', 'CSS'],
    github: 'https://github.com/Sarthak05-code',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-md py-xl md:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-header">ls ~/projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
          {projects.map(({ title, description, image, features, tags, github }) => (
            <div key={title} className="project-card flex flex-col">
              {/* Project thumbnail */}
              <div className="-mx-[24px] -mt-[24px] mb-md overflow-hidden rounded-t-xl group">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="h-px bg-outline-variant" />
              </div>

              {/* Project title */}
              <div className="flex items-start justify-between mb-sm">
                <h3 className="font-mono text-base font-semibold text-primary-container">
                  <span className="text-outline mr-1">▸</span>
                  {title}
                </h3>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-outline hover:text-primary-container transition-colors shrink-0 ml-2"
                  aria-label={`View ${title} on GitHub`}
                >
                  <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>

              {/* Description */}
              <p className="text-sm text-on-surface-variant mb-md leading-relaxed">
                {description}
              </p>

              {/* Feature bullets */}
              <ul className="mb-md space-y-1.5 flex-1">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-outline"
                  >
                    <span className="text-primary-container mt-0.5 shrink-0">›</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 pt-md border-t border-outline-variant">
                {tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
