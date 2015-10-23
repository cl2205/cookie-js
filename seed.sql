
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







