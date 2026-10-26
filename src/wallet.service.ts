import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { Player } from './player.entity';

@Injectable()
export class WalletService {
    constructor(
        @InjectRepository(Player)
    private readonly playerRepo: EntityRepository<Player>,
    ) {}

    async deposit(playerId: number, amount: number): Promise<Player> {
        let player = await this.playerRepo.findOne({ id: playerId });
    
        if (!player) {
            player = this.playerRepo.create({ id: playerId, name: 'Jogador Teste', balance: 0 });
            this.playerRepo.persist(player);
        }
        
        player.addFunds(amount);
        
        await this.playerRepo.flush();
    
        return player;
    }
}