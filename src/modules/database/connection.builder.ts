import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';

export const buildConnection = async (
  configService?: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  const params: TypeOrmModuleOptions = configService.config.database;
  return params;
};
