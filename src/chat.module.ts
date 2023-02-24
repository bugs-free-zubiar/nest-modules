import { Module } from '@nestjs/common';
import { F1Module } from './f1.module';
import { F2Module } from './f2.module';


@Module({
  imports: [F1Module, F2Module],
  controllers: [],
  providers: [],
})
export class ChatModule {

  constructor()
  {
    console.log("Chat Modules");
  }

}
