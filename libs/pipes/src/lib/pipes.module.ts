import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorKeysPipe } from './error-keys.pipe';


@NgModule({
  imports: [CommonModule],
  declarations: [ErrorKeysPipe],
  exports: [ErrorKeysPipe]
})
export class PipesModule {}
