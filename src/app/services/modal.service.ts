import {Injectable} from "@angular/core";
import {AsyncSubject, BehaviorSubject, ReplaySubject} from "rxjs";

@Injectable()
export class ModalService {
  private isModal = new ReplaySubject(1)
  public isModal$ = this.isModal.asObservable()

  showModal() {
    this.isModal.next(true)
  }

  hideModal() {
    this.isModal.next(false)
  }
}
