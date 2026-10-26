import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Player } from './player.entity';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      type: 'postgresql',
      host: 'localhost',
      port: 5432,
      user: 'user',
      password: 'password',
      dbName: 'wallet',
      entities: [Player],
      debug: true,
    }),
    MikroOrmModule.forFeature([Player]),
  ],
  controllers: [WalletController],
  providers: [WalletService],
})
export class AppModule {}