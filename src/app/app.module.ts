import { NbThemeModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { SomePageComponent } from './some-page/some-page.component';
@NgModule({
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
  ],
  declarations: [SomePageComponent]
})
export class AppModule {}
