export { default as Cart } from './Cart';

export const axios = require('axios');

export const config = {
    api: 'https://my-json-server.typicode.com/cgloge/e28-p3-api/',
}

export let store = {
    cartCount: 0
}