import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        authorization: 'Bearer asdfasdf[oehfqperoing1234'
      }
    })

    console.log('hello')
    return next.handle(authReq)
  }
}
