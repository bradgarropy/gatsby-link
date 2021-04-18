# 🔗 gatsby link

[![coverage][codecov-badge]][codecov]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]

_🔗 link component for [gatsby][gatsby]_

## 📦 Installation

This package is hosted on [npm][npm].

```bash
npm install @bradgarropy/gatsby-link
```

## 🥑 Usage

// TODO: Add a description here.

```javascript
import Link from "@bradgarropy/gatsby-link"

const App = () => {
    return (
      <Link to="/">home</Link>
      <Link to="https://bradgarropy.com">site</Link>
    )
}
```

## 📖 API Reference

### `<Link>`

| Name | Required | Default |           Example           | Description     |
| :--- | :------: | :-----: | :-------------------------: | :-------------- |
| `to` |  `true`  |         | `"https://bradgarropy.com"` | URL to link to. |

Starts a countdown timer based on the number of minutes and seconds provided. The returned `countdown` object updates once per second and stops when the timer hits zero.

TODO

```javascript
// internal link
<Link to="/">home</Link>

// internal link with additional props
<Link to="/" className="nav-link">home</Link>

// external link
<Link to="https://bradgarropy.com">site</Link>

// external link with additional props
<Link to="https://bradgarropy.com" className="nav-link">site</Link>
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
[npm]: https://www.npmjs.com
[issues]: https://github.com/bradgarropy/gatsby-link/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://bradgarropy.com/ama
