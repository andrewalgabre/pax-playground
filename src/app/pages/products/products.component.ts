import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  // react to changes of the route parameters
  routeChangeEffects = effect(() => {
    console.log(
      'routeChangeEffects',
      'productId',
      this.productId(),
      'filter',
      this.filter()
    );
  });

  // Define the `productId` route parameter as a signal input
  productId = input<string>();

  // Define the `filter` query parameter as a signal input
  filter = input<string>();
}
