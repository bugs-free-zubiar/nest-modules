import { Module } from '@nestjs/common';
import { F3Module } from './f3.module';


@Module({
  imports: [F3Module],
  controllers: [],
  providers: [],
})
export class OrdersModule {

  constructor()
  {
    console.log("Order Modules");
  }

}