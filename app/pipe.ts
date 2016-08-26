import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'mapToIterable'})
export class MapToIterable {
    transform(map: {}, args: any[] = null): any {
        if (!map)
            return null;
        return Object.keys(map)
            .map((key) => ({ 'key': key, 'value': map[key] }));
    }
}

//http://stackoverflow.com/questions/35534959/access-key-and-value-of-object-using-ngfor
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}

//https://webcake.co/object-properties-in-angular-2s-ngfor/
@Pipe({name: 'values'})
export class ValuesPipe implements PipeTransform {
    transform(value: any, args?: any[]): Object[] {
        let keyArr: any[] = Object.keys(value),
            dataArr = [],
            keyName = args[0];

        keyArr.forEach((key: any) => {
            value[key][keyName] = key;
            dataArr.push(value[key])
        });

        if(args[1]) {
            dataArr.sort((a: Object, b: Object): number => {
                return a[keyName] > b[keyName] ? 1 : -1;
            });
        }

        return dataArr;
    }
}