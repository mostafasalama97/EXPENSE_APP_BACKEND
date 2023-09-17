import { ReportType, data, reportData, updateReportData } from './../data';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { ENHANCER_TOKEN_TO_SUBTYPE_MAP } from '@nestjs/core/constants';
import { throws } from 'assert';
import { ReportResponseDto } from 'src/dtos/report.dto';
@Injectable()
export class ReportService {
  getAllReports(): ReportResponseDto[] {
    return data.report.map((report) => new ReportResponseDto(report));
  }
  // ------------------------------------------------------
  getAllReportsType(type: ReportType): ReportResponseDto[] {
    return data.report
    .filter((report) => report.type === type)
    .map((report) => new ReportResponseDto(report))
  }
  // ------------------------------------------------
  getReportById(type: ReportType, id: string): ReportResponseDto {
    const report = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id)

    if (!report) throw new Error("no report to dispaly")

    return new ReportResponseDto(report)

  }
  // ---------------------------------------------
  createReport(type: ReportType, { amount, source }: reportData) {
    try {
      let newReport = {
        id: uuid(),
        source,
        amount,
        created_at: new Date(),
        updated_at: new Date(),
        type,
      }
      data.report.push(newReport)
      return new ReportResponseDto(newReport)
    }
    catch (error) {
      console.log(error)
    }
  }
  // ------------------------------------------------
  updateReport(type: ReportType, id: string, body: updateReportData): ReportResponseDto {

    let reportToUpdate = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!reportToUpdate) { throw new Error("there is no report to update"); }
    let reportIndex = data.report.findIndex((report) => report.id === reportToUpdate.id)
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date()
    }
    return new ReportResponseDto(data.report[reportIndex])
  }
  // ---------------------------------------------------

  deleteReport(id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id)
    if (reportIndex === -1) return "there is no report with these id to delete"
    let deletedReport = data.report.splice(reportIndex, 1)
    return `successfully deleted ${deletedReport}`
  }
}
