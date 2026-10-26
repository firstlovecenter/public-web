# YouTube brand assets

Downloaded on 2026-10-26. Files are unmodified official PNG artwork.

- `youtube-icon-white.png`: `YouTube_Icon/Digital/03 White/yt_icon_white_digital.png` from https://www.gstatic.com/marketing-cms/78/29/3e68a1414bb28d0b7e47b44c3c91/youtube-icon.zip, linked by https://brand.youtube/youtube-icon/.
- `youtube-music.png`: YouTube Music artwork from Google's trademark catalogue, https://partnermarketinghub.withgoogle.com/brands/google/trademarks-and-terms/google-trademarks-list/. The catalogue's asset endpoint supplies `logo_youtube_music_2024_q4_color_1x_web_512dp.width-1024.png` from Google's official storage bucket (512 × 512 original image).

## Rendering and clear space

The white icon canvas is 1255 × 1075; its nontransparent artwork bounds are (214, 248)–(1041, 827). Displaying the canvas at 44.561313px high makes the visible mark 24px high. The 64 × 60px solid dark container adds to the artwork's original transparent margins and reserves at least 14px of clear space around the mark, exceeding its play triangle's height.

The music canvas is 512 × 512 with artwork bounds (21, 21)–(491, 491). At 28px canvas height the visible mark is 25.70px high. It uses the same 64 × 60px solid dark container. Do not apply filters, opacity, shadows, recolouring, cropping, or hover transforms to these images or their link containers.

## Sizing decision

Navigation uses transparent link containers on the navbar's solid black background, preserving the same YouTube clear space and visible artwork size. Other social rows retain their dark tiles.

The supplied October 21, 2026 compliance report, section F (III.F.2a), requires at least 20dp. The current brand site's icon and logo pages instead say “Digital: 100px”. This discrepancy was disclosed to the site owner, who explicitly selected the report-based 24px implementation on 2026-10-26. This implementation addresses that report; it does not claim to satisfy the conflicting 100px statement.

API branding guidance: https://developers.google.com/youtube/terms/branding-guidelines.
