import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AboutComponent } from './about/about.component'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AssetUrlPipe } from './assetUrl.pipe'
import { HomeComponent } from './home/home.component'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AssetUrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppModule { }
