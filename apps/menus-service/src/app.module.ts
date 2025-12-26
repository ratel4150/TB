import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenusModule } from './menus/menus.module';


@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/nest_ms'),
    MenusModule,
  ],
})
export class AppModule {}
