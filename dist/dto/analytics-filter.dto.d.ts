export declare enum PeriodoAnalytics {
    ULTIMOS_30_DIAS = "30d",
    ULTIMOS_6_MESES = "6m",
    ULTIMO_ANO = "1y"
}
export declare class AnalyticsFilterDto {
    periodo?: PeriodoAnalytics;
}
