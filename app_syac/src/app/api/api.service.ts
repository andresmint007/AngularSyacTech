
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiPedidosGet } from './functions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PedidoDto } from './models/pedido-dto';
import { ApiConfiguration } from './api-configuration';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private rootUrl = inject(ApiConfiguration).rootUrl;

  apiPedidosGet(): Observable<PedidoDto[]> {
    return apiPedidosGet(this.http, this.rootUrl).pipe(
      map(response => response.body)
    );
  }
}
