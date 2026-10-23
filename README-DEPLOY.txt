HISABLY WEBSITE — DYNAMIC APK DOWNLOAD (NO DATABASE)

Website: https://hussainahmodq.github.io/hisably/
Repository: https://github.com/hussainahmodq/hisably

WHAT CHANGED
- Keeps your existing website pages, logo/assets, privacy policy, terms, SEO files, and Google Search Console verification tag.
- Adds release.json. The website reads APK URL/version/size/checksum/release notes from this file.
- No Supabase or other database is used for the website.

UPLOAD THIS ZIP (ANDROID PHONE)
1. Extract this ZIP on your phone.
2. Open the GitHub repository in your browser and replace the matching website files in the repository root with the files from this ZIP. Keep logo.png and release.json in the repository root. For favicon and social preview images, also upload the assets folder.
3. Commit the changes to the main branch and wait for GitHub Pages to publish.
4. Check https://hussainahmodq.github.io/hisably/release.json — it should show the JSON data.
5. Open https://hussainahmodq.github.io/hisably/ and test the Download button.

FUTURE APK UPDATES — EDIT release.json ONLY
On GitHub, open release.json, tap the pencil/Edit button, and update:
- version: new APK version, e.g. 1.0.1
- downloadUrl: direct link to the new APK
- size: APK size, e.g. 18 MB (optional)
- sha256: checksum (optional; leave blank if not calculated)
- releaseNotes: short release notes
- minimumAndroid: minimum Android version (optional)
Then commit changes. Do not edit site.js for routine APK updates.

CURRENT TEST APK LINK
Google Drive file ID: 1o0WEwkvHK0OXfQrS2AG4p1SCNPql6eDE
Download URL configured in release.json: https://drive.google.com/uc?export=download&id=1o0WEwkvHK0OXfQrS2AG4p1SCNPql6eDE
Make sure Google Drive sharing is set to “Anyone with the link — Viewer”. Test the link in an incognito/private browser before publishing. Google Drive may show a confirmation page for large files, so test on a phone.

IMPORTANT
- This is a DEBUG APK test link, not confirmation that the APK is production-ready or signed for public release.
- The website is static and does not use Supabase. release.json is a plain file hosted by GitHub Pages.
- This website can only point to an APK URL; it does not upload APK files itself.
- Keep the existing file names and folder structure. Upload the CONTENTS of the ZIP to the repository root, not an extra nested folder.

LOGO FIX (v7)
- The header logo now loads from ./logo.png in the repository root instead of assets/hisably-logo.png. This avoids the broken logo if the assets folder was not uploaded correctly.


VERSION 8 (FLAT ROOT FILES)
--------------------------
All image files are in the repository root; no assets folder is needed.
Upload these files directly to the root of the GitHub repository:
index.html, style.css, site.js, release.json, privacy.html, terms.html,
logo.png, favicon.png, og-image.png, robots.txt, sitemap.xml.
Do not upload the ZIP itself as the website. Extract it first, then upload
the individual files. If GitHub mobile does not allow multi-file upload,
replace/add the files one at a time using Add file / Upload files.
