<h1 align="center">
  Documentation 📖  
</h1>

<p align="center">
    <a href="https://mia-platform.eu/?utm_source=referral&utm_medium=github&utm_campaign=micro-lc"><img src="https://img.shields.io/badge/Supported%20by-Mia--Platform-green?style=for-the-badge&link=https://mia-platform.eu/&color=DE0D92&labelColor=214147" alt="Mia-Platform" /></a>
</p>

Documentation site for [micro-lc](https://github.com/micro-lc/micro-lc) and relative add-ons powered by
[Docusaurus](https://github.com/facebook/docusaurus).

## Install and start dev mode

```shell
yarn install
(cd applications/angular12 && yarn install)
```

then build the subpackages and copy their static files into docusaurus `static` folder by running

```shell
(cd applications/angular12 && yarn build)
yarn prepare
```

then run

```shell
yarn start
```
