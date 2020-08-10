import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ProductService } from 'src/modules/inventario/services/product/product.service';
import { ProductModel } from 'src/models/product.interface';

@Controller('products')
export class ProductController {

    constructor(private productService: ProductService){}

    @Post()
    addProduct(@Body() productModel: ProductModel) {
        return this.productService.saveProduct(productModel);
    }

    @Get()
    getProducts() {
        return this.productService.getProducts();
    }

    @Get(":id")
    getProduct(@Param('id') id: number) {
        return this.productService.getProduct(id) ;
    }

    @Put(":id")
    updateProduct(@Param('id') id:number, @Body() productModel: ProductModel ) {
        return this.updateProduct(id,productModel)
    }

    @Delete(":id")
    deleteProduct( @Param("id") id: number) {
        return this.productService.deleteProduct(id);
    }

}
