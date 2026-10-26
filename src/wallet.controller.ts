import { Controller, Post, Body } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
    constructor(private readonly walletService: WalletService) {}

    @Post('deposit')
    async deposit(@Body() body: { playerId: number; amount: number }) {
        return this.walletService.deposit(body.playerId, body.amount);
    }
}