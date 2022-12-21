import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment as env } from 'src/environments/environment';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        request = request.clone({
            // setHeaders: {
            //     'x-rapidapi-key': env.RAPIDAPI_KEY,
            //     'x-rapidapi-host': env.RAPIDAPI_HOST
            // }, 
            setParams: {
                key: env.RAWG_API_KEY
            }
        });
        return next.handle(request);
    }
}