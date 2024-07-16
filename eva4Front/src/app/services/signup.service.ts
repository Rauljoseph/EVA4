import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
 
  constructor() { }

  setItem(key: string, value: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, value);
      console.log("Guardado exitosamente");
    }
  }

  getItem(key: string): User | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      const item = localStorage.getItem(key)
      console.log('este es el local', item);
      
      if (item) {
        return JSON.parse(item) as User;
      }
    }
    return null;
  }

  removeItem(key: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.clear();
    }
  }

  login(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('loggedIn') === 'true';
    }
    return false;
  }

  logout(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('loggedIn');
    }
  }

  getAllItems(): { key: string, value: string }[] {
    const items: { key: string, value: string }[] = [];
    if (typeof window !== 'undefined' && window.localStorage) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
          items.push({ key, value: localStorage.getItem(key) as string });
        }
      }
    }
    return items;
  }
}
