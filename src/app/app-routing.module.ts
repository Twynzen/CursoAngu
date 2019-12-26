import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { AcercadeComponent } from "./pages/acercade/acercade.component";
import { ResenaComponent } from "./pages/resena/resena.component";
import { ContactoComponent } from "./pages/contacto/contacto.component";

const routes: Routes = [
  //así se redirige el componente
  { path: "home", component: PortafolioComponent },
  { path: "acercade", component: AcercadeComponent },
  { path: "resena", component: ResenaComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
