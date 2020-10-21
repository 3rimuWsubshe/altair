[![Build](https://travis-ci.org/imolorhe/altair.svg?branch=master "Travis CI")](https://travis-ci.org/imolorhe/altair)
[![All Contributors](https://img.shields.io/badge/all_contributors-13-orange.svg?style=flat-square)](#contributors)
[![Build status](https://ci.appveyor.com/api/projects/status/qp69kxnlxntsumdj/branch/staging?svg=true)](https://ci.appveyor.com/project/imolorhe/altair/branch/staging)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fimolorhe%2Faltair.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fimolorhe%2Faltair?ref=badge_shield)
[![Crowdin](https://d322cqt584bo4o.cloudfront.net/altair-gql/localized.svg)](https://crowdin.com/project/altair-gql)
[![Gitter](https://img.shields.io/gitter/room/altair-graphql/Lobby.svg)](https://gitter.im/altair-graphql/Lobby)

[![Chrome Web Store](https://img.shields.io/chrome-web-store/d/flnheeellpciglgpaodhkhmapeljopja.svg)](https://chrome.google.com/webstore/detail/altair-graphql-client/flnheeellpciglgpaodhkhmapeljopja)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/flnheeellpciglgpaodhkhmapeljopja.svg)](https://chrome.google.com/webstore/detail/altair-graphql-client/flnheeellpciglgpaodhkhmapeljopja)
[![Mozilla Add-on](https://img.shields.io/amo/v/altair-graphql-client.svg)](https://addons.mozilla.org/en-US/firefox/addon/altair-graphql-client/)
[![npm](https://img.shields.io/npm/v/altair-express-middleware.svg)](https://www.npmjs.com/package/altair-express-middleware)
[![Altair GraphQL Client](https://snapcraft.io/altair/badge.svg)](https://snapcraft.io/altair)
[![GitHub release](https://img.shields.io/github/release/imolorhe/altair.svg)](https://github.com/imolorhe/altair/releases)
[![Github All Releases](https://img.shields.io/github/downloads/imolorhe/altair/total.svg)](https://github.com/imolorhe/altair/releases)

[![Backers on Open Collective](https://opencollective.com/altair/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/altair/sponsors/badge.svg)](#sponsors)

![Maintenance](https://img.shields.io/maintenance/yes/2020.svg)
[![Greenkeeper badge](https://badges.greenkeeper.io/imolorhe/altair.svg)](https://greenkeeper.io/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

[Deploying?](.github/DEPLOY.md)

<div align="center" style="text-align: center;">

<img src="packages/altair-app/src/assets/img/altair_logo_128.png" alt="Altair GraphQL Client">

<h1><a href="https://altair.sirmuel.design/" target="_blank">Altair GraphQL Client</a></h1>

</div>

![set url](packages/altair-app/src/assets/img/readme/app-shot.png "Altair GraphQL Client")

**Altair** is a beautiful feature-rich GraphQL Client IDE for all platforms. Available for [MacOS, Windows, Linux](https://altair.sirmuel.design/), [Chrome](https://chrome.google.com/webstore/detail/altair-graphql-client/flnheeellpciglgpaodhkhmapeljopja), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/altair-graphql-client/).
It enables you interact with any GraphQL server you are authorized to access from any platform you are on.

Much like Postman for GraphQL, you can easily test and optimize your GraphQL implementations.

## Features

Altair provides several features that make developing with GraphQL very efficient and friendly. These features include:

- setting **headers**
- setting **variables**
- creating [**environments**](https://sirmuel.design/altair-becomes-environment-friendly-%EF%B8%8F-f9b4e9ef887c)
- viewing **response stats**
- viewing **schema docs**
- advanced **schema docs search**
- dynamically **adding/generating** queries and/or fragments from schema docs
- [**file upload**](https://sirmuel.design/working-with-file-uploads-using-altair-graphql-d2f86dc8261f) via GraphQL
- **autocompletion** of queries
- **autofill** all query fields at cursor
- [**automatic schema refreshing**](https://sirmuel.design/a-better-graphql-developer-experience-with-x-graphql-event-stream-1256aef96f24) using *GraphQL Event Stream* protocol
- **automatic refactoring** of query
- [**prerequest**](https://sirmuel.design/pre-requests-now-available-in-altair-graphql-client-c3b28892059c) scripts
- multiple **windows**, multiple **languages**
- **importing and exporting** collections of queries
- multiple **themes**
- [**plugin system**](https://sirmuel.design/introducing-plugins-in-altair-still-in-beta-b7adb42b466) for extensibility
- and many more features (really there's a **lot more!**).

*See more here: https://altair.sirmuel.design/docs/features*

### Missing feature?

Is there a feature that is missing? You can let us know by creating a [new issue](https://github.com/imolorhe/altair/issues/new) or you can add the feature by creating a [Pull Request](https://github.com/imolorhe/altair/blob/staging/.github/CONTRIBUTING.md).

## Usage


For mac users, you can also install using cask:

```
$ brew cask install altair-graphql-client
```

For linux users, you can also install using [snap](https://snapcraft.io/altair):

```
$ snap install altair
```

For arch linux users, an AUR package [aur/altair](https://aur.archlinux.org/packages/altair/) exists:

```
$ yay -S altair
```

For windows users, you can install using [appget](https://appget.net/packages/i/altair-graphql):

```
$ appget install altair-graphql
```

or [chocolatey](https://chocolatey.org/packages/altair-graphql):

```
$ choco install altair-graphql
```

### Usage with express
You can use altair with an express server using [altair-express-middleware](https://www.npmjs.com/package/altair-express-middleware). Read more about how to use this [here](packages/altair-express-middleware/README.md).

### Usage with koa
You can use altair with a koa server using [altair-koa-middleware](https://www.npmjs.com/package/altair-koa-middleware). Read more about how to use this [here](https://altair.sirmuel.design/docs/integrations/altair-koa-middleware).

### Usage with Fastify

You can use altair with a Fastify server using [altair-fastify-plugin](https://www.npmjs.com/package/altair-fastify-plugin). Read more about how to use this [here](packages/altair-fastify-plugin/README.md).

### Usage with Laravel (PHP)
You can use altair in a Laravel project using [xkojimedia/laravel-altair-graphql](https://packagist.org/packages/xkojimedia/laravel-altair-graphql):

```console
$ composer require xkojimedia/laravel-altair-graphql
```

*You can find other available integrations here: https://altair.sirmuel.design/docs/integrations*

### Configuration Options
When using a custom instance of Altair, there are [couple of options](https://github.com/imolorhe/altair/blob/staging/packages/altair-app/src/app/config.ts#L7) you can use to customize Altair based on your needs:

- `endpointURL` `string` - URL to set as the server endpoint
- `subscriptionsEndpoint` `string` - URL to set as the subscription endpoint
- `initialQuery` `string` - Initial query to be added
- `initialVariables` `string` - Initial variables to be added (in JSON format) e.g. `'{ "var1": "first variable" }'`
- `initialPreRequestScript` `string` - Initial pre-request script to be added e.g. `'altair.helpers.getEnvironment("api_key")'`
- `initialHeaders` `IDictionary` - Initial headers object to be added
```js
{
  'X-GraphQL-Token': 'asd7-237s-2bdk-nsdk4'
}
```
- `initialEnvironments` `IInitialEnvironments` - Initial Environments to be added
```js
{
  base: {
    title: 'Environment',
    variables: {}
  },
  subEnvironments: [
    {
      title: 'sub-1',
      variables: {}
    }
  ]
}
```
- `instanceStorageNamespace` `string` - Namespace for storing the data for the altair instance. Use this when you have multiple altair instances running on the same domain. e.g. `'altair_dev_'`

Example usage:
```js
AltairGraphQL.init({
  endpointURL: 'https://www.example.com/graphql',
  initialVariables: '{ "username": "imolorhe" }',
});
```

## Supported Browsers

Altair has been tested in the latest versions of Google Chrome and Mozilla Firefox. It might not work as expected in other browsers like Safari and Edge.

## Community 🙏🏾

You can learn more about how to get help [here](.github/community.md).

## Contributing

Would you like to help with translations? https://altair-gql-translate.surge.sh/ [Click here](https://crwd.in/altair-gql).

<div align="center" style="text-align: center;">
  
[![Donate to Altair](https://opencollective.com/altair/donate/button.png?color=blue)](https://opencollective.com/altair/donate)

</div>

Learn more about contributing to Altair [here](.github/CONTRIBUTING.md) and [here](https://altair.sirmuel.design/docs/contributing.html).

## Development

Navigate to the `packages/altair-app` directory, run `yarn` to install dependencies.
Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Generate chrome extension files

Run `yarn build-ext` to build the chrome extension files. The extension files will be stored in the `chrome-extension/` directory.

### Generate electron app

Run `yarn build-electron` to build the electron apps. The apps will be stored in the `electron-builds/` directory.

### Updating docs

Run `bundle exec jekyll serve`.

### Running tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io) and the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](.github/CONTRIBUTING.md)].
<a href="graphs/contributors"><img src="https://opencollective.com/altair/contributors.svg?width=890" /></a>

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/altair#backer)]

<a href="https://opencollective.com/altair#backers" target="_blank"><img src="https://opencollective.com/altair/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/altair#sponsor)]

<a href="https://opencollective.com/altair#sponsors" target="_blank"><img src="https://opencollective.com/altair/sponsors.svg?width=1000"></a>



## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fimolorhe%2Faltair.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fimolorhe%2Faltair?ref=badge_large)

## More Contributors ❤️

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/DaniloCaruso"><img src="https://avatars1.githubusercontent.com/u/4080177?v=4" width="100px;" alt=""/><br /><sub><b>Danilo Caruso</b></sub></a><br /><a href="#translation-DaniloCaruso" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/IgorSzymanski"><img src="https://avatars0.githubusercontent.com/u/12682069?v=4" width="100px;" alt=""/><br /><sub><b>Igor Szymanski</b></sub></a><br /><a href="#translation-IgorSzymanski" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/kporten"><img src="https://avatars2.githubusercontent.com/u/1839345?v=4" width="100px;" alt=""/><br /><sub><b>Kevin Porten</b></sub></a><br /><a href="#translation-kporten" title="Translation">🌍</a></td>
    <td align="center"><a href="https://0xabcdef.com/"><img src="https://avatars0.githubusercontent.com/u/690661?v=4" width="100px;" alt=""/><br /><sub><b>JongChan Choi</b></sub></a><br /><a href="#translation-disjukr" title="Translation">🌍</a></td>
    <td align="center"><a href="https://twitter.com/alexey_rodionov"><img src="https://avatars1.githubusercontent.com/u/7892779?v=4" width="100px;" alt=""/><br /><sub><b>Alexey Rodionov</b></sub></a><br /><a href="https://github.com/imolorhe/altair/commits?author=FluorescentHallucinogen" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/kurisutofu"><img src="https://avatars0.githubusercontent.com/u/742894?v=4" width="100px;" alt=""/><br /><sub><b>kurisutofu</b></sub></a><br /><a href="#translation-kurisutofu" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/Claercio"><img src="https://avatars1.githubusercontent.com/u/5834593?v=4" width="100px;" alt=""/><br /><sub><b>Claércio Santos</b></sub></a><br /><a href="#translation-Claercio" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://janjaromirhorak.cz/"><img src="https://avatars3.githubusercontent.com/u/16863691?v=4" width="100px;" alt=""/><br /><sub><b>jenda</b></sub></a><br /><a href="#translation-janjaromirhorak" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/pcharbon70"><img src="https://avatars2.githubusercontent.com/u/20699793?v=4" width="100px;" alt=""/><br /><sub><b>pcharbon70</b></sub></a><br /><a href="#translation-pcharbon70" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/juca-cruz"><img src="https://avatars1.githubusercontent.com/u/5823011?v=4" width="100px;" alt=""/><br /><sub><b>Juan Cruz</b></sub></a><br /><a href="#translation-juca-cruz" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/victormihaita"><img src="https://avatars0.githubusercontent.com/u/43206741?v=4" width="100px;" alt=""/><br /><sub><b>Victor Mihaita</b></sub></a><br /><a href="#translation-victormihaita" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/qonn"><img src="https://avatars1.githubusercontent.com/u/43688724?v=4" width="100px;" alt=""/><br /><sub><b>Furqan Anas</b></sub></a><br /><a href="https://github.com/imolorhe/altair/commits?author=qonn" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/vladshcherbin"><img src="https://avatars1.githubusercontent.com/u/6711845?v=4" width="100px;" alt=""/><br /><sub><b>Vlad Shcherbin</b></sub></a><br /><a href="https://github.com/imolorhe/altair/issues?q=author%3Avladshcherbin" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/dies"><img src="https://avatars1.githubusercontent.com/u/80762?v=4" width="100px;" alt=""/><br /><sub><b>Serhiy Dmytryshyn</b></sub></a><br /><a href="#translation-dies" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/adieuadieu"><img src="https://avatars1.githubusercontent.com/u/438848?v=4" width="100px;" alt=""/><br /><sub><b>Marco Lüthy</b></sub></a><br /><a href="#financial-adieuadieu" title="Financial">💵</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
