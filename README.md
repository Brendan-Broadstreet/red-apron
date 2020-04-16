# **Red Apron**

Red Apron is an app that connects busy individuals and families to chef inspired meals. 


## Red Apron Client
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

### Install Angular from NPM
1. Install a stable version of Node (if not already installed) and verify the installation using node -v.
2. Install TypeScript using command npm install -g typescript.
3. Download and install Angular CLI using command npm install -g @angular/cli.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Functionality:
Users will need to login with their email address and create a password to view the menu.
* Once logged in they can view the full menu where they can select different items to purchase.
<img width="1418" alt="Screen Shot 2020-04-15 at 10 00 37 PM" src="https://user-images.githubusercontent.com/55860144/79406295-b1859400-7f64-11ea-8874-a3be879c1300.png">


**Users can**
* Create customized meal plans based off the different menu items. 
* Add items to their shopping cart which displays an ongoing total of their cart.
<img width="1680" alt="Customer_View" src="https://user-images.githubusercontent.com/55860144/79406729-d6c6d200-7f65-11ea-8bd1-e5b2ba4c8c25.png">

**Admin can**
* Upload items to the menu.
* Update individual items within the menu.
* Delete and item from the menu.
<img width="1680" alt="Admin_View" src="https://user-images.githubusercontent.com/55860144/79406939-4dfc6600-7f66-11ea-9b6a-16af075c50b3.png">

## Usage
A user can sign up with Red Apron as a customer. Once they've logged into Red Apron they can select from variying different menu items. They can choose from full dinners that have everything in the kit they would need to make their meal, or they can pick and choose their options depending on their personal preferences.


To add items to the menu the customer would select the Add to Cart button. The item would then be thrown into the customer's shopping cart at the top right side of the screen. Each item they add to their cart the total will update dynamically with each item selected.

Once an admin logs into Red Apron they're redirected to the admin portal where they can make edits to the menu. Admins have the capability to search for menu items from three different API endpoints: Main Menu, Main Course, and Side Dish. This gives the admin the ability to create menus based on the seasons and avaialblity of food products. Admins have the ability to set the price of the items based on the avaialblity and popululatriy. In addition to setting the price, they can also edit the price of the item after it's been placed on the menu. Admin can also delete items from the menu when items sell out or the profit margin is not longer advantageious for the company.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

Brendan Broadstreet – brendan.broadstreet@gmail.com\
Alex Golding – alexgolding@icloud.com\
Alan Schultz – alanjschultz@gmail.com\
