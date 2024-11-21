import { Global, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Global()
@Injectable()
export class PrismaProvider extends
    PrismaClient
    implements
    OnModuleDestroy,
    OnModuleInit {
    onModuleInit() {
        this.$connect()
    }
    onModuleDestroy() {
        this.$disconnect()
    }

}
