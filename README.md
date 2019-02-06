# Bamazon

### Demo Video: https://drive.google.com/file/d/16hkst_bycfcWHF8go2qPPDAFWKr1xQAg/view

## Objective

The goal of this NodeJs application is to create a virtual storefront like Amazon's where users can view inventory, determine which — if any — items they'd like to purchase and complete a transaction.

When using the Bamazon Customer Manager, users will encounter the following prompts:

1. Welcome to Bamazon! Would you like to view our inventory?
    * The user has the option of typing in Y for Yes or n for No
    * If Yes, the prompts continue and the Cli-Table is invoked to present the item ID, item name, department, price and stock quantity.
    * If n, they see this console message "Thanks for stopping by!" and the NodeJs application starts again with prompt 1.
2. Would you like to purchase an item?
    * The user has the option of typing in Y for Yes or n for No
    * If Yes, the prompts continue; if n they see this console message "Thank you, come back soon!" and the NodeJS application starts again with prompt 1.
3. Please enter the ID of the item you'd like to purchase.
    * Accepts a numeric value between 1 and 10.
4. How many units would you like to purchase?
    * Accepts a numeric value.
    * If the value is greater than the stock quantity, they receive the following prompt:
      * "Sorry! We don't have enough in stock. Please enter a different amount or try again later."
      * At this point, the NodeJS app starts over again at prompt 1.
    * If the value is lower than the stock quantity, they see a confirmation screen:
      * "Your order will be fulfilled.
        You've selected:
        Item: <Item Name>
        Department: <Department Name>
        Price: <Unit Price>
        Quantity: <Units Selected>
        Total: Price X Quantity
5. Please confirm your order.
   * The user has the option of typing in Y for Yes or n for No
   * If Yes, they see the prompt: "Your order is complete, thank you!"
   * If No, they see the prompt: "Thanks for stopping by!"


 ## Technology
 
 This app relies on the following NPM Packages:
 * MySQL: Database management
 * Inquirer: Prompts with user input
 * Cli-Table: Inventory display
 * Node
 * JavaScript
 
Due to the use of MySQL for database storage, the stock quantity of a given item should decrease to reflect the number of items purchased the next time the user views available inventory.  
 
 Before the user interacts with the application, the inventory information is already stored in MySQL. I used real inventory names and prices from Amazon to give my application a more realistic feel.
 
 
