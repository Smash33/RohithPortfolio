import profile from '../data/profile.json';

function SocialLinks({ align = 'left', className = '' }) {
  const alignmentClass =
    align === 'center'
      ? 'social-links--center'
      : align === 'right'
        ? 'social-links--right'
        : 'social-links--left';

  return (
    <div className={['social-links', alignmentClass, className].filter(Boolean).join(' ')}>
      <a
        href={profile.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin
      </a>
      <a href={`mailto:${profile.email}`}>
        email
      </a>
      <a
        href={profile.assets.resume_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        resume
      </a>
    </div>
  );
}

export default SocialLinks;
