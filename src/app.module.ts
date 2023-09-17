import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
// import { CustomInterceptor } from './custom.interceptor';
import { SummaryModule } from './summary/sumary.module';
import { ReportModule } from './report/report.module';
@Module({
  imports: [SummaryModule , 
    ReportModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor,
    // useClass : CustomInterceptor  // we are not reinvinting the wheel
  }]
})
export class AppModule { }
