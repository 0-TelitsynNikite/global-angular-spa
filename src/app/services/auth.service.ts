import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BehaviorSubject, ReplaySubject} from "rxjs";

@Injectable()
export class AuthService {
  isLoggedIn: any = new BehaviorSubject(false)
  isLoggedIn$ = this.isLoggedIn.asObservable()

  constructor(public auth: AngularFireAuth) { }

  async signIn(email: string, password: string) {
    await this.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn.next(true)
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }

  async signUp(email: string, password: string) {
    await this.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn.next(true)
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }

  logout() {
    this.isLoggedIn.next(false)
    this.auth.signOut()
    localStorage.removeItem('user')
  }

  getLoggedIn() {
    return !!this.isLoggedIn$
  }
}
