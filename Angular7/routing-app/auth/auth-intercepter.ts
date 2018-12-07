import {HttpInterceptor,HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable()

export class AuthInterceptor  implements HttpInterceptor{
    constructor(private authService : AuthService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        console.log('Intercepted |',req);
        const  copiereq = req.clone(
            {
                params:req.params.set('auth',this.authService.getToken())
            }
        );
        return next.handle(copiereq);
    }

}