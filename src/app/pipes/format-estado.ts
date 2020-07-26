import { Pipe, PipeTransform } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Pipe({
	name: "formatEstado"
})
export class FormatEstado implements PipeTransform {
	month: string;
	day: string;
	year: string;
	constructor(private translateService: TranslateService) {}

	transform(value: any): string {
		switch (value) {
			case "IN":
				return this.translateService.instant(
					"Proc_Pendientes_Iniciador"
				);
				break;
			case "PR":
				return this.translateService.instant(
					"Proc_Pendientes_Revision"
				);
				break;
			case "RV":
				return this.translateService.instant(
					"Proc_Revisado"
				);
				break;
			case "PA":
				return this.translateService.instant(
					"Proc_Pendientes_Aprobacion"
				);
				break;
			case "AP":
				return this.translateService.instant(
					"Proc_Pendientes_Aprobado"
				);
				break;
			case "RZ":
				return this.translateService.instant(
					"Proc_Pendientes_Rechazado"
				);
				break;
		}
	}
}
