Demonstrates how importing a module in `_app.js` does not automatically move it into the commons.js bundle. `_app.js` seems to be treated like any other page with respect to code splitting — that is if under half of pages use a module, it is individually included in each page's bundle.

This doesn't make sense, since `_app.js` is run for **every** page.

To repro,

1. Clone this repo
2. `yarn build` will open Webpack Bundle Analyzer pages in your browser

On the client bundle analysis, observe how the `@sentry` module is in both the `_app.js` bundle and the `index.js` bundle.

![Screenshot of the client bundle analysis](https://user-images.githubusercontent.com/709153/64366907-0d9a3a00-cfcc-11e9-8bc6-4ad5a2db4af0.png)