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

![Screenshot](https://github.com/hdehal/made-in-usa/raw/master/public/app_screenshot.png)