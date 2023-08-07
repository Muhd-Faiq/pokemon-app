import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BaseDataService } from "@services/core/base-data.service";
@Injectable({
  providedIn: "root",
})
export class PokemonMappingService extends BaseDataService {
  constructor(protected http: HttpClient) {
    super();
  }

//   addOrUpdateCompanyMapping(body): Observable<unknown> {
//     return this.http.post<unknown>(this.url + "/AddOrUpdateCompanyMapping", body);
//   }

  getAbility(params:any): Observable<any> {
    if(params != null){
        return this.http.get(this.url + `/ability/${params}`);
    }
    return this.http.get(this.url + `/ability?offset=0&limit=358`);
  }

}
