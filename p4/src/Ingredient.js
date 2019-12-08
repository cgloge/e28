export default class Ingredient {

    /**
     * 
     */
    constructor() {
        // Extract JSON favorite string from local storage
        let ingredient = localStorage.getItem('ingredient');

        // Parse JSON favorite String to `items` object
        this.items = (ingredient) ? JSON.parse(ingredient) : [];
    }

    /**
     * Getter method for items
     */
    getItems() {
        return this.items;
    }

    /**
     * Returns how many total items are in the list
     */
    count() {
        let sum = 0;
        for (let key of Object.keys(this.items)) {
            sum += this.items[key].quantity;
        }
        return sum;
    }

    /**
     * Updates list in localstorage
     */
    update() {
        localStorage.setItem('ingredient', JSON.stringify(this.items))
    }

    /**
     * Add a new item of the given ingredientName
     */
    add(ingredientName, quantity = 1) {

        // Check if the ingredient is already in igredients, if it isn't add it to favorites
        let item = this.getItem(ingredientName)

        if (!item) {
            this.items.push({
                id: ingredientName,
                quantity: quantity
            });
        } 
        else{
            item.quantity += quantity;
        }
        this.update();
    }

    /**
     * Remove an item from items via ingredientName
     */
    remove(ingredientName) {
        let item = this.getItem(ingredientName);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via ingredientName
     * Returns null if ingredient does not exist in items
     */
    getItem(ingredientName) {
        return this.items.find(({ id }) => id === ingredientName) || null;
    }
}