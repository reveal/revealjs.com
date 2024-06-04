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
   $ yarn
   ```

1. Start the development server

   ```sh
   $ yarn start
   ```

The development server will automatically reload as you make changes.

## Spell Check

There's a built-in task for spell checking.

```sh
$ yarn test
```

## Formatting

We use [Prettier](https://prettier.io/) to ensure consistent code formatting. The rules are as follows:

- Single quotes for strings.
- 2-space indentation.

Make sure your code adheres to these rules before committing. You can format your code manually with:

```sh
$ yarn prettier --write .
```

### GitHub Actions Check

Our repository includes a GitHub Actions workflow that automatically checks code formatting on each push and pull request. This ensures all code merged into the repository follows the defined formatting rules.

## Translation

We welcome contributions to help translate the site into different languages. If you would like to help with translations, please follow our [Translation Guide](translation-guide.md). This guide provides detailed instructions on how to contribute translations.

## Technologies

This site is built using [Eleventy](https://www.11ty.dev/) — a powerful but easy to use static site generator. It's styled with [tailwindcss](https://tailwindcss.com/) and the docs are written in Markdown.

## Deploy

The site is hosted on Netlify and automatically deploys the `master` branch when there are new commits.

We automatically generate our production build at deploy-time but it's also possible to do it manually with:

```sh
yarn run production
```

### Note

reveal.js is installed from the [master branch](https://github.com/hakimel/reveal.js/). If it gets stuck on an old version, remove the reveal.js entry from `package.lock.json` and rerun `yarn`.

---

This updated `README.md` now includes a section about helping with translations, directing users to follow the `translation-guide.md` for detailed instructions.
