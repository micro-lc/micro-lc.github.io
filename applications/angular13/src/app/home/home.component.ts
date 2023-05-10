import { Component } from "@angular/core";

import { assetUrl } from "../../micro-lc/asset-url";
import type { AssetUrlPipe } from "../assetUrl.pipe";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AssetUrlPipe {
  transform(value: string) {
    return assetUrl(value);
  }
}
