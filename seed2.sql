
SET FOREIGN_KEY_CHECKS=0;
SHOW ENGINE INNODB STATUS;;

DROP TABLE IF EXISTS Users;
CREATE TABLE IF NOT EXISTS Users (
	id           INT(11) UNSIGNED,
	firstName    VARCHAR(255) DEFAULT NULL,
	lastName     VARCHAR(255) DEFAULT NULL,
	email        VARCHAR(255),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS IngredientTypes;
CREATE TABLE IF NOT EXISTS IngredientTypes (
  id           INT(11) UNSIGNED NOT NULL,
  type         ENUM('Ingredient', 'Recipe'),
  name         VARCHAR(255) DEFAULT NULL,
  inventory    VARCHAR(50),
  PRIMARY KEY (id),
  INDEX(id, type)
);

DROP TABLE IF EXISTS Ingredients;
CREATE TABLE IF NOT EXISTS Ingredients (
  IngredientTypeId INT(11) UNSIGNED NOT NULL,
  type         ENUM('Ingredient'),
  name         VARCHAR(255) DEFAULT NULL,
  category     ENUM('Baking', 'Grains, Pastas', 'Nuts', 'Meats', 'Oils, Vinegars, and Sauces', 'Produce', 'Spices'),
  unitCost     DECIMAL(5,2),
  unit         VARCHAR(50),
  PRIMARY KEY (IngredientTypeId),
  FOREIGN KEY (IngredientTypeId, type) REFERENCES IngredientTypes (id, type)
);

DROP TABLE IF EXISTS Recipes;
CREATE TABLE IF NOT EXISTS Recipes (
  id  INT(11) UNSIGNED NOT NULL,
  IngredientTypeId INT(11) UNSIGNED NOT NULL,
  type          ENUM('Recipe'),
  UserId        INT(11) UNSIGNED,
  date          DATE,
  name          VARCHAR(255) DEFAULT NULL,
  description   TINYTEXT,
  pictureUrl    TEXT,
  cuisine       VARCHAR(25),
  instructions  TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (IngredientTypeId, type) REFERENCES IngredientTypes (id, type),
  FOREIGN KEY (UserId) REFERENCES Users (id)
);


/* Recipes - Ingredients: Many to Many - JOIN TABLE */ 
DROP TABLE IF EXISTS RecipeIngredients;
CREATE TABLE IF NOT EXISTS RecipeIngredients (
	RecipeId		      INT(11) UNSIGNED NOT NULL,
	IngredientTypeId	    INT(11) UNSIGNED NOT NULL,
	quantity  	      FLOAT NOT NULL,
	unit			        VARCHAR(50),
  PRIMARY KEY (RecipeId, IngredientTypeId),
  FOREIGN KEY (RecipeId) references Recipes (id),
  FOREIGN KEY (IngredientTypeId) references IngredientTypes (id)
);


TRUNCATE TABLE Users;

INSERT INTO Users (id, firstName, lastName, email) VALUES ('1', 'Catherine', 'Lau', 'clau.catherine@gmail.com');

INSERT INTO IngredientTypes (id, type, name, inventory) VALUES ('1', 'Ingredient', 'chicken thighs', '6 lb');

INSERT INTO Ingredients (IngredientTypeId, type, name, category, unitCost, unit) VALUES ('1', 'Ingredient', 'chicken thighs', 'Meats', 2.99, 'lb');

INSERT INTO Recipes (id, IngredientTypeId, type, UserId, name, description, pictureUrl, cuisine, instructions) VALUES ('1', '1', 'Recipe', '1', 'Basic Roast Chicken', 'simple, fool-proof roast chicken with salt and pepper seasoning.', 'http://lorempixel.com/250/250/food/', 'American', '1. Rinse chicken and pat dry with paper towels. 
  2. Season chicken liberally with kosher salt and pepper. 
  3. Roast chicken at 450F for 1 1/2 hours.');

INSERT INTO Recipes (id, IngredientTypeId, type, UserId, name, description, pictureUrl, cuisine, instructions) VALUES ('2', '2', 'Recipe', '1', 'Chicken Teriyaki', 'a classic Japanese dish.', 'http://lorempixel.com/250/250/food/', 'Japanese', '1. Rinse chicken and pat dry with paper towels. 2. Season chicken liberally with kosher salt and pepper. 3. Roast chicken at 450F for 1 1/2 hours.');

INSERT INTO Recipes (id, IngredientTypeId, type, UserId, name, description, pictureUrl, cuisine, instructions) VALUES ('3', '3', 'Recipe', '1', 'Red-Cooked Pork (Hong Shao Rou)', 'Hunan-style pork belly braised in sugar, cinnamon, and star anise.', 'http://lorempixel.com/250/250/food/', 'Chinese', '1. Rinse chicken and pat dry with paper towels. 2. Season chicken liberally with kosher salt and pepper. 3. Roast chicken at 450F for 1 1/2 hours.');

INSERT INTO Recipes (id, IngredientTypeId, type, UserId, name, description, pictureUrl, cuisine, instructions) VALUES ('4', '4', 'Recipe', '1', 'Sauteed Curried Cauliflower', 'Cauliflower sauteed in garlic, spices, and olive oil.', 'http://lorempixel.com/250/250/food/', 'Indian', '1. Rinse chicken and pat dry with paper towels. 2. Season chicken liberally with kosher salt and pepper. 3. Roast chicken at 450F for 1 1/2 hours.');

INSERT INTO Recipes (id, IngredientTypeId, type, UserId, name, description, pictureUrl, cuisine, instructions) VALUES ('5', '5', 'Recipe', '1', 'Indian Meatball Masala', 'Meatballs with Indian Spices', 'http://lorempixel.com/250/250/food/', 'Indian', '1. Rinse chicken and pat dry with paper towels. 2. Season chicken liberally with kosher salt and pepper. 3. Roast chicken at 450F for 1 1/2 hours.');

INSERT INTO Recipes (id, IngredientTypeId, type, UserId, name, description, pictureUrl, cuisine, instructions) VALUES ('6', '6', 'Recipe', '1', 'Pork Chops with Caribbean Rub', 'A quick Caribbean-inspired rub gives juicy pork chops a boost of flavor', 'http://lorempixel.com/250/250/food/', 'American', '1. Rinse chicken and pat dry with paper towels. 2. Season chicken liberally with kosher salt and pepper. 3. Roast chicken at 450F for 1 1/2 hours.');

INSERT INTO Recipes (id, IngredientTypeId, type, UserId, name, description, pictureUrl, cuisine, instructions) VALUES ('7', '7', 'Recipe', '1', 'Turkey Bolognese with Pasta', 'A quick weeknight pasta dish', 'http://lorempixel.com/250/250/food/', 'Italian', '1. Rinse chicken and pat dry with paper towels. 2. Season chicken liberally with kosher salt and pepper. 3. Roast chicken at 450F for 1 1/2 hours.');

INSERT INTO Recipes (id, IngredientTypeId, type, UserId, name, description, pictureUrl, cuisine, instructions) VALUES ('8', '8', 'Recipe', '1', 'Vietnamese Salad with Chicken and Vermicelli', 'A Vietnamese noodle salad with fish sauce dressing', 'http://lorempixel.com/250/250/food/', 'Vietnamese', '1. Rinse chicken and pat dry with paper towels. 2. Season chicken liberally with kosher salt and pepper. 3. Roast chicken at 450F for 1 1/2 hours.');

INSERT INTO Recipes (id, IngredientTypeId, type, UserId, name, description, pictureUrl, cuisine, instructions) VALUES ('9', '9', 'Recipe', '1', 'Cantonese Braised Beef Stew', 'Beef flank with daikon braised in Chu Hou sauce', 'http://lorempixel.com/250/250/food/', 'Chinese', '1. Rinse chicken and pat dry with paper towels. 2. Season chicken liberally with kosher salt and pepper. 3. Roast chicken at 450F for 1 1/2 hours.');

INSERT INTO RecipeIngredients (RecipeId, IngredientTypeId, quantity, unit) VALUES ('1', '1', '2', 'lbs' );

INSERT INTO RecipeIngredients (RecipeId, IngredientTypeId, quantity, unit) VALUES ('2', '1', '2', 'lbs' );

INSERT INTO RecipeIngredients (RecipeId, IngredientTypeId, quantity, unit) VALUES ('3', '1', '2', 'lbs' );



