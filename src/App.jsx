import { useEffect } from 'react'
import { Phone, Mail, Linkedin, Github, Globe, MapPin, User, BadgeCheck, CalendarDays, FileDown } from 'lucide-react'
import ThemeToggle from './components/ThemeToggle'
import Section from './components/Section'
import Tag from './components/Tag'
import IconLink from './components/IconLink'

function App() {
  useEffect(() => {
    document.title = 'Resume | Portfolio'
  }, [])

  const profile = {
    name: 'Your Name',
    title: 'Full-Stack Developer',
    age: 28,
    city: 'San Francisco, CA',
    nationality: 'American',
    phone: '+1 (555) 123-4567',
    email: 'you@example.com',
    links: {
      telegram: 'https://t.me/username',
      linkedin: 'https://linkedin.com/in/username',
      github: 'https://github.com/username',
      website: 'https://yourdomain.com',
      resume: '#',
    },
    about:
      "I'm a product-minded engineer passionate about building delightful, high-impact web applications. I enjoy solving complex problems, collaborating in cross-functional teams, and delivering clean, maintainable code.",
    education: [
      { school: 'University of Technology', degree: 'B.S. in Computer Science', years: '2014 — 2018' },
      { school: 'Design Institute', degree: 'Certificate in UX/UI Design', years: '2019' },
    ],
    skills: {
      technical: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'FastAPI', 'MongoDB', 'Tailwind', 'Docker', 'CI/CD'],
      soft: ['Communication', 'Leadership', 'Problem Solving', 'Mentorship', 'Agile'],
    },
    experience: [
      {
        company: 'Acme Corp',
        role: 'Senior Frontend Engineer',
        dates: '2022 — Present',
        bullets: [
          'Led the rebuild of the customer portal used by 50k+ monthly users',
          'Improved performance and Core Web Vitals leading to +18% conversions',
          'Mentored 4 engineers and introduced component library standards',
        ],
      },
      {
        company: 'Beta Labs',
        role: 'Full-Stack Developer',
        dates: '2019 — 2022',
        bullets: [
          'Designed and shipped end-to-end features across React + FastAPI',
          'Built CI pipelines and improved test coverage to 85%',
          'Collaborated with design and product to ship consistently on time',
        ],
      },
    ],
    extra: {
      languages: ['English (Native)', 'Spanish (Professional)'],
      certifications: ['AWS Certified Cloud Practitioner', 'Scrum Master (PSM I)'],
      volunteer: ['Tech for Good – mentor'],
      hobbies: ['Photography', 'Running', 'Travel'],
    },
  }

  const ContactItem = ({ icon: Icon, label, value, href }) => (
    <a
      href={href || '#'}
      className="group inline-flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
    >
      <Icon size={18} className="opacity-80 group-hover:opacity-100" />
      <span className="border-b border-transparent group-hover:border-current">{label}: {value}</span>
    </a>
  )

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-950/70 border-b border-gray-200/60 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-indigo-500 to-sky-500" />
            <span className="font-semibold text-gray-900 dark:text-white">{profile.name}</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-600 dark:text-gray-300">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</a>
            <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400">Experience</a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400">Skills</a>
            <a href="#education" className="hover:text-indigo-600 dark:hover:text-indigo-400">Education</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={profile.links.resume} className="hidden sm:inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-4 py-1.5 text-sm font-medium hover:bg-indigo-500 transition-colors">
              <FileDown size={16} /> Download PDF
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <section className="relative grid md:grid-cols-[280px,1fr] gap-8 items-center py-10 sm:py-16">
          <div className="flex md:block items-center md:items-start gap-6">
            <div className="h-36 w-36 sm:h-44 sm:w-44 md:h-56 md:w-56 rounded-2xl overflow-hidden ring-2 ring-indigo-500/20">
              <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 grid place-items-center text-gray-400">
                <User size={48} />
              </div>
            </div>
            <div className="md:hidden">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{profile.name}</h1>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">{profile.title}</p>
            </div>
          </div>

          <div>
            <div className="hidden md:block mb-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{profile.name}</h1>
              <p className="mt-2 text-indigo-600 dark:text-indigo-400 text-lg font-semibold">{profile.title}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2"><BadgeCheck size={18} className="text-indigo-500"/> Age: {profile.age}</div>
              <div className="flex items-center gap-2"><MapPin size={18} className="text-indigo-500"/> {profile.city}</div>
              <div className="flex items-center gap-2"><CalendarDays size={18} className="text-indigo-500"/> {profile.nationality}</div>
              <div className="flex items-center gap-2"><User size={18} className="text-indigo-500"/> {profile.title}</div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <ContactItem icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
              <ContactItem icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <IconLink href={profile.links.linkedin} icon={Linkedin}>LinkedIn</IconLink>
              <IconLink href={profile.links.github} icon={Github}>GitHub</IconLink>
              <IconLink href={profile.links.website} icon={Globe}>Website</IconLink>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-10 pb-20">
          <div className="lg:col-span-2 space-y-12">
            <Section id="about" title="About Me">
              <p>{profile.about}</p>
            </Section>

            <Section id="experience" title="Work Experience">
              <div className="space-y-8">
                {profile.experience.map((job, idx) => (
                  <div key={idx} className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-sm transition-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{job.role} · {job.company}</h3>
                        <p className="text-sm text-gray-500">{job.dates}</p>
                      </div>
                    </div>
                    <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                      {job.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="portfolio" title="Portfolio (Optional)">
              <p>Showcase selected projects with links, screenshots, or case studies.</p>
            </Section>

            <Section id="testimonials" title="Testimonials (Optional)">
              <p>Include short quotes from colleagues or clients.</p>
            </Section>
          </div>

          <div className="space-y-12">
            <Section id="skills" title="Skills">
              <div className="mb-3 text-sm uppercase tracking-wide text-gray-500">Technical</div>
              <div className="flex flex-wrap">
                {profile.skills.technical.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
              <div className="mt-6 mb-3 text-sm uppercase tracking-wide text-gray-500">Soft</div>
              <div className="flex flex-wrap">
                {profile.skills.soft.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </Section>

            <Section id="education" title="Education">
              <div className="space-y-4">
                {profile.education.map((e, i) => (
                  <div key={i} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{e.school}</p>
                      <p className="text-gray-600 dark:text-gray-300">{e.degree}</p>
                    </div>
                    <span className="text-sm text-gray-500 whitespace-nowrap">{e.years}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="additional" title="Additional Information">
              <div className="space-y-3">
                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Languages</p>
                  <div className="flex flex-wrap">
                    {profile.extra.languages.map((l) => (
                      <Tag key={l}>{l}</Tag>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Certifications</p>
                  <div className="flex flex-wrap">
                    {profile.extra.certifications.map((c) => (
                      <Tag key={c}>{c}</Tag>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Volunteer</p>
                  <div className="flex flex-wrap">
                    {profile.extra.volunteer.map((v) => (
                      <Tag key={v}>{v}</Tag>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Hobbies</p>
                  <div className="flex flex-wrap">
                    {profile.extra.hobbies.map((h) => (
                      <Tag key={h}>{h}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            <Section id="contact" title="Contact">
              <div className="space-y-3">
                <ContactItem icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
                <ContactItem icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
                <IconLink href={profile.links.linkedin} icon={Linkedin}>LinkedIn</IconLink>
                <IconLink href={profile.links.github} icon={Github}>GitHub</IconLink>
                <IconLink href={profile.links.website} icon={Globe}>Website</IconLink>
              </div>
            </Section>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-sm text-gray-500 flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
