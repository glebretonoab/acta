import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs';

import { Status } from '../models/status.model';

@Injectable()
export class StatusService {
	private status = new Subject<Status>();
	currentStatus = this.status.asObservable();

	setStatus(status: Status) {
		this.status.next(status)
	}

	getStatus() {
		return this.currentStatus;
	}

	constructor() {}
}