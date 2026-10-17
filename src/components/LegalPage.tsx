import { ReactNode, useEffect } from 'react';

export const LEGAL_EFFECTIVE_DATE = '17 October 2026';
export const LEGAL_CONTACT_EMAIL = 'socials@firstlovecenter.com';

interface LegalPageProps {
  title: string;
  children: ReactNode;
}

const LegalPage = ({ title, children }: LegalPageProps) => {
  useEffect(() => {
    document.title = `${title} | First Love Center`;
  }, [title]);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-gray-400">First Love Church — First Love Center</p>
          <p className="text-gray-400">Effective date: {LEGAL_EFFECTIVE_DATE}</p>
          <div className="h-1 w-24 mt-6 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full"></div>
        </header>
        <article className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-blue-400 prose-a:break-words hover:prose-a:text-blue-300">
          {children}
        </article>
      </div>
    </div>
  );
};

export const ContactDetails = () => (
  <p>
    First Love Church
    <br />
    First Love Center, Trinity Avenue, Accra, Ghana
    <br />
    Email: <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>
    <br />
    Phone: <a href="tel:+233502315693">050 231 5693</a>
  </p>
);

export const ExternalLink = ({ href }: { href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {href}
  </a>
);

export default LegalPage;
