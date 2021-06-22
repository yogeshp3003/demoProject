import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    public loader = new BehaviorSubject<boolean>(false);

    loader_show() {
        this.loader.next(true);
        return this.loader;
    }

    loader_hide() {
        this.loader.next(false);
        return this.loader;
    }
}