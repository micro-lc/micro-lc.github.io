import { Component } from '@angular/core'

import { AssetUrlPipe } from '../assetUrl.pipe'

@Component({
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent extends AssetUrlPipe {}
