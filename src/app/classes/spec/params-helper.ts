import {HttpParams} from '@angular/common/http';

export class ParamsHelper {
    static toParam(obj: object): HttpParams {
        let params = new HttpParams();
        Object.entries(obj).forEach(
            ([key, value]) => {
                if ( Array.isArray(value) ) {
                    value.forEach( item => {
                        params = params.append(ParamsHelper.camelToSnakeCase(key), item);
                    } );
                    return;
                }
                params = params.append(ParamsHelper.camelToSnakeCase(key), value);
            }
        );
        return params;
    }

    static camelToSnakeCase(src: string): string {
        return src.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    }
}
