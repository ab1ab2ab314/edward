<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
- 2026-09-17: Updated certified date from "08/27/2026" to "09/16/2026" in `src/data/credentialContent.ts` and `src/sections/DesktopCredentialPage/components/CredentialDetails.tsx`, including recertification cycle start date.
- 2026-09-11: Updated credential holder name from "Tamaya Fontae L Petty" to "Edward E French Sr" in `src/data/credentialContent.ts`.
- 2026-09-11: Replaced image logos with bold uppercase black `BCSP` text and transparent background styling in `src/sections/DesktopCredentialPage/index.tsx` and `src/sections/MobileCredentialPage/components/MobileFooter.tsx`.
- 2026-09-11: Removed `__ANIMA_DBG__` desktop logo log in `src/sections/DesktopCredentialPage/index.tsx`, switched `assets.logo` to BCSP full black logo, and replaced `showMore/showLess` `javascript://;` links with `#` in `src/data/credentialContent.ts`.
- 2026-09-11: Made the black transparent BCSP logo visible on `/` by adding a desktop-rendered logo anchor in `src/sections/DesktopCredentialPage/index.tsx`; added temporary `__ANIMA_DBG__ desktop-logo-asset` log for fallback debug verification.
- 2026-09-11: Removed issue-link `javascript://;` warning path by sanitizing href in `src/sections/DesktopCredentialPage/components/IssueLink.tsx` and changing `issueHub` in `src/data/credentialContent.ts` to `#`.
- 2026-09-11: Added `/index.html` route redirect in `src/App.tsx` (`<Navigate to="/" replace />`) to fix empty render caused by BrowserRouter path mismatch in preview.
- 2026-09-11: Updated `src/data/credentialContent.ts` logo asset to the uploaded black `BCSP` text-mark image (`https://c.animaapp.com/iD8kHGmMdAYh5ca_RM0VTg/img/uploaded-asset-1789099210915-0.png`) to match the bottom-left reference.
- 2026-09-11: Updated mobile icon links in `index.html` to BCSP homepage `/hs-fs/.../BCSP_theme/images/` assets (`favicon.ico`, `apple-touch-icon.png`) after the prior `/_resources/images` target showed a star icon on mobile.
- 2026-09-11: Corrected mobile favicon in `index.html` to BCSP `/_resources/images` icon set (`favicon.ico`, `apple-touch-icon.png`, `apple-touch-icon-180x180.png`) to match the black BCSP mobile icon.
- 2026-09-11: Added favicon links in `index.html` for mobile parity using BCSP original icon URLs (`/assets/favicon/favicon.ico`, `/assets/favicon/apple-touch-icon.png`).
- 2026-09-11: Updated tab title in `index.html` to `BCSP Digital Badge / Tamaya Petty`.
- 2026-09-06: Tuned right-side green bar alignment in `src/sections/DesktopCredentialPage/index.tsx` by setting the desktop page container to `relative` and switching the bar layer from `fixed` to `absolute` so it aligns with the page layout instead of viewport anchoring.
- 2026-09-06: Updated certification number from "CHST-23261" to "CHST-24261" in `src/data/credentialContent.ts` and `src/sections/DesktopCredentialPage/components/CredentialDetails.tsx`.
- 2026-09-06: Updated recertification cycle end year from "2031" to "2032" in `src/data/credentialContent.ts` and `src/sections/DesktopCredentialPage/components/CredentialDetails.tsx`.
- 2026-09-06: Updated certified date in `src/data/credentialContent.ts` and `src/sections/DesktopCredentialPage/components/CredentialDetails.tsx` from "07/17/2026" to "08/27/2026", including recertification cycle start date.
- 2026-09-06: Updated credential holder name in `src/data/credentialContent.ts` from "Anthony Phillips" to "Tamaya Fontae L Petty".
- 2026-09-06: Updated location string in `src/data/credentialContent.ts` from "Mesa, AZ · United States" to "Atlanta, GA · United States".
- 2026-09-06: Removed `__ANIMA_DBG__` probe from `src/sections/DesktopCredentialPage/components/MinimumRequirements.tsx`; reshaped desktop minimum-requirement green icons by moving gradient/border/radius to fixed inner `42x42` wrappers to prevent table-row stretching; adjusted right green rail in `src/sections/DesktopCredentialPage/index.tsx` from `inset-y-0` to `top-[173px] bottom-0`.
- 2026-09-06: Re-tuned desktop minimum requirement green boxes in `src/sections/DesktopCredentialPage/components/MinimumRequirements.tsx` by enforcing consistent `42x42` fixed width/max-width, `box-border`, and flex-centered icon alignment for all four cells; added temporary `__ANIMA_DBG__ minimum-requirements-boxes` render log for fallback verification.
- 2026-09-06: Fixed `/` render wrapper issue in `src/App.tsx` by replacing route-level `<body>` with `<div>`, then tuned profile photo box parity in `src/sections/DesktopCredentialPage/index.tsx` (explicit `196x196`, clipping, stable image fit) and aligned the four desktop green requirement icon boxes in `src/sections/DesktopCredentialPage/components/MinimumRequirements.tsx` (`42x42` fixed sizing + centered icon layout).
- 2026-09-06: Finalized badge parity by removing all `__ANIMA_DBG__` logs from `src/sections/DesktopCredentialPage/components/CredentialBadge.tsx` and `src/sections/MobileCredentialPage/components/MobileHeader.tsx`, and forcing desktop badge render size to `250x250` via `backgroundSize`.
- 2026-09-06: Corrected badge sizing source by switching `mobileBadgeImage` to original BCSP generated badge URL with `|115` in `src/data/credentialContent.ts`; added `__ANIMA_DBG__` render logs in `src/sections/DesktopCredentialPage/components/CredentialBadge.tsx` and `src/sections/MobileCredentialPage/components/MobileHeader.tsx`.
- 2026-07-15: Updated certification number in `src/data/credentialContent.ts` and `src/sections/DesktopCredentialPage/components/CredentialDetails.tsx` from "CHST-23494" to "CHST-23261".
- 2026-07-15: Updated certified date in `src/data/credentialContent.ts` and `src/sections/DesktopCredentialPage/components/CredentialDetails.tsx` from "06/05/2026" to "07/17/2026" (including recertification cycle start).
- 2026-07-15: Updated location in `src/data/credentialContent.ts` from "Neenah, WI · United States" to "Mesa, AZ · United States".
- 2026-07-15: Updated credential holder name in `src/data/credentialContent.ts` from "Aaron Alan Arps" to "Anthony Phillips".
- 2026-07-15: Completed Step 5 interaction verification with live issue modal open/close wiring in `src/App.tsx`, `src/sections/DesktopCredentialPage/index.tsx`, `src/sections/DesktopCredentialPage/components/IssueLink.tsx`, and `src/components/IssueModal.tsx`.
- Added functional Show More/Show Less toggles in `src/sections/DesktopCredentialPage/components/Disclaimer.tsx` and `src/sections/MobileCredentialPage/components/MobileFooter.tsx`.
- Added functional expires tooltip toggles in `src/sections/DesktopCredentialPage/components/CredentialStatus.tsx` and `src/sections/MobileCredentialPage/components/MobileCredentialDetails.tsx`.
- Pattern reinforced: preserve generated class structure and add parity behavior via localized state and conditional visibility classes.
- 2026-07-15: Completed Step 4 responsive tuning by making mobile header background/badge prop-driven in `src/sections/MobileCredentialPage/components/MobileHeader.tsx`.
- Updated `src/sections/MobileCredentialPage/index.tsx` to pull status/background/badge values from `src/data/credentialContent.ts` for parity-safe responsive rendering.
- Updated `src/sections/DesktopCredentialPage/index.tsx` to use centralized `credentialContent.assets.footerBackgroundImage`.
- Pattern reinforced: preserve generated class structure and improve pixel parity via shared content wiring over hardcoded asset literals.
- 2026-07-15: Completed Step 3 section rebuild by moving visible text/links/assets for desktop+mobile into `src/data/credentialContent.ts`.
<!-- NEXT_ENTRY_HERE -->
</changelog>
