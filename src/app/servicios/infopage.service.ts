import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { InfoWeb } from "../interfaces/info-web";

@Injectable({
  providedIn: "root"
})
export class InfopageService {
  info: InfoWeb = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    //leer el archovo json
    this.http.get("assets/data/data-pagina.json").subscribe(resp => {
      this.cargada = true;
      this.info = resp;
    });
  }
  //Extraemos de una base de datos externa la info de la web en un json
  private cargarEquipo() {
    this.http
      .get("https://cursoangu.firebaseio.com/equipo.json")
      .subscribe((resp: any[]) => {
        this.equipo = resp;

        console.log(resp);
      });
  }
}
