<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
## 2026-09-17
- Updated browser tab title in `index.html` from `BCSP Digital Badge / Tamaya Petty` to `BCSP Digital Badge / Edward E French Sr`.
## 2026-09-17
- Updated certified date from `08/27/2026` to `09/16/2026` in `src/data/credentialContent.ts` and `src/sections/DesktopCredentialPage/components/CredentialDetails.tsx`, including recertification cycle start date parity.
## 2026-09-11
- Updated credential holder name from `Tamaya Fontae L Petty` to `Edward E French Sr` in `src/data/credentialContent.ts`.
- Replaced image-based BCSP logo render with bold uppercase black text `BCSP` in `src/sections/DesktopCredentialPage/index.tsx` and `src/sections/MobileCredentialPage/components/MobileFooter.tsx`.
- Ensured transparent background logo presentation via `bg-transparent` text styling in desktop and mobile credential surfaces.
- Cleanup pass: removed temporary `__ANIMA_DBG__ desktop-logo-asset` console probe from `src/sections/DesktopCredentialPage/index.tsx`.
- Parity pass: switched `credentialContent.assets.logo` to the BCSP black transparent full logo source in `src/data/credentialContent.ts` for stronger visual match on `/`.
- Sanitized disclosure links by replacing `showMore/showLess` from `javascript://;` to `#` in `src/data/credentialContent.ts` to avoid unsafe URL warnings.
- Debug pass: surfaced the uploaded black transparent BCSP logo on the desktop `/` render path by adding a positioned logo anchor in `src/sections/DesktopCredentialPage/index.tsx` (was previously mobile-only usage).
- Added one temporary runtime probe `__ANIMA_DBG__ desktop-logo-asset` in `src/sections/DesktopCredentialPage/index.tsx` for fallback debug verification.
- Removed `javascript://;` warning path for issue link by sanitizing href in `src/sections/DesktopCredentialPage/components/IssueLink.tsx` and changing `credentialContent.links.issueHub` to `#` in `src/data/credentialContent.ts`.
## 2026-09-11
- Debug fix: added a React Router redirect route in `src/App.tsx` for `/index.html` to navigate to `/` using `<Navigate replace />`, so Sandpack preview path mismatch no longer renders an empty app root.
- Updated the mobile footer logo asset in `src/data/credentialContent.ts` to the uploaded black `BCSP` text-mark image (`uploaded-asset-1789099210915-0.png`) for bottom-left parity with the reference screenshot.
- Repointed mobile favicon links in `index.html` to BCSP live homepage icon assets under `/hs-fs/.../BCSP_theme/images/` (`favicon.ico` and `apple-touch-icon.png`) after `/_resources/images` showed the wrong (star) icon on mobile.
## 2026-09-11
- Corrected mobile favicon source in `index.html` to BCSP original black icon set under `/_resources/images` (`favicon.ico`, `apple-touch-icon.png`, and `apple-touch-icon-180x180.png`) for closer mobile parity.
## 2026-09-11
- Added favicon tags in `index.html` to match the original mobile site icon sources: `https://www.bcsp.org/assets/favicon/favicon.ico` and `https://www.bcsp.org/assets/favicon/apple-touch-icon.png`.
## 2026-09-11
- Updated browser tab title in `index.html` to `BCSP Digital Badge / Tamaya Petty`.
## 2026-09-06
- Adjusted right-side green bar positioning in `src/sections/DesktopCredentialPage/index.tsx` by making the page root `relative` and changing the bar from `fixed` to `absolute` so alignment tracks the credential layout container.
## 2026-09-06
- Updated certification number from `CHST-23261` to `CHST-24261` in `src/data/credentialContent.ts` and `src/sections/DesktopCredentialPage/components/CredentialDetails.tsx` as a targeted content-only change.
## 2026-09-06
- Updated recertification cycle end year from `2031` to `2032` in `src/data/credentialContent.ts` and `src/sections/DesktopCredentialPage/components/CredentialDetails.tsx` as a targeted content-only change.
## 2026-09-06
- Updated certified date in `src/data/credentialContent.ts` and `src/sections/DesktopCredentialPage/components/CredentialDetails.tsx` from "07/17/2026" to "08/27/2026", including recertification cycle start date.
## 2026-09-06
- Updated credential holder name in `src/data/credentialContent.ts` from "Anthony Phillips" to "Tamaya Fontae L Petty" as a targeted content-only change.
## 2026-09-06
- Updated person location value in `src/data/credentialContent.ts` from "Mesa, AZ · United States" to "Atlanta, GA · United States" as a targeted content-only change.
## 2026-09-06
- Removed temporary `__ANIMA_DBG__ minimum-requirements-boxes` logging from `src/sections/DesktopCredentialPage/components/MinimumRequirements.tsx` per debug cleanup requirement.
- Refined the four desktop requirement icon shapes by moving gradient/border/radius onto a fixed inner `42x42` wrapper so table row height no longer stretches the green area.
- Tightened right-side desktop green rail in `src/sections/DesktopCredentialPage/index.tsx` from `inset-y-0` to `top-[173px] bottom-0` to avoid full-height overextension.
## 2026-09-06
- Minimum requirements desktop green icon boxes were normalized in `src/sections/DesktopCredentialPage/components/MinimumRequirements.tsx` to consistent fixed `42x42` width/height/max-width, box-border model, and centered icon alignment across all four cells.
- Added temporary runtime probe `__ANIMA_DBG__ minimum-requirements-boxes` in `MinimumRequirements` to confirm this render path during fallback debug session.
- The app mount path appears intact in source (`src/index.tsx` mounts `App` to `#app` and `src/App.tsx` root route uses a `<div>` wrapper), so current pass is tightly scoped to the requested green box parity.
## 2026-09-06
- Fixed route wrapper mount issue by replacing invalid route-level `<body>` wrappers with `<div>` in `src/App.tsx` so `/` reliably renders into `#app`.
- Tuned desktop profile photo frame in `src/sections/DesktopCredentialPage/index.tsx` with explicit 196x196 container sizing, overflow clipping, and stable image block/object-fit behavior.
- Tuned all four minimum-requirement green icon boxes in `src/sections/DesktopCredentialPage/components/MinimumRequirements.tsx` with fixed 42x42 sizing, centered icon layout, and consistent desktop box model.

## 2026-09-06
- Final parity pass: removed temporary `__ANIMA_DBG__` logs from `src/sections/DesktopCredentialPage/components/CredentialBadge.tsx` and `src/sections/MobileCredentialPage/components/MobileHeader.tsx`.
- Enforced explicit desktop badge raster sizing (`backgroundSize: 250px 250px`) in `CredentialBadge` to prevent generated-link render drift.
- Pattern: for BCSP generated badges, keep encoded URL size token and mirror it with explicit CSS background sizing on the render container.

## 2026-09-06
- Badge source is now unified with BCSP generated badge link format in `src/data/credentialContent.ts` (`mobileBadgeImage` switched from static Anima PNG to `badge.bcsp.org` with `|115` size parameter).
- Runtime instrumentation added for badge render path in `src/sections/DesktopCredentialPage/components/CredentialBadge.tsx` and `src/sections/MobileCredentialPage/components/MobileHeader.tsx` using `__ANIMA_DBG__` logs.
- Pattern: for parity-sensitive badge rendering, keep generated URL token consistent and vary only the explicit size suffix per viewport.

## 2026-07-15
- Step 5 verification pass: modal interactions and in-page disclosure behaviors are now live instead of static hidden placeholders.
- `src/App.tsx` now controls `IssueModal` open/close state via `DesktopCredentialPage` trigger.
- `Disclaimer`, `MobileFooter`, `CredentialStatus`, and `MobileCredentialDetails` now toggle Show More/Less and expires-note tooltip visibility with local state.
- Pattern confirmed: preserve generated visual classes and add behavior by minimal state wiring plus conditional class toggles.

## 2026-07-15
- Step 4 responsive tuning: `MobileHeader` now accepts `backgroundImageUrl` + `badgeImageUrl` props and renders those with inline background styles for stable mobile parity.
- `src/sections/MobileCredentialPage/index.tsx` now sources mobile header background, badge, and active status directly from `src/data/credentialContent.ts`.
- `src/sections/DesktopCredentialPage/index.tsx` now uses `credentialContent.assets.footerBackgroundImage` to keep desktop background asset centralized.
- Pattern confirmed: preserve generated class scaffolding and tune parity by replacing hardcoded assets/text with shared content props.

## 2026-07-15
- Step 3 section rebuild wired desktop/mobile details, requirements, and disclaimers to `src/data/credentialContent.ts` while preserving existing class-based layout.
- `CredentialCard` now composes `CredentialDescription` directly and passes badge URL to `CredentialBadge`, fixing parity flow and prop usage.
- Pattern confirmed: keep generated visual class structure stable, move all visible copy/links/assets to centralized constants for safer pixel-tuning passes.

## 2026-07-15
- Pixel-match clone foundation now centralizes reusable badge/person/link/asset data in `src/data/credentialContent.ts`.
- `DesktopCredentialPage/index.tsx` and `MobileCredentialPage/index.tsx` now pull person/asset/link values from shared content.
- `IssueLink` and `CredentialBadge` were made prop-driven for reuse across future parity passes.
</coder>
