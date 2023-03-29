import {RxState} from "@rx-angular/state";
import {Injectable} from "@angular/core";
import {State} from "../models/state";

@Injectable({providedIn: "root"})
export class StateService extends RxState<State> {
  constructor() {
    super();
    this.hold(this.select("selectedMenuItem"), (value) => {
      console.log(value)
    })
  }
}
