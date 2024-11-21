import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {
  constructor() { }

  @Get("/ei")
  ping(): string {
    return "Calma, tá funcionando";
  }
}
