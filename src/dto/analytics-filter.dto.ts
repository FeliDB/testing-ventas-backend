import { IsOptional, IsEnum } from "class-validator";

export enum PeriodoAnalytics {
  ULTIMOS_30_DIAS = '30d',
  ULTIMOS_6_MESES = '6m',
  ULTIMO_ANO = '1y'
}

export class AnalyticsFilterDto {
  @IsOptional()
  @IsEnum(PeriodoAnalytics)
  periodo?: PeriodoAnalytics = PeriodoAnalytics.ULTIMOS_30_DIAS;
}