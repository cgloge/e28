export default class Favorite {

    /**
     * 
     */
    constructor() {
        // Extract JSON favorte string from local storage
        let favorte = localStorage.getItem('favorte');

        // Parse JSON favorte String to `items` object
        this.items = (favorte) ? JSON.parse(favorte) : [];
    }

    /**
     * Getter method for items
     */
    getItems() {
        return this.items;
    }

    /**
     * Returns how many total items are in the favorte
     */
    count() {
        let sum = 0;
        for (let key of Object.keys(this.items)) {
            sum += this.items[key].quantity;
        }
        return sum;
    }

    /**
     * Updates favorte in localstorage
     */
    update() {
        localStorage.setItem('favorte', JSON.stringify(this.items))
    }

    /**
     * Add a new item of the given recipeId
     */
    add(recipeId, quantity = 1) {

        // First see if recipe is already present
        let item = this.getItem(recipeId)

        if (item) {
            // Recipe is in favorte already; increment quantity by 1
            item.quantity += quantity;

        } else {
            // Recipe not in favorte, add as new item
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