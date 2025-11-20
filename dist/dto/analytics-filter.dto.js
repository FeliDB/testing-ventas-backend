"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsFilterDto = exports.PeriodoAnalytics = void 0;
const class_validator_1 = require("class-validator");
var PeriodoAnalytics;
(function (PeriodoAnalytics) {
    PeriodoAnalytics["ULTIMOS_30_DIAS"] = "30d";
    PeriodoAnalytics["ULTIMOS_6_MESES"] = "6m";
    PeriodoAnalytics["ULTIMO_ANO"] = "1y";
})(PeriodoAnalytics || (exports.PeriodoAnalytics = PeriodoAnalytics = {}));
class AnalyticsFilterDto {
    periodo = PeriodoAnalytics.ULTIMOS_30_DIAS;
}
exports.AnalyticsFilterDto = AnalyticsFilterDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(PeriodoAnalytics),
    __metadata("design:type", String)
], AnalyticsFilterDto.prototype, "periodo", void 0);
//# sourceMappingURL=analytics-filter.dto.js.map