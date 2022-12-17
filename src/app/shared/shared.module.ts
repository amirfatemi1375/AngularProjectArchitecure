import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { SamplePipe } from './pipes/sample.pipe';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [InputComponent, SamplePipe, DropdownDirective],
  imports: [CommonModule],
  exports: [InputComponent],
})
export class SharedModule {}
