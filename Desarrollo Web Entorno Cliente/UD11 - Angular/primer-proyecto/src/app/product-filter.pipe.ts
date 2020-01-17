import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './interfaces/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], filterBy: string): any {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filter ? products.filter(prod => prod.desc.toLocaleLowerCase().includes(filter)) :products;
  }

}
