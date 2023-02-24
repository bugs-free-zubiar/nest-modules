import { Module } from '@nestjs/common';
import { ChatModule } from './chat.module';
import { OrdersModule } from './orders.module';
import { UserModule } from './user.module';


@Module({
  imports: [UserModule, ChatModule , OrdersModule],
  controllers: [],
  providers: [],
})
export class RootModule {

  constructor()
  {
    console.log("Root Modules");
  }

}
