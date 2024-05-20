import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // req.append('ajbh'.'jughaj');
        const modifiedReq = req.clone({ headers: req.headers.append('Auth', 'Noman') });
        return next.handle(modifiedReq);
    }
}