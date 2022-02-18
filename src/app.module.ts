import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { HotelsModule } from './modules/hotels/hotels.module';
import { ReservationsModule } from './modules/reservations/reservations.module';
import { SupportModule } from './modules/support/support.module';
import { AuthModule } from './modules/auth/auth.module';

const User = process.env.MONGO_USER || 'root';
const Password = process.env.MONGO_PASSWORD || 'example';
const DbName = process.env.MONGO_DB_NAME || 'aggregator';
const Host = process.env.MONGO_CONNECT_URL || 'mongodb://localhost:27017/';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(Host, {
      user: User,
      pass: Password,
      dbName: DbName,
    }),
    UsersModule,
    HotelsModule,
    ReservationsModule,
    SupportModule,
    AuthModule,
  ],
})
export class AppModule {}
