![Screenshot](https://github.com/hdehal/made-in-usa/raw/master/public/app_screenshot3.png)

## Get Started:
1. Clone the repo:
```
git clone https://github.com/hdehal/made-in-usa.git
```
2. Setup your "Stitch App" on MongoDB Stitch, create the database, etc.:
https://docs.mongodb.com/stitch/procedures/create-stitch-app/

3. Create an API key: (your app) > Users > Providers > API Key (On) && Users > Add
https://stitch.mongodb.com

4. Create a ".env" file in your root (made-in-usa) folder with:
```
REACT_APP_STITCH_API_KEY=<YOUR-API-KEY-HERE>
```

## File Structure:

```
src/
├── App.js
├── index.css
├── index.js
└── components/
    ├── about.js
    ├── add.js
    ├── addForm.js
    ├── displayAlerts.js
    ├── displayTable.js
    ├── error.js
    ├── home.js
    ├── navigation.js
    ├── stitchAuth.js
    └── tableColumns.js
```

## How to Deploy on GitHub Pages using Yarn and gh-pages:
Assuming you have an existing working GitHub repository, and your local code is checked-in.

1. Run `yarn add -D gh-pages` to install gh-pages as a dev dependency

2. Create CNAME file in the public/ folder)
```
Your CNAME file should look like this:
mywebsite.com
```
3. Edit your `package.json` and add the following:
If it's a GitHub repo:
```
"homepage": "https://<your_github_username>.github.io/st",
```
OR if it's a custom TLD/domain:
```
  "homepage": "https://yourwebsite.com",
```
AND add your build and deploy scripts -- this will deploy your `build` folder to a new branch it will automatically create for you called `gh-pages`:
```
"scripts": {
    "deploy": "yarn run build && gh-pages -d build",
}
```
4. Add basename to your your routing:
<BrowserRouter basename="/st">

5. Commit your changes to your normal repo

6. Create your username.github.io repo at https://pages.github.com

7. Configuring a custom domain for your GitHub Pages site:
https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site

8. Run `yarn deploy` -- it will prompt you for your Github username/password and automatically create and push your build files to a new branch `gh-pages` on your remote origin.

9. You should shortly see your changes on either https://yourwebsite.com or https://your_github_username.github.io