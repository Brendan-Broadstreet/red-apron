import { environment } from 'src/environments/environment';
import { APIURL } from 'src/environments/environment.prod';

export const baseUrl = environment.production ? `${APIURL}` : `${APIURL}`;
export const productsUrl = baseUrl + '/api/menu/myrecipes';
export const cartUrl = baseUrl + '/api/cart';

export const favlistUrl = baseUrl + '/api/favlist'

