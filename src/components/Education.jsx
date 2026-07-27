export default function Education() {
  return (
    <section id="education" className="relative z-10 px-md py-xl md:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-header">cat education.log</h2>

        <div className="border border-outline-variant rounded-xl bg-surface-container-lowest/80 p-lg max-w-2xl">
          {/* Degree header */}
          <div className="flex items-start gap-md">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-container/10 border border-outline-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl text-primary-container">
                school
              </span>
            </div>
            <div className="flex-1">
              <h3 className="font-mono text-lg font-semibold text-on-surface mb-1">
                Bachelor of Computer Applications
              </h3>
              <p className="font-mono text-sm text-primary-container mb-1">
                BCA — 2nd Year
              </p>
              <p className="text-sm text-outline mb-md">
                Expected Graduation: 2027
              </p>

              {/* Coursework */}
              <div className="border-t border-outline-variant pt-md">
                <p className="font-mono text-xs text-outline mb-sm uppercase tracking-wider">
                  relevant_coursework:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Data Structures',
                    'Algorithms',
                    'Database Systems',
                    'Operating Systems',
                    'Computer Networks',
                    'Web Development',
                    'Software Engineering',
                    'OOP with Java',
                  ].map((course) => (
                    <span key={course} className="tech-tag">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
