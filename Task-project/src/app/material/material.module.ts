import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';



const materialModules=[MatButtonModule,MatCardModule,MatToolbarModule];
@NgModule({
  imports: [
    MatButtonModule
  ],exports:[materialModules]
})
export class MaterialModule { }
