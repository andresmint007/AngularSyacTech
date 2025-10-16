
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoDto } from '../api/models/pedido-dto';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos: PedidoDto[] = [];

  private apiService = inject(ApiService);

  ngOnInit(): void {
    this.apiService.apiPedidosGet().subscribe(data => {
      this.pedidos = data;
    });
  }
}
