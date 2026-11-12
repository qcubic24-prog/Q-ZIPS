# Validation results

## Latest Q-Cubic showcase revision

- 44 local links, assets and fragment anchors passed.
- JavaScript syntax passed; installer size and SHA-256 remain unchanged.
- Added Q-Cubic links, portfolio section, expressive typography, click-driven archive motion, scroll reveals and reduced-motion handling.
- Automated visual review of this revision was blocked by the browser tool's local-file URL policy. The visual and interaction checks below refer to the initial design, not the revised showcase layout.

## Initial design checks

- All 41 local references (links, assets and fragment anchors) resolved; page IDs are unique.
- JavaScript syntax check passed.
- Packaged installer is 1,252,656 bytes and matches the supplied file's SHA-256. Displayed checksum and checksum text file match.
- Homepage visually reviewed at desktop size and 390 px mobile width; complete desktop page reviewed.
- No horizontal document overflow at 390 px or 320 px viewport widths.
- Five alternate feature controls changed the feature description correctly; initial creation view renders correctly.
- Mobile menu opened, and selecting Download closed it and followed the section link.
- Checksum disclosure opened; Copy checksum reported success.
- No browser console errors were reported during interaction checks.

Limits: Netlify production hosting and its response headers have not been tested because this is a local project delivery, not a live deployment. The executable was not run; software behavior, malware status, compatibility and advertised capabilities have not been independently tested. No domain or email configuration was performed.
