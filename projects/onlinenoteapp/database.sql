CREATE TABLE `users` (
 `user_id` int(11) NOT NULL AUTO_INCREMENT,
 `username` varchar(30) DEFAULT NULL,
 `email` varchar(50) DEFAULT NULL,
 `password` varchar(64) DEFAULT NULL,
 `activation` char(32) DEFAULT NULL,
 `activation2` char(32) DEFAULT NULL,
 PRIMARY KEY (`user_id`)
);

CREATE TABLE  `forgotpassword`(
`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
`user_id` int(11) not null,
`rkey` char(32) not null,
`time` int(11) not null,
`status` varchar(7) not null
);


CREATE TABLE `rememberme` (
`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
`authentificator1` char(20) ,
`f2authentificator2` char(64) ,
`user_id` int(11) ,
`expires` datetime 
);


CREATE TABLE `notes`(
 `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,   
`user_id` INT(4), 
`note` text,
`time` CHAR(10)
);
