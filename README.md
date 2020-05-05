[![Netlify Status](https://api.netlify.com/api/v1/badges/be9ff8bf-e575-44b6-9db4-1087ff4942f8/deploy-status)](https://app.netlify.com/sites/revealjs/deploys)

# revealjs.com
The official reveal.js website and docs. Contributions are welcome!

## Installation
1. Clone the repo
   ```sh
   $ git clone https://github.com/reveal/revealjs.com.git && cd revealjs.com
   ```

1. Install dependencies
   ```sh
   $ npm install
   ```

1. Start the development server
   ```sh
   $ npm start
   ```

The development server will automatically reload as you make changes.

## Technologies
This site is built using [Eleventy](https://www.11ty.dev/) — a static site generator. It's styled using [tailwindcss](https://tailwindcss.com/) and the docs are written in Markdown.

## Deploy
The site is hosted on Netlify and automatically deploys master when there are new commits.

We automatically generate our production build at deploy-time but it's also possible to do it manually with:
```
npm run production
```