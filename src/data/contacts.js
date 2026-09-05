import { EmailIcon, GitHubIcon, LinkedInIcon } from '../components/icons.jsx'

// `external` controls target="_blank" — a mailto: hands off to the mail client
// and would otherwise leave a dead blank tab behind.
export const contacts = [
  { label: 'aak3943@eid.utexas.edu', href: 'mailto:aak3943@eid.utexas.edu', Icon: EmailIcon, external: false },
  { label: 'linkedin.com/in/aravkarnik', href: 'https://www.linkedin.com/in/aravkarnik/', Icon: LinkedInIcon, external: true },
  { label: 'github.com/Firefudge1', href: 'https://github.com/Firefudge1', Icon: GitHubIcon, external: true },
]
