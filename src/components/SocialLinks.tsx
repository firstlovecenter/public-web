import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandX } from '@tabler/icons-react';
import YouTubeBrand from './YouTubeBrand';

const platforms = {
  facebook: { label: 'Facebook', href: 'https://www.facebook.com/firstlovecenter/', icon: IconBrandFacebook },
  instagram: { label: 'Instagram', href: 'https://www.instagram.com/firstlovecenter', icon: IconBrandInstagram },
  x: { label: 'X', href: 'https://x.com/FirstLoveCenter', icon: IconBrandX },
  youtube: { label: 'YouTube', href: 'https://www.youtube.com/channel/UCEBUZZ9Gyaek_l92J728Yuw', icon: null },
  tiktok: { label: 'TikTok', href: 'https://www.tiktok.com/@firstlovecenter', icon: IconBrandTiktok },
};

const SocialLinks = ({ navigation = false }: { navigation?: boolean }) => {
  const order: (keyof typeof platforms)[] = navigation
    ? ['facebook', 'instagram', 'x', 'youtube', 'tiktok']
    : ['facebook', 'youtube', 'instagram', 'x'];

  return (
    <div className={`flex flex-wrap items-center justify-center ${navigation ? 'social-links-navigation' : 'gap-1'}`} aria-label="Social media links">
      {order.map((key) => {
        const { label, href, icon: Icon } = platforms[key];
        return (
          <a key={key} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="social-brand-link" data-platform={key}>
            {Icon ? <Icon className="h-6 w-6" aria-hidden="true" /> : <YouTubeBrand />}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
