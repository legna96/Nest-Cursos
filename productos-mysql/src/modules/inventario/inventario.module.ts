import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './services/product/product.service';
import { ProductController } from './controller/product/product.controller';
import { Product } from './entity/product.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Product])],
	providers: [ProductService],
	controllers: [ProductController]

})
export class InventarioModule {}
