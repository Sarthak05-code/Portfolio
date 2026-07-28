import backupCliImg from "../assets/project-backup-cli.png";
import hostelMgmtImg from "../assets/project-hostel-mgmt.png";
import freelanceBidImg from "../assets/project-freelance-bid.png";

const projects = [
  {
    title: "Database Backup CLI",
    description:
      "A production-ready database backup and disaster recovery utility built in Go for automated MySQL and MariaDB backups, restoration, and operational management.",
    image: backupCliImg,
    features: [
      "Cobra-based CLI with a local web dashboard",
      "Streaming gzip compression for efficient backup storage",
      "Automated backup and restore with fault-tolerant retries",
      "Secure credential handling with hidden password prompts",
      "Concurrency protection and graceful interruption handling",
      "Structured JSON audit logging with optional Slack notifications",
    ],
    tags: ["Go", "MySQL", "MariaDB", "Bash"],
    github: "https://github.com/Sarthak05-code/databaseRecovery-app",
  },

  {
    title: "Hostel Management System",
    description:
      "A full-stack hostel administration platform built with Java and Spring Boot, designed to manage hostel operations through a structured layered architecture and MySQL database integration.",
    image: hostelMgmtImg,
    features: [
      "Spring Boot backend with layered Controller-Service-Repository architecture",
      "MySQL database integration using Spring Data JPA",
      "DTO pattern for clean and structured data transfer",
      "Responsive user interface built with Thymeleaf and Tailwind CSS",
      "MVC architecture with server-side template rendering",
      "Clean separation of application logic and database operations",
    ],
    tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Tailwind CSS"],
    github: "https://github.com/Sarthak05-code/Hostel-Management-System",
  },

  {
    title: "Freelance Bidding System",
    description:
      "A lightweight freelance task marketplace built with vanilla PHP that connects clients and freelancers through task posting, competitive bidding, and bid management.",
    image: freelanceBidImg,
    features: [
      "Client task posting with open, in-progress, and completed lifecycle",
      "Freelancer bidding with duplicate bid prevention and bid history",
      "Automatic rejection of competing bids when one bid is accepted",
      "Separate admin and client dashboards with search and management tools",
      "Client profile and task editing with role-based session protection",
      "MySQL database integration running on Apache and XAMPP",
    ],
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Sarthak05-code/Freelance---BiddingSystem",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-md py-xl md:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-header">ls ~/projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
          {projects.map(
            ({ title, description, image, features, tags, github }) => (
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

                {/* Project title + GitHub link */}
                <div className="flex items-start justify-between gap-3 mb-sm">
                  <h3 className="font-mono text-base font-semibold text-primary-container">
                    <span className="text-outline mr-1">▸</span>
                    {title}
                  </h3>

                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-outline-variant text-xs font-mono text-outline hover:text-primary-container hover:border-primary-container/50 transition-all shrink-0"
                    aria-label={`View ${title} source code on GitHub`}
                  >
                    {/* GitHub Icon */}
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>

                    <span>View Source</span>
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
                      <span className="text-primary-container mt-0.5 shrink-0">
                        ›
                      </span>
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
            ),
          )}
        </div>
      </div>
    </section>
  );
}
