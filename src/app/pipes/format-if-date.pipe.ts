import { Pipe, PipeTransform } from "@angular/core";
import { DebugRenderer2 } from "@angular/core/src/view/services";

@Pipe({
	name: "formatIfDate"
})
export class FormatIfDate implements PipeTransform {
	month: string;
	day: string;
	year: string;
	myDate: Date;

	transform(value: any): any {

		this.myDate = new Date(value);

		if (
			value == null ||
			typeof value === "boolean" ||
			isNaN(this.myDate.getDate()) ||
			!isNaN(value)
		) {
			return value;
		} else {
			this.month = "0" + (this.myDate.getMonth() + 1);
			this.day = "0" + this.myDate.getDate();
			this.year = "" + this.myDate.getFullYear();

			this.day = this.day.substr(this.day.length - 2);
			this.month = this.month.substr(this.month.length - 2);

			return this.day + "/" + this.month + "/" + this.year;
		}
	}
}
