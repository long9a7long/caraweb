import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  getItem(key: string) {
    const storage = this.getObjectHash(key);
    return storage ? JSON.parse(storage) : {};
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  setItem(key: string, value: any): void {
    this.setObjectHash(key, JSON.stringify(value));
  }

  b64e(str) {
    return btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode(+('0x' + p1));
      })
    );
  }

  b64d(str) {
    return decodeURIComponent(
      Array.prototype.map
        .call(atob(str), function (c) {
          return '%' + c.charCodeAt(0).toString(16);
        })
        .join('')
    );
  }

  setObjectHash(key, myObject) {
    let newObject = {};
    for (const [key, value] of Object.entries(myObject)) {
      newObject[key] = this.b64e(myObject[key]);
    }
    localStorage.setItem(key, this.b64e(JSON.stringify(newObject)));
  }

  getObjectHash(key) {
    let myObject = localStorage.getItem(key);

    if (!myObject) return null;

    const b64dObject = (value) => {
      return this.b64d(value);
    };

    const arrJson =
      this.b64d(myObject) &&
      JSON.parse(this.b64d(myObject), function (key, value) {
        return key ? b64dObject(this[key]) : this[key];
      });

    let jsonText = '';
    if (arrJson) {
      for (const [key, value] of Object.entries(arrJson)) {
        jsonText += value;
      }

      return jsonText;
    }
    return null;
  }
}
