import { useState } from 'react';

const navLinks = [
  { href: '#skills', label: './skills' },
  { href: '#projects', label: './projects' },
  { href: '#education', label: './education' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-50 border-b border-outline-variant bg-surface-container-lowest/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-md py-3">
        {/* Terminal prompt */}
        <a
          href="#"
          className="font-mono text-sm font-semibold text-primary-container transition-colors hover:text-primary"
        >
          <span className="text-outline">→</span>{' '}
          sarthak_thapa@dev:~$
          <span className="ml-1 inline-block h-4 w-[2px] bg-primary-container animate-blink align-middle" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-lg list-none m-0 p-0">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="font-mono text-sm text-outline transition-colors hover:text-primary-container"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-outline hover:text-primary-container transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-outline-variant bg-surface-container-lowest px-md py-sm">
          <ul className="flex flex-col gap-sm list-none m-0 p-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block font-mono text-sm text-outline py-2 transition-colors hover:text-primary-container"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
