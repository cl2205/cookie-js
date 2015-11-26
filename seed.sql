
DROP TABLE IF EXISTS `Users`;
CREATE TABLE IF NOT EXISTS `Users` (
	`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
	`firstName` VARCHAR(255) DEFAULT NULL,
	`lastName` VARCHAR(255) DEFAULT NULL,
	`email` VARCHAR(255),
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Ingredients`;
CREATE TABLE IF NOT EXISTS `Ingredients` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Instructions`;
CREATE TABLE IF NOT EXISTS `Instructions` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `recipe_id` INT(11) UNSIGNED NOT NULL,
  `step_no` INT(50) UNSIGNED,
  `step_description` TEXT,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `RecipeIngredients`;
CREATE TABLE IF NOT EXISTS `RecipeIngredients` (
	`recipe_id`		INT(11) UNSIGNED NOT NULL,
	`ingredient_id`	INT(11) UNSIGNED NOT NULL,
	`quantity`  	FLOAT NOT NULL,
	`unit`			VARCHAR(50)
);

DROP TABLE IF EXISTS `Recipes`;
CREATE TABLE IF NOT EXISTS `Recipes` (
  `id`    			INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ingredient_id` 	INT(11) DEFAULT NULL,
  `instruction_id`	INT(11) DEFAULT NULL,
  `UserId` INT(11) DEFAULT NULL,
  `name`			VARCHAR(255) DEFAULT NULL,
  `description` 	TINYTEXT,
  `cuisine`			VARCHAR(25),
  PRIMARY KEY (`id`)
);

TRUNCATE TABLE `Users`;

INSERT INTO `Users` (`id`, `firstName`, `lastName`, `email`) VALUES ('1', 'Catherine', 'Lau', 'clau.catherine@gmail.com');

INSERT INTO `Ingredients` (`id`, `name`) VALUES ('1', 'chicken');

INSERT INTO `Instructions` (`id`, `recipe_id`, `step_no`, `step_description`) VALUES ('1', '1', '1', 'Rinse chicken and dry with paper towels.');

INSERT INTO `RecipeIngredients` (`recipe_id`, `ingredient_id`, `quantity`, `unit`) VALUES ('1', '1', '1', '2-3 lb');

INSERT INTO `Recipes` (`id`, `ingredient_id`, `instruction_id`, `UserId`, `name`, `description`, `cuisine`) VALUES ('1', '1', '1', '1', 'Basic Roast Chicken', 'simple, fool-proof roast chicken with salt and pepper seasoning.', 'American');

INSERT INTO `Recipes` (`id`, `ingredient_id`, `instruction_id`, `UserId`, `name`, `description`, `cuisine`) VALUES ('2', '2', '2', '1', 'Chicken Teriyaki', 'a classic Japanese dish.', 'Japanese');
INSERT INTO `Recipes` (`id`, `ingredient_id`, `instruction_id`, `UserId`, `name`, `description`, `cuisine`) VALUES ('3', '3', '3', '1', 'Red-Cooked Pork (Hong Shao Rou)', 'Hunan-style pork belly braised in sugar, cinnamon, and star anise.', 'Chinese');

INSERT INTO `Recipes` (`id`, `ingredient_id`, `instruction_id`, `UserId`, `name`, `description`, `cuisine`) VALUES ('4', '4', '4', '1', 'Sauteed Curried Cauliflower', 'Cauliflower sauteed in garlic, spices, and olive oil.', 'Indian');

INSERT INTO `Recipes` (`id`, `ingredient_id`, `instruction_id`, `UserId`, `name`, `description`, `cuisine`) VALUES ('5', '5', '5', '1', 'Indian Meatball Masala', 'Meatballs with Indian Spices', 'Indian');

INSERT INTO `Recipes` (`id`, `ingredient_id`, `instruction_id`, `UserId`, `name`, `description`, `cuisine`) VALUES ('6', '6', '6', '1', 'Pork Chops with Caribbean Rub', 'A quick Caribbean-inspired rub gives juicy pork chops a boost of flavor', 'American');

INSERT INTO `Recipes` (`id`, `ingredient_id`, `instruction_id`, `UserId`, `name`, `description`, `cuisine`) VALUES ('7', '7', '7', '1', 'Turkey Bolognese with Pasta', 'A quick weeknight pasta dish', 'Italian');

INSERT INTO `Recipes` (`id`, `ingredient_id`, `instruction_id`, `UserId`, `name`, `description`, `cuisine`) VALUES ('8', '8', '8', '1', 'Vietnamese Salad with Chicken and Vermicelli', 'A Vietnamese noodle salad with fish sauce dressing', 'Vietnamese');

INSERT INTO `Recipes` (`id`, `ingredient_id`, `instruction_id`, `UserId`, `name`, `description`, `cuisine`) VALUES ('9', '9', '9', '1', 'Cantonese Braised Beef Stew', 'Beef flank with daikon braised in Chu Hou sauce', 'Chinese');




