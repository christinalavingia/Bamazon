# Bamazon

## Demo Video: https://drive.google.com/file/d/16hkst_bycfcWHF8go2qPPDAFWKr1xQAg/view

## Objective

The goal of this NodeJs application is to create a virtual storefront like Amazon's where users can view inventory, determine which — if any — items they'd like to purchase and complete a transaction.

When using the Bamazon Customer Manager, users will encounter the following prompts:

1. Welcome to Bamazon! Would you like to view our inventory?
  1. The user has the option of typing in Y for Yes or n for No
  2. If Yes, the prompts continue and the Cli-Table is invoked to present the item ID, item name, department, price and stock quantity.
  3. If n, they see this console message "Thanks for stopping by!" and the NodeJs application starts again with prompt 1.
2. Would you like to purchase an item?
  1. The user has the option of typing in Y for Yes or n for No
  2. If Yes, the prompts continue; if n they see this console message "Thank you, come back soon!" and the NodeJS application starts again with prompt 1.
3. Please enter the ID of the item you'd like to purchase.
  1. Accepts a numeric value between 1 and 10.
4. How many units would you like to purchase?
  1. Accepts a numeric value.
  2. If the value is greater than the stock quantity, they receive the following prompt:
    1. "Sorry! We don't have enough in stock. Please enter a different amount or try again later."
      1. At this point, the NodeJS app starts over again at prompt 1.
  3. If the value is lower than the stock quantity, they see a confirmation screen:
    1. "Your order will be fulfilled.
        You've selected:
        Item: <Item Name>
        Department: <Department Name>
        Price: <Unit Price>
        Quantity: <Units Selected>
        Total: Price X Quantity
5. Please confirm your order.
  1. The user has the option of typing in Y for Yes or n for No
    1. If Yes, they see the prompt: "Your order is complete, thank you!"
    2. If No, they see the prompt: "Thanks for stopping by!"
  
Due to the use of MySql for database storage, the stock quantity of a given item should decrease to reflect the number of items purchased the next time the user views available inventory.  


 ## Technology
 
 This app relies on the following NPM Packages:
 * MySql: Database management
 * Inquirer: Prompts with user input
 * Cli-Table: Inventory display
 * Node
 * JavaScript
 
 
