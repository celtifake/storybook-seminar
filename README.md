# Storybook seminar

Storybook seminar as part of [Celtiberian][celtiberian] workshops.
This repository contains a basic [React][react] project using [Vite][vite] as bundler and [Storybook][storybook] configuration.

## Storybook addons
- [Accesibility](https://storybook.js.org/addons/@storybook/addon-a11y/)
- [Designs](https://storybook.js.org/addons/storybook-addon-designs/)
- [Jest](https://storybook.js.org/addons/@storybook/addon-jest/)
- [Storybook test runner](https://storybook.js.org/addons/@storybook/test-runner/)

## Storybook alternatives for React
- [Atellier](https://scup.github.io/atellier/)
- [React Cosmos](https://reactcosmos.org/)
- [Ladle](https://ladle.dev/)

## Dependencies

- [npm] (>=8.5.0)
- [nodejs] (>=v16.14.2)

## How to run this project

This project contains both a React sample application and Storybook. To install all dependencies run:

```bash
npm install
```

To run the sample application development server in (http://localhost:3000) execute following command:

```bash
npm run dev
```

To run Storybook application in (http://localhost:6006) execute following command:

```bash
npm run storybook
```

## How to build this project

This project uses Vite as bundler. To build the React application run:

```bash
npm run build
```

Then, to preview builded React application run:

```bash
npm run preview
```

To build Storybook application run:

```bash
npm run build-storybook
```

## Authors

- Ismael Taboada: [@ismtabo]

[react]: https://en.reactjs.org/
[celtiberian]: https://www.celtiberian.es/
[npm]: https://www.npmjs.com/
[nodejs]: https://nodejs.org/en/
[storybook]: https://storybook.js.org/docs/react/get-started/introduction
[vitejs]: https://vitejs.dev/
[@ismtabo]: https://github.com/ismtabo
