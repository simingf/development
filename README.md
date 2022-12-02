# Development

### Link to Deployed Website
https://coldfish777.github.io/development/

### Goal and Value of the Application
This site's goal is to allow users to buy technology, guitars, or cakes. The value of the application is that it is perfect for Tech Geek Dessert Loving Guitarists.

### Usability Principles Considered
The cart is easy to use. You can add an item to your cart by clicking "Add to Cart" below any item in the shop. Clicking multiple times adds the item multiple times. In the cart, it shows how many of each item you bought, the price of each item, the total price of multiple counts of a single item, and the total price of your cart. You can remove all counts of an item with the "Remove" button below each item in the cart, or clear your cart with the "Clear Entire Cart" button at the top of the cart.

The filter/sort is also easy to use. You can make a combination of filter by type, brand, or price, and sort by price. It shows the current combination so you don't get lost. The reset button restores everything to the initial state.

### Organization of Components
There are three main components in App. These are Options, Shop, and Cart. Options contains multiple components, which are FilterType, FilterBrand, FilterCost, and Sort. Shop contains the ShopItem component. Cart doesn't contain any other components. 

### How Data is Passed Down Through Components
Data is passed through states. In the App, we have two states, shop and cart. shop is an array which contains all the items to be displayed. cart is a map of items in the cart to an object containing their count and price. The shop state is passed down to the Options component for filtering/sorting, as well as the Shop component for displaying. The cart state is passed down to the Shop component for modifying the cart, as well as the Cart component for displaying the cart and allowing for removals. In the Options component, we have states type, brand, low, high, and sort. They are passed down to their respective components for modification.

### How the User Triggers State Changes
The user triggers state changes using buttons. In the Options component, the user can click on the buttons to modify the type, brand, low, high, and sort states. The Options component uses useEffect to track if these states have changed, and if they have, updates the shop state accordingly. In the Shop component, the user can click on the Add to Cart buttons to modify the cart state. This is done indirectly via the updateCart function, which keeps track of the count and price of each item in the cart. In the Cart component, the user can click on Clear Entire Cart, which resets the cart state, as well as remove for each item in the cart, which modifies the cart state accordingly.
