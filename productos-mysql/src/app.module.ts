import { Module } from '@nestjs/common';
import { InventarioModule } from './modules/inventario/inventario.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    InventarioModule
  ]
})
export class AppModule {}
