import { APP_BASE_HREF } from '@angular/common'
import { NgModule } from '@angular/core'
import type { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'
import { baseUrl } from 'src/micro-lc/base-url'

import { AboutComponent } from './about/about.component'
import { EmptyRouteComponent } from './empty-route/empty-route.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: AboutComponent, path: 'about' },
  { component: EmptyRouteComponent, path: '**' },
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: APP_BASE_HREF, useValue: baseUrl() }],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppRoutingModule { }
