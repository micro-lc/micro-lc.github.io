import type { PipeTransform } from '@angular/core'
import { Pipe } from '@angular/core'

import { assetUrl } from '../micro-lc/asset-url'

@Pipe({ name: 'assetUrl' })
export class AssetUrlPipe implements PipeTransform {
  transform(value: string): string {
    return assetUrl(value)
  }
}
