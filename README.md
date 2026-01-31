# Resume Mobile App

This folder contains a Capacitor-ready mobile wrapper for the Resume Builder web app.

Quick setup (Windows):

1. Install Node.js and npm if needed.
2. From this folder run:

```bash
cd mobile-app
npm install
# (optional) to serve in browser during development
npm run start
```

3. To initialize Capacitor (one-time):

```bash
npx @capacitor/cli init resume-mobile com.example.resume --web-dir=www
```

4. To add Android or iOS:

```bash
npx cap add android
npx cap add ios
# Then open the native project
npx cap open android
npx cap open ios
```

Notes:
- The app is a static wrapper. All web app features (preview, file uploads, export via print) work in the WebView. For native PDF export or advanced native features, integrate plugins.
- The `www` folder mirrors the web assets; edit those files to change the app UI/behavior.
 
Publish to GitHub Pages (simple):

1. Commit and push the repository to GitHub (push `main` branch).
2. The included GitHub Action will automatically publish `mobile-app/www` to the `gh-pages` branch on push to `main`.
3. After the workflow finishes, your site will be available at `https://<your-username>.github.io/<repo-name>/`.

Install on your phone (Add to Home Screen):
- On Android (Chrome): open the GitHub Pages URL, then tap the browser menu → "Add to Home screen".
- On iOS (Safari): open the URL, tap Share → "Add to Home Screen".

Notes:
- The app includes a simple service worker and `manifest.json` so modern browsers will prompt to install as a PWA.
- If you want me to push a commit, I can create a branch and add the changes; otherwise push your local repo and the workflow will deploy.
