import { environment } from 'src/environments/environment';

export const baseUrl = environment.production ? 'http://localhost:4000' : 'http://localhost:4000';
export const productsUrl = baseUrl + '/api/menu/myrecipes';
export const cartUrl = baseUrl + '/api/cart';
export const favlistUrl = baseUrl + '/favlist';
