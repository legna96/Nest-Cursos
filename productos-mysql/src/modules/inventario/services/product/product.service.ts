import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/modules/inventario/entity/product.entity';
import { ProductModel } from 'src/models/product.interface';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}

    async saveProduct(product: ProductModel) {
        await this.productRepository.insert(product);
        return product;
    }

    async updateProduct(id:number, product:ProductModel){
        this.productRepository.update(id, product);
    }

    async getProducts(){
        return await this.productRepository.find();
    }

    async getProduct(id:number){
        return await this.productRepository.findOne(id);
    }

    async deleteProduct(id:number){
        return await this.productRepository.delete(id);
    }

}
