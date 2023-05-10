// In single-spa, the assets need to be loaded from a dynamic location,
// instead of hard coded to `/assets`. We use webpack public path for this.
// See https://webpack.js.org/guides/public-path/#root

export function baseUrl() {
  const href = document.querySelector<HTMLBaseElement>('qiankun-head base')?.getAttribute('href')

  if (!href) {
    return '/'
  }

  if (href !== '/') {
    return href.replace(/\/?$/, '')
  }

  return href
}
