import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
 
  constructor() { }

  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }

  setItem(key: string, value: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(key, value);
    }
  }

  getItem(key: string): User | null {
    if (this.isLocalStorageAvailable()) {
      const item = localStorage.getItem(key)
      console.log('este es el local', item);
      
      if (item) {
        return JSON.parse(item) as User;
      }
    }
    return null;
  }

  removeItem(key: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.clear();
    }
  }

  login(): boolean {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('loggedIn') === 'true';
    }
    return false;
  }

  logout(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('loggedIn');
    }
  }

  getAllItems(): { key: string, value: string }[] {
    const items: { key: string, value: string }[] = [];
    if (this.isLocalStorageAvailable()) {
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
