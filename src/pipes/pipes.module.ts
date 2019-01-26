import { NgModule } from '@angular/core';

import { SafePipe } from './safe';
import { UnitySuffix } from './unity-suffix';

@NgModule({
  declarations: [
    SafePipe,
    UnitySuffix
  ],
  exports: [
    SafePipe,
    UnitySuffix
  ]
})
export class PipesModule { }
