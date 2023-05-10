import { Component } from '@angular/core'

import { assetUrl } from '../../micro-lc/asset-url'
import type { AssetUrlPipe } from '../assetUrl.pipe'

@Component({
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements AssetUrlPipe {
  transform(value: string) {
    return assetUrl(value)
  }
}
