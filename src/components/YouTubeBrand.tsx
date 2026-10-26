/** Official artwork, including its original transparent margins. See public/images/brands/README.md. */
const YouTubeBrand = ({ music = false }: { music?: boolean }) => (
  <span className="youtube-brand" aria-hidden="true">
    <img
      src={music ? '/images/brands/youtube-music.png' : '/images/brands/youtube-icon-white.png'}
      alt=""
      width={music ? 512 : 1255}
      height={music ? 512 : 1075}
      className={music ? 'youtube-brand-music' : 'youtube-brand-icon'}
    />
  </span>
);

export default YouTubeBrand;
