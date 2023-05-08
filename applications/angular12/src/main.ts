import { enableProdMode, NgZone } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { Router, NavigationStart } from '@angular/router'
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'
import { singleSpaPropsSubject } from './micro-lc/single-spa-props'

import './public-path'

if (environment.production) {
  enableProdMode()
} else {
  document.write(
    `
      <script type="text/javascript" src="https://unpkg.com/zone.js"></script>
    `
  )
}

if (!window.__POWERED_BY_QIANKUN__) {
  platformBrowserDynamic().bootstrapModule(AppModule).catch(console.error)
}

const { bootstrap, mount, unmount } = singleSpaAngular({
  NavigationStart,
  NgZone,
  Router,
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps)
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule)
  },
  template: '<app-root />',
})

export { bootstrap, mount, unmount }
