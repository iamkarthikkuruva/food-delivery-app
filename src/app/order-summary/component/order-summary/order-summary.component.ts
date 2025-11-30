import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderSummaryService } from '../../service/order-summary.service';
import { OrderDTO } from '../../models/OrderDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {

  orderSummary?: OrderDTO;
  obj: any;
  total?: any;
  showDialog: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderSummaryService) { }

  ngOnInit() {
    const data = this.route.snapshot.queryParams['data'];
    this.obj = JSON.parse(data);
    this.obj.userId = 1;
    this.orderSummary = this.obj;
    this.total = this.orderSummary?.foodItemsList.reduce((accumulator, currentValue) => {
      // return accumulator + (currentValue.quantity * currentValue.price); //TODO: need to check
      return accumulator + ((currentValue.quantity ?? 0) * (currentValue.price ?? 0));
    }, 0);
  }

  saveOrder() {
    this.orderService.saveOrer(this.orderSummary).subscribe(
      response => {
        this.showDialog = true;
      },
      error => {
        console.error('Failed to save data:', error);
      }
    );
  }

  closeDialog() {
    this.showDialog = false;
    this.router.navigate(['/']); // Replace '/home' with the actual route for your home page
  }
}
