import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageProducer } from './producer/producer.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly producer: MessageProducer) { }

  @Get()
  getHello(): string {

    this.producer.sendMessage({
      message: 'new_message',
    });


    return this.appService.getHello();
  }
}
