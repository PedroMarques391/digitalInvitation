import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [EventsController],
  imports: [DbModule]
})
export class EventsModule {

}
