export default class Favorite {

    /**
     * 
     */
    constructor() {
        // Extract JSON favorite string from local storage
        let favorite = localStorage.getItem('favorite');

        // Parse JSON favorite String to `items` object
        this.items = (favorite) ? JSON.parse(favorite) : [];
    }

    /**
     * Getter method for items
     */
    getItems() {
        return this.items;
    }

    /**
     * Returns how many total items are in the favorite
     */
    count() {
        let sum = 0;
        for (let key of Object.keys(this.items)) {
            sum += this.items[key].quantity;
        }
        return sum;
    }

    /**
     * Updates favorite in localstorage
     */
    update() {
        localStorage.setItem('favorite', JSON.stringify(this.items))
    }

    /**
     * Add a new item of the given recipeId
     */
    add(recipeId, quantity = 1) {

        // Check if the recipe is already in favorites, if it isn't add it to favorites
        let item = this.getItem(recipeId)

        if (!item) {
            this.items.push({
                id: recipeId,
                quantity: quantity
            });
        } 
        this.update();
    }

    /**
     * Remove an item from items via recipeId
     */
    remove(recipeId) {
        let item = this.getItem(recipeId);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via recipeId
     * Returns null if recipe does not exist in items
     */
    getItem(recipeId) {
        return this.items.find(({ id }) => id === recipeId) || null;
    }
}