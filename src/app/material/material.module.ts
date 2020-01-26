import { NgModule } from '@angular/core';
import { MatButtonModule,MatInputModule,MatOptionModule,MatSelectModule,MatCardModule } from '@angular/material'
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatCardModule,
  MatStepperModule,
  MatTableModule
]

@NgModule({imports: [MaterialComponents],
  exports:[MaterialComponents]
})

export class MaterialModule { }
