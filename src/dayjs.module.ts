import { NgModule } from '@angular/core';

import { AddPipe } from './add.pipe';
import { DateFormatPipe } from './date-format.pipe';
import { DifferencePipe } from './difference.pipe';
import { FromUnixPipe } from './from-unix.pipe';
import { ParsePipe } from './parse.pipe';
import { SubtractPipe } from './subtract.pipe';

const ANGULAR_DAYJS_PIPES = [
	AddPipe,
	DateFormatPipe,
	DifferencePipe,
	FromUnixPipe,
	ParsePipe,
	SubtractPipe,
];

@NgModule({
	declarations: ANGULAR_DAYJS_PIPES,
	exports: ANGULAR_DAYJS_PIPES
})
export class DayjsModule { }
