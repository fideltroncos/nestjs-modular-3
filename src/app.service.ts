import { Injectable, Inject } from '@nestjs/common';
// import { ConfigService} from '@nestjs/config'; variables globales
import { ConfigType } from "@nestjs/config";

import config from "./config";

@Injectable()
export class AppService {
  // es la fomra de como injectar un valor, sea string u objetoa - db
  constructor(
    // @Inject('API_KEY') private apiKey: string, 
    @Inject('TASKS') private tasks: any[],
    //Para leer apikeys tipados
    @Inject(config.KEY) private configType: ConfigType<typeof config>,
    // private configService: ConfigService
    ){}

  getHello(): string {
    // para no cometer eorroe al llamar una apikey - se llamam en masa
    const apiKey = this.configType.apiKey;
    const db_name = this.configType.database.name;

    console.log(apiKey,db_name);
    return `Hello World! ${apiKey} ${db_name}`;
  }
}
