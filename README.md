# Q-ZIPS website

A complete static product site for Q-ZIPS by Q-CUBIC. No framework, dependency installation, build command, external fonts, API keys or database is required. The supplied Windows installer is included unchanged.

## Q-Cubic showcase revision

The homepage now serves both as a Q-ZIPS product page and a showcase of Q-Cubic's work. It links to https://q-cubic.com as supplied by the owner; external availability was not verified. Only the known Q-ZIPS software and this product website are featured, without invented client work.

The visual revision adds expressive sans/serif typography, a CSS archive illustration with an interactive pack/unpack sequence, scroll-triggered section reveals, a reading-progress indicator, feature-change transitions, and a contrasting Q-Cubic portfolio section. These are illustrations, not real file processing. Motion respects reduced-motion preferences. Content remains available without JavaScript. The new appearance is in `dist/showcase.css`, layered over the original shared page styles.

Current revision checks: 44 local references passed, installer checksum unchanged, JavaScript syntax passed. The earlier desktop/mobile browser checks apply to the first design. Browser policy blocked automated access to the local file for this revision, so the revised layout and animations still need a visual browser review. Refresh the local file in your browser to see the updates.

## Preview

Open `dist/index.html` directly, or install Node.js and run `npm run preview` from this folder. Visit http://127.0.0.1:4187. Press Ctrl+C to stop. `npm run check` verifies local links, anchors, installer integrity and displayed checksums. `node --check dist/app.js` checks script syntax.

## Deploy to Netlify

### Drag and drop (simplest)

1. Extract the project ZIP.
2. Sign in to Netlify and open https://app.netlify.com/drop (or the manual deploy option in your dashboard).
3. Drag the **dist folder** into the upload area. Its root must contain `index.html`, `_headers`, `assets` and `downloads`. Do not upload the parent project folder for a manual deployment.
4. Netlify provides a hosted site URL. Open it and check the home page, privacy page and installer download. The included `_headers` applies download and security headers.
5. Save that Netlify URL. Domain and email configuration can wait until you have reviewed the site.

### Deploy from Git

1. Put this project's contents in your repository, including the installer in `dist/downloads`.
2. Import the repository into Netlify.
3. Leave the build command blank; set the publish directory to `dist`. The included `netlify.toml` sets this directory automatically.
4. Deploy. Later commits update the site.

Official deployment guide: https://docs.netlify.com/deploy/create-deploys/

## Included pages and behavior

- Responsive product homepage with original promotional artwork, six-feature explorer, format information, installation steps, FAQ and download details.
- Privacy notes distinguishing website behavior from unverified application behavior.
- Design attribution and custom 404 page.
- Mobile menu, keyboard focus states, native FAQ disclosures, reduced-motion support, checksum copy on supported secure origins, and working no-JavaScript navigation/downloads.
- Direct download of the actual supplied installer; no simulated download and no external release placeholder.

## Installer provenance and limits

File: `Q-ZIPS-Setup-1.0.0.exe`

- Product/version metadata: Q-ZIPS / 1.0.0
- Publisher metadata: Q-CUBIC (not a cryptographically verified publisher)
- Description: Q-ZIPS Setup
- Size: 1,252,656 bytes (1.25 decimal MB)
- Windows Authenticode result: NotSigned
- SHA-256: `8CB20645D71C495C36653C7A68C3889C787C22EC17020A09B134A59B7B4DA88E`

Inspected with file metadata, Get-AuthenticodeSignature and Get-FileHash. The installer was not executed, unpacked or modified. No security audit, compatibility test or application-functionality test was performed. Minimum Windows version, CPU architecture, installed size, license/pricing, app privacy and telemetry are unknown and are not invented on the site. The poster's laptop does not establish macOS support.

Feature copy comes from the supplied promotional image: create 7Z/ZIP/TAR, extract RAR/ZIP/7Z/ISO and 20+ formats, AES-256 protection, file splitting, archive testing and conversion. These are advertised capabilities, not independently verified test results. No performance benchmarks or testimonials are fabricated.

## Maintaining the site

- Main copy: `dist/index.html`; styling: `dist/styles.css`; interactions: `dist/app.js`.
- Artwork: `dist/assets/q-zips-promo.png`, unchanged from the supplied image.
- To release another installer, add the versioned file and update the download URL, filename, version, size, signature status and checksum in HTML, `SHA256SUMS.txt`, `_headers`, and `check.mjs`. Keep checks aligned with the new file.
- To host downloads elsewhere later, use a stable HTTPS release-asset URL, update the download text and privacy notes, and verify the remote download. No external hosting is needed for this 1.25 MB package.
- Before announcing a release, confirm app requirements, licensing, privacy behavior and a real support contact with the product owner. Add verified details to the site. Do not invent a support email.
- Once you know the production URL, use an absolute URL for `og:image` and add a canonical URL if desired. No placeholder domain is shipped.
- Hosting logs are controlled by the hosting service. If analytics or forms are introduced, update the privacy notes accordingly.

## Design direction and attribution

Product: Windows archive utility. Character: precise, practical, composed. World: files, archives and desktop tools. Main visual moment: the original violet Q-ZIPS promotional artwork. Signature detail: monospace archive-format labels.

Audit of the supplied poster for web adaptation: dense text and repeated creation callouts; broad gradients and floating decorations; oversized display logo. The website keeps the original artwork intact but moves readable claims into HTML, uses calm dark surrounding surfaces, one violet accent, a consistent spacing scale, restrained typography, varied section layouts and purposeful interactions. No decorative looping motion or synthetic product screenshot was introduced.

Design guidance adapted from **unslop by Damir Sokolovsky**, https://github.com/heydamir/unslop, licensed CC BY 4.0: https://creativecommons.org/licenses/by/4.0/. Attribution also appears on the public Design credits page. No endorsement is implied. Product artwork and installer retain their respective rights; the unslop license does not license the Q-ZIPS software or artwork.

