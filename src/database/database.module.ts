import { Module, Global } from '@nestjs/common';
//Modulo global - puede ser consultado desde donde lo rquieran

const API_KEY = "123456";
const API_KEY_PROD = "PRODUCTION21";

@Global()
@Module({
    providers: [
        {
            provide: 'API_KEY',
            useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
        },
    ],
    //decimos que API_KEY pueda ser utilizado desde cualquier modulo sin necesidad de importarlo, solo con el Inject    
    exports: ['API_KEY']
})
export class DatabaseModule { }
