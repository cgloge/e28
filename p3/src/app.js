export { default as Favorite } from './Favorite';
export { default as Ingredient } from './Ingredient';

export const axios = require('axios');

export const config = {
    api: 'https://my-json-server.typicode.com/cgloge/e28-p3-api/',
}

export let store = {
    favoriteCount: 0,
    ingredientCount: 0
}