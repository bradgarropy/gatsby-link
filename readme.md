# 🔗 gatsby link

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![github actions][github-actions-badge]][github-actions]
[![coverage][codecov-badge]][codecov]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]
[![discord][discord-badge]][discord]

_🔗 link component for [gatsby][gatsby]_

[Gatsby][gatsby] provides a [`<Link>`][link] component for routing between internal pages. For external links, you have to use a regular `<a>` tag. This `gatsby-link` package solves that issue by providing a `<Link>` component that handles both internal and external urls.

## 📦 Installation

This package is hosted on [npm][npm].

```bash
npm install @bradgarropy/gatsby-link
```

## 🥑 Usage

For both internal and external links, use the `Link` component and pass it a `to` prop.

```jsx
import Link from "@bradgarropy/gatsby-link"

const App = () => {
    return <Link to="https://bradgarropy.com">website</Link>
}
```

## 📖 API Reference

### `<Link>`

| Name | Required | Default | Example                                    | Description               |
| :--- | :------: | :-----: | :----------------------------------------- | :------------------------ |
| `to` |  `true`  |         | `"/home"` <br> `"https://bradgarropy.com"` | Internal or external url. |

The component also passes through all other `props`, like `className` or `activeStyle`. See the Gatsby [`Link`][link] documentation for other relevant props. The examples below cover some common uses.

```jsx
// internal link
<Link to="/home">home</Link>

// internal link with additional props
<Link to="/home" className="nav-link">home</Link>

// external link
<Link to="https://bradgarropy.com">website</Link>

// external link with additional props
<Link to="https://bradgarropy.com" className="nav-link">website</Link>
```

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

## ✨ contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/gatsby-link/commits?author=bradgarropy" title="Code">💻</a> <a href="https://github.com/bradgarropy/gatsby-link/commits?author=bradgarropy" title="Documentation">📖</a> <a href="https://github.com/bradgarropy/gatsby-link/commits?author=bradgarropy" title="Tests">⚠️</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[codecov]: https://app.codecov.io/gh/bradgarropy/gatsby-link
[contributing]: https://github.com/bradgarropy/gatsby-link/blob/master/contributing.md
[contributors]: #-contributors
[codecov-badge]: https://img.shields.io/codecov/c/github/bradgarropy/gatsby-link?style=flat-square
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors-badge]: https://img.shields.io/github/all-contributors/bradgarropy/gatsby-link?style=flat-square
[gatsby]: https://www.gatsbyjs.com
[npm]: https://www.npmjs.com/package/@bradgarropy/gatsby-link
[issues]: https://github.com/bradgarropy/gatsby-link/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://bradgarropy.com/ama
[version-badge]: https://img.shields.io/npm/v/@bradgarropy/gatsby-link.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@bradgarropy/gatsby-link?style=flat-square
[bundlephobia]: https://bundlephobia.com/result?p=@bradgarropy/gatsby-link
[size-badge]: https://img.shields.io/bundlephobia/minzip/@bradgarropy/gatsby-link?style=flat-square
[github-actions]: https://github.com/bradgarropy/gatsby-link/actions
[github-actions-badge]: https://img.shields.io/github/workflow/status/bradgarropy/gatsby-link/%F0%9F%9A%80%20release?style=flat-square
[typescript]: https://www.typescriptlang.org/dt/search?search=%40bradgarropy%2Fgatsby-link
[typescript-badge]: https://img.shields.io/npm/types/@bradgarropy/gatsby-link?style=flat-square
[discord]: https://bradgarropy.com/discord
[discord-badge]: https://img.shields.io/discord/748196643140010015?style=flat-square
[link]: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link
