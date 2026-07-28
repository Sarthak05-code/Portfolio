const skillCategories = [
  {
    title: 'languages',
    icon: 'terminal',
    items: ['Java', 'Python', 'JavaScript', 'SQL', 'Go'],
  },
  {
    title: 'databases_&_devops',
    icon: 'database',
    items: ['MySQL', 'PostgreSQL', 'Docker', 'Git', 'Oracle', 'CI/CD'],
  },
  {
    title: 'frontend',
    icon: 'web',
    items: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-md py-xl md:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-header">cat skills.txt</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {skillCategories.map(({ title, icon, items }) => (
            <div
              key={title}
              className="border border-outline-variant rounded-xl bg-surface-container-lowest/80 p-lg transition-all hover:border-primary-container/40 hover:bg-surface-container-lowest"
            >
              {/* Category header */}
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-xl text-primary-container">
                  {icon}
                </span>
                <h3 className="font-mono text-sm font-semibold text-on-surface">
                  {title}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
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
