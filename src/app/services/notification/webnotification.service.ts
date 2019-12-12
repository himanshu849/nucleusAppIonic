import { Injectable } from "@angular/core";
import { NotificationService } from '../notification.service';

@Injectable()

export class WebNotificationService extends NotificationService {

    constructor() { super() }
    pushInitialize() {}
    pushUnregister() {}
}