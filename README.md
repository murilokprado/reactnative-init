# Initial Api, frontend and Mobile

This project made backend, frontend and mobile using **NodeJS**, **React** and **React Native** stack.

## Backend :scroll:

To build backend it was used [express router](https://expressjs.com/pt-br/guide/routing.html) to management routes of application. To validate requests, it was used [Joi validation](https://github.com/arb/celebrate) of celebrate. To persist and get data it was used [knexjs](http://knexjs.org/) with **SQLite**.

To did unit test and integration test it was used [jest](https://jestjs.io/)

For further information about technologies used, click on links :wink:

### Features

- Sample Hello world :heavy_check_mark:

### Running

First enter on backend project

`cd backend`

After, run:

`npm install`

On first time running the application we need run a npx command to apply migrations

`npx knex migrate:latest`

Then we can startup the application

`npm start`

The application will be run on http://localhost:3333.

#### Tests

To execute our test we need to run

`npm test`

## Frontend :computer:

To build frontend it was used [axios](https://github.com/axios/axios) to http requests and to management routers it was used react-router-dom

### Features

- Simple page with Hello world :heavy_check_mark:

### Running

First for frontend works, We'll need backend running on `http://localhost:3333` because axios will try to call this path.

Run

`npm install`

After that

`npm start`

## Mobile :iphone:

As in frontend, mobile application builded using [axios](https://github.com/axios/axios).

### Features

- Simple page with Hello world :heavy_check_mark:

### Running

As in frontend, here We'll need a backend running, but you'll need vonfig your backend IP on file [api.js](/mobile/src/services/api.js).
This case my backend it was running on **_http://192.168.0.4:3333_** , you may to replace baseURL with your IP.

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.4:3333",
});

export default api;
```

After that, you run

`npm install`

Finish we can start the mobile application with command

`expo start`

### Running on device

You should be download the expo app on your device.

- [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR)
- [App Store](https://apps.apple.com/br/app/expo-client/id982107779)

On page generated by expo command previously, there is a **QRCode**, you can use your device to scan that code and that's all folks.

Made with ♥ by Murilo Prado.
