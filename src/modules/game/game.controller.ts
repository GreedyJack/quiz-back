import { Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from '@/entities';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async getGames(): Promise<Game[]> {
    return this.gameService.getGames();
  }
}
