import { Component, OnInit } from '@angular/core';
import { AddProductComponent } from './add-product/add-product.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    // private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }
  public AddProduct() {
    // const modalRef = this.modalService.open(AddProductComponent,
    //   {
    //     centered: true, size: 'sm', scrollable: false, backdrop: 'static', keyboard: false,
    //   });
    // const addProductComponent: AddProductComponent = modalRef.componentInstance;
  }

}
