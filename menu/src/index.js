// Class: SE2840 - Menu Filter
// Web Application entry point - window.onload

/**
 * Window onload function - Creates the menuItem (unfiltered) array
 *     and renders the application
 */
window.onload = () => {
    const menuItems = [
        {
            name: "ButterBurger",
            soy: true,
            egg: false,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Burger"
        },
        {
            name: "ButterBurger Cheese",
            soy: true,
            egg: false,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Burger"
        },
        {
            name: "Mushroom & Swiss ButterBurger",
            soy: true,
            egg: false,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Burger"
        },
        {
            name: "Sourdough Melt",
            soy: false,
            egg: false,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Burger"
        },
        {
            name: "The Culver's Bacon Deluxe",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Burger"
        },
        {
            name: "The Culver's Deluxe",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Burger"
        },
        {
            name: "Wisconsin Swiss Melt",
            soy: false,
            egg: false,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Burger"
        },
        {
            name: "Crispy Chicken Sandwich",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Chicken"
        },
        {
            name: "Grilled Chicken Sandwich",
            soy: false,
            egg: false,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Chicken"
        },
        {
            name: "Original Chicken Tenders",
            soy: false,
            egg: false,
            milk: false,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Chicken"
        },
        {
            name: "Spicy Crispy Chicken Sandwich",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Chicken"
        },
        {
            name: "Coleslaw",
            soy: false,
            egg: true,
            milk: false,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Side"
        },
        {
            name: "Crinkle Cut Fries",
            soy: false,
            egg: false,
            milk: false,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Side"
        },
        {
            name: "Mashed Potatoes & Gravy",
            soy: false,
            egg: false,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Side"
        },
        {
            name: "Steamed Broccoli",
            soy: false,
            egg: false,
            milk: false,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Side"
        },
        {
            name: "Wisconsin Cheddar Cheese Sauce",
            soy: false,
            egg: false,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Side"
        },
        {
            name: "Cherry Chip Butter Cake Concrete Mixer made with Chocolate Custard",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Dessert"
        },
        {
            name: "Cherry Chip Butter Cake Concrete Mixer made with Vanilla Custard",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Dessert"
        },
        {
            name: "Chocolate Concrete Mixer made with OREO",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Dessert"
        },
        {
            name: "Chocolate Concrete Mixer made with Reese's",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: true,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Dessert"
        },
        {
            name: "Cookie Dough Concrete Mixer",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Dessert"
        },
        {
            name: "Mint Concrete Mixer made with OREO",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Dessert"
        },
        {
            name: "Salted Caramel Concrete Mixer made with Brownie",
            soy: false,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Dessert"
        },
        {
            name: "Salted Caramel Concrete Mixer made with Cookie Dough",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Dessert"
        },
        {
            name: "Salted Caramel Concrete Mixer made with Reese's Peanut Butter Cups",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: true,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Dessert"
        },
        {
            name: "Vanilla Concrete Mixer made with Butterfinger",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: true,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Dessert"
        },
        {
            name: "Vanilla Concrete Mixer made with Heath English Toffee Bars",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: true,
            gluten: false,
            type: "Dessert"
        },
        {
            name: "Vanilla Concrete Mixer made with OREO",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Dessert"
        },
        {
            name: "Vanilla Concrete Mixer made with Reese's",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: true,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Dessert"
        },
        {
            name: "Chocolate Cake Cone",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Dessert"
        },
        {
            name: "Chocolate Dish",
            soy: false,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Dessert"
        },
        {
            name: "Chocolate Waffle Cone",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Dessert"
        },
        {
            name: "Vanilla Cake Cone",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Dessert"
        },
        {
            name: "Vanilla Dish",
            soy: false,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Dessert"
        },
        {
            name: "Vanilla Waffle Cone",
            soy: true,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Dessert"
        },
        {
            name: "Butterfly Jumbo Shrimp Basket",
            soy: false,
            egg: false,
            milk: false,
            fish: true,
            peanut: false,
            shellfish: true,
            treeNut: false,
            gluten: true,
            type: "Seafood"
        },
        {
            name: "Butterfly Jumbo Shrimp Dinner",
            soy: false,
            egg: false,
            milk: true,
            fish: true,
            peanut: false,
            shellfish: true,
            treeNut: false,
            gluten: true,
            type: "Seafood"
        },
        {
            name: "North Atlantic Cod Dinner",
            soy: true,
            egg: true,
            milk: true,
            fish: true,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Seafood"
        },
        {
            name: "North Atlantic Cod Filet Sandwich",
            soy: true,
            egg: true,
            milk: true,
            fish: true,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Seafood"
        },
        {
            name: "Chicken Cashew Salad with Grilled Chicken",
            soy: false,
            egg: false,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: true,
            gluten: false,
            type: "Salad"
        },
        {
            name: "Cranberry Bacon Bleu Salad with Grilled Chicken",
            soy: false,
            egg: false,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Salad"
        },
        {
            name: "Culver's® Vinaigrette",
            soy: false,
            egg: false,
            milk: false,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Dressing"
        },
        {
            name: "Garden Fresco Salad",
            soy: false,
            egg: false,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Salad"
        },
        {
            name: "Garden Fresco Salad with Grilled Chicken",
            soy: false,
            egg: false,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: true,
            type: "Salad"
        },
        {
            name: "Honey Mustard Dressing",
            soy: false,
            egg: false,
            milk: false,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Dressing"
        },
        {
            name: "Ken's® Blue Cheese Dressing",
            soy: false,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Dressing"
        },
        {
            name: "Ken's® Country French",
            soy: false,
            egg: false,
            milk: false,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Dressing"
        },
        {
            name: "Ken's® Raspberry Vinaigrette",
            soy: false,
            egg: false,
            milk: false,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Dressing"
        },
        {
            name: "Ranch Dressing",
            soy: false,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Dressing"
        },
        {
            name: "Southwest Avocado Salad",
            soy: false,
            egg: false,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Salad"
        },
        {
            name: "Zesty Avocado Dressing",
            soy: false,
            egg: true,
            milk: true,
            fish: false,
            peanut: false,
            shellfish: false,
            treeNut: false,
            gluten: false,
            type: "Dressing"
        }
    ];

    ReactDOM.render(<App menuItems={menuItems}/>, document.getElementById('root'));
}
