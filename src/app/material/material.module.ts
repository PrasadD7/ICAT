import { NgModule } from '@angular/core';
import { MatButtonModule,MatInputModule,MatOptionModule,MatSelectModule,MatCardModule,MatIconModule,MatTooltipModule } from '@angular/material'
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatTooltipModule,
  MatCardModule,
  MatStepperModule,
  MatTableModule,
  MatIconModule,
  MatProgressSpinnerModule
]

@NgModule({imports: [MaterialComponents],
  exports:[MaterialComponents]
})

export class MaterialModule { }
