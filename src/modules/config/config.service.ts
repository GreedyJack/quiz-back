import { Injectable } from '@nestjs/common';

import { IAppConfig } from './interfaces';

@Injectable()
export class ConfigService {
  config: IAppConfig;
  constructor(config: IAppConfig) {
    this.config = config;
  }
}
