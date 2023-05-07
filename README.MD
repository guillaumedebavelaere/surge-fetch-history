<a name="readme-top"></a>
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Surge fetch history</h3>

  <p align="center">
    A simple script that fetches surge SGR20 token historical data
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#quickstart">Quickstart</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#considerations">Considerations</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a simple script written in typescript that uses graphql to fetch surge SGR20 token 
historical data.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

-   [![TypeScript][Typescript]][Typescript-url]
-   [![GraphQL][GraphQL]][GraphQL-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

-   [Nodejs](https://nodejs.org/en/)
  - [ts-node](https://typestrong.org/ts-node/docs/)
-   [Yarn](https://yarnpkg.com/getting-started/install) 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Quickstart

```
git clone https://github.com/guillaumedebavelaere/surge-fetch-history
cd surge-fetch-history
yarn install
yarn generate
yarn build 
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Fetch historical data of a surge SGR20 token on ETH
```
yarn dev 0x14385f19f3fba81a4f8186e2d1e146aae3150df4 ETH
```

Fetch historical data of a surge SGR20 token on BSC
```
yarn dev 0x02571d40620eba8d5867e1728174c305e88e6b76 BSC
```

Fetch historical data of a surge SGR20 token on ARBITRUM
```
yarn dev 0x0ea76657bc103f95a49540827c1255e4928da78b ARBITRUM
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Considerations

Currently, it displays the data into the console.
Consider adding a step to transform the data and a step to store the data.

Then:
- We could limit the data returned by adding a date filter to fetch only the previous day,  
if we run this script as a cronjob everyday.
- To get the data hourly we could in a same way, filtering the results with a date > current date,  
beginning of the day and run a cronjob every hour, and do the difference between the data we got and the previous one.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/gdebavelaere
[product-screenshot]: images/screenshot.png
[GraphQL]: https://img.shields.io/badge/-GraphQL-black.svg?style=for-the-badge&logo=GraphQL&colorB=555
[GraphQL-url]: https://graphql.org/
[Typescript]: https://img.shields.io/badge/-Typescript-black.svg?style=for-the-badge&logo=typescript&colorB=35495E
[Typescript-url]: https://www.typescriptlang.org/
