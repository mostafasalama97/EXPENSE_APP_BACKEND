import { ReportType } from 'src/data';
import { ReportService } from './../report/report.service';
import { Injectable } from '@nestjs/common';


@Injectable()
export class SummaryService {
    constructor(private readonly reportService: ReportService) { }
    calculateSummary() {
        const totalExpense = this.reportService.getAllReportsType(ReportType.EXPENSE)
                            .reduce((sum, report) => sum + report.amount, 0)
        const totalIncome = this.reportService.getAllReportsType(ReportType.INCOME)
                            .reduce((sum, report) => sum + report.amount, 0)
        return {
            totalIncome: totalExpense,
            totalExpense: totalExpense,
            netIncome: totalExpense - totalExpense
        }
    }
} 