CREATE TABLE `type19_db`.`posts` 
(
  `post_id` INT UNSIGNED NOT NULL AUTO_INCREMENT , 
  `title` VARCHAR(255) NOT NULL , 
  `author` VARCHAR(255) NOT NULL , 
  `date` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP , 
  `body` TEXT NOT NULL , 
  PRIMARY KEY (`post_id`)) ENGINE = InnoDB;