import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Player {
    @PrimaryKey()
    id!: number;

    @Property()
    name!: string;

    @Property()
    balance: number = 0;
    
    addFunds(amount: number) {
        if (amount <= 0) {
            throw new Error('O valor do depósito deve ser maior que zero.');
        }
        this.balance += amount;
    }
}