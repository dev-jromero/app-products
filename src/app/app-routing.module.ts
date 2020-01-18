import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { ListProductoComponent } from './producto/list-producto/list-producto.component';
import { ListEmpleadoComponent } from './empleado/list-empleado/list-empleado.component';


const routes: Routes = [
  { path: '', component: ProductoComponent },
  { path: 'list-producto', component: ListProductoComponent },
  { path: 'list-empleado', component: ListEmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
