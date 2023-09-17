import { Controller, Get } from '@nestjs/common';
import { SummaryService } from './summary.service';
import { ReportService } from 'src/report/report.service';

@Controller('summary')
export class SummaryController {
  constructor(private readonly summaryServive : SummaryService){}
  @Get()
  getSummary(){
    return this.summaryServive.calculateSummary();
  }

}