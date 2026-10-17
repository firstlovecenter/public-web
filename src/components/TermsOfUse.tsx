import { Link } from 'react-router-dom';
import LegalPage, { ContactDetails, ExternalLink } from './LegalPage';

const TermsOfUse = () => (
  <LegalPage title="Terms of Use">
    <p>
      These Terms of Use ("Terms") apply to your use of the website www.firstlovecenter.com (the "Website"), the
      official channels of First Love Church on YouTube and other social media (our "Channels"), and the internal
      media tools our team uses to manage those Channels (our "Media Tools"). Together these are our "Services".
    </p>
    <p>
      The Services are provided by First Love Church, a church and non-profit organisation based at the First Love
      Center, Trinity Avenue, Accra, Ghana ("First Love Church", "we", "us" or "our").
    </p>
    <p>By using our Services, you agree to these Terms. If you do not agree, please do not use our Services.</p>

    <h2>1. Our Services</h2>
    <p>
      Our Website shares information about First Love Church, our services, events and ministries, and lets you
      respond to our message or express interest in serving. Our Channels share recordings of our services,
      teaching, worship and events.
    </p>
    <p>
      We provide the Services free of charge, as part of our ministry. We may change, suspend or stop any part of
      the Services at any time, without notice.
    </p>

    <h2>2. YouTube</h2>
    <p>
      Our Channels on YouTube, and the Media Tools our team uses to manage them, use YouTube API Services. By using
      or interacting with our YouTube channels, you agree to be bound by the YouTube Terms of Service:{' '}
      <ExternalLink href="https://www.youtube.com/t/terms" />
    </p>
    <p>
      How we handle personal information is explained in our <Link to="/privacy">Privacy Policy</Link>, which also
      refers to the Google Privacy Policy: <ExternalLink href="https://policies.google.com/privacy" />
    </p>
    <p>
      Our Media Tools are internal tools for First Love Church only. They are not available to the public, and only
      members of our media team whom we have authorised may use them, for church purposes and in line with these
      Terms, the YouTube Terms of Service and YouTube's policies.
    </p>

    <h2>3. Using our Services responsibly</h2>
    <p>When you use our Services, including when you comment on or message our Channels, you agree not to:</p>
    <ul>
      <li>
        post or send anything that is unlawful, abusive, threatening, harassing, hateful, defamatory, obscene or
        sexually explicit;
      </li>
      <li>impersonate any person, or misrepresent your connection with First Love Church;</li>
      <li>post spam, advertising or scams, or links to harmful websites;</li>
      <li>share another person's private or personal information without their permission;</li>
      <li>infringe anyone's copyright, trademark or other rights;</li>
      <li>interfere with, disrupt or try to gain unauthorised access to our Services or systems; or</li>
      <li>use automated means to collect information from our Services without our permission.</li>
    </ul>
    <p>
      You are responsible for anything you post or send. The views expressed in comments and messages are those of
      the people who post them, not of First Love Church.
    </p>

    <h2>4. Comments, live chat and moderation</h2>
    <p>
      We want our Channels to be welcoming places that reflect our church's values. We may review, approve, reply
      to, hold, hide or remove any comment or message on our Channels, and hide or block any user, at our discretion
      and without notice, including where we believe content breaches these Terms, our community guidelines or the
      rules of the platform. Some of this moderation is assisted by automated and artificial intelligence (AI)
      tools, which our media team operates and oversees.
    </p>
    <p>
      Replies posted on our Channels are general in nature. They are not personal pastoral, medical, legal,
      financial or other professional advice. If you need personal help, please contact the church directly or, in
      an emergency, contact your local emergency services.
    </p>

    <h2>5. Forms and follow-up</h2>
    <p>
      If you submit a form on our Website (for example the salvation response form or the Get Involved form), you
      confirm that the information you give is accurate and your own, and you agree that we may contact you to
      follow up, as described in our <Link to="/privacy">Privacy Policy</Link>. You can ask us to stop contacting
      you at any time.
    </p>

    <h2>6. Our content and intellectual property</h2>
    <p>
      Unless stated otherwise, the content of our Services, including sermons, teaching, music, recordings, videos,
      images, logos, text and design, belongs to First Love Church or to the people and organisations who have
      licensed it to us, and is protected by copyright and other laws.
    </p>
    <p>
      You may watch, listen to and share links to our content for personal, non-commercial and ministry purposes.
      You must not copy, re-upload, edit, sell, broadcast or otherwise use our content for any other purpose without
      our prior written permission. Using our content on YouTube or other platforms is also governed by those
      platforms' rules.
    </p>
    <p>To ask for permission, contact us using the details in section 13.</p>

    <h2>7. Other websites and services</h2>
    <p>
      Our Services include links to, or content from, other websites, apps and services, such as Dag Heward-Mills
      books, podcasts, music streaming services, mobile apps, Google Maps and social media platforms. We do not
      control them and are not responsible for their content, availability or privacy practices. Your use of them
      is governed by their own terms.
    </p>

    <h2>8. Disclaimer</h2>
    <p>
      Our Services are provided "as is" and "as available". As far as the law allows, we make no promises or
      warranties of any kind about the Services, including that they will always be available, uninterrupted,
      secure or free from errors or viruses, or that any information on them is complete, accurate or up to date.
    </p>
    <p>
      Spiritual teaching and other content on our Services is shared for general encouragement and teaching. It is
      not a substitute for professional advice in medical, legal, financial or other matters.
    </p>

    <h2>9. Limitation of liability</h2>
    <p>
      As far as the law allows, First Love Church, and its pastors, leaders, staff and volunteers, will not be
      liable for any indirect, incidental, special or consequential loss or damage, or for any loss of data, arising
      from or connected with your use of, or inability to use, our Services, or from any content posted by other
      users.
    </p>
    <p>
      Nothing in these Terms excludes or limits any liability that cannot be excluded or limited under applicable
      law.
    </p>

    <h2>10. Indemnity</h2>
    <p>
      If you use our Services in breach of these Terms or the law, you agree to be responsible for, and to
      compensate First Love Church for, any reasonable claims, losses or costs that result, as far as the law
      allows.
    </p>

    <h2>11. Changes to these Terms</h2>
    <p>
      We may update these Terms from time to time. The latest version will always be on this page, with its
      effective date. By continuing to use our Services after a change, you accept the updated Terms.
    </p>

    <h2>12. Governing law</h2>
    <p>
      These Terms are governed by the laws of the Republic of Ghana. Any dispute will be subject to the jurisdiction
      of the courts of Ghana. Where possible, we would first like to resolve any concern with you directly and
      amicably.
    </p>

    <h2>13. Contact us</h2>
    <ContactDetails />
  </LegalPage>
);

export default TermsOfUse;
