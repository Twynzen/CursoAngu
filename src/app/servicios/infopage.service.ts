import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { InfoWeb } from "../interfaces/info-web";

@Injectable({
  providedIn: "root"
})
export class InfopageService {
  info: InfoWeb = {};
  cargada = false;

  constructor(private http: HttpClient) {
    console.log("Servicio de infoPagina listo");

    //leer el archovo json
    this.http.get("assets/data/data-pagina.json").subscribe(resp => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });
  }
}
