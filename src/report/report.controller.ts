import { ReportService } from './report.service';
import { BadRequestException, Controller, Get, Post, Put, Delete, Body, Param, HttpCode, ParseIntPipe, ParseEnumPipe } from '@nestjs/common';
import { ReportType } from 'src/data';
import { ReportResponseDto, createReportDto, updateReportDto  } from 'src/dtos/report.dto';
@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) { }

  @Get()
  getAllReports() : ReportResponseDto[] {
    return this.reportService.getAllReports()
  }
  // ---------------------------------------------------------------
  @Get(':type')
  getAllReportsType(@Param('type', new ParseEnumPipe(ReportType)) type: string) : ReportResponseDto[] {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getAllReportsType(reportType)
  }
  // ---------------------------------------------------------------

  @Get('/:type/:id')
  getReportsById(@Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id') id: string) : ReportResponseDto {
    console.log(id, typeof id)
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getReportById(reportType, id)
  }
  // ---------------------------------------------------------------

  @Post(':type')
  createReport(@Body() { amount, source }: createReportDto,
    @Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.createReport(reportType, { amount, source })
  }


  // ---------------------------------------------------------------

  @Put('/:type/:id')
  updateReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id') id: string,
    @Body() body: updateReportDto
  ) : ReportResponseDto {
    let reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.updateReport(reportType, id, body)
  }


  // ---------------------------------------------------------------


  @HttpCode(204)
  @Delete('/:type/:id')
  deleteReport(@Param('id') id: string) {

    return this.reportService.deleteReport(id)
  }
}
