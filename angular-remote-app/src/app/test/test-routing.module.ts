import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'componentTwo', component: ComponentTwoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule { }
