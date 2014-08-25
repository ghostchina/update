
CREATE TABLE `update_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ghost_version` varchar(45) DEFAULT NULL,
  `node_version` varchar(100) DEFAULT NULL,
  `env` varchar(100) DEFAULT NULL,
  `database_type` varchar(100) DEFAULT NULL,
  `blog_id` varchar(100) DEFAULT NULL,
  `theme` varchar(100) DEFAULT NULL,
  `apps` varchar(100) DEFAULT NULL,
  `post_count` int(11) DEFAULT NULL,
  `user_count` int(11) DEFAULT NULL,
  `blog_created_at` varchar(100) DEFAULT NULL,
  `npm_version` varchar(100) DEFAULT NULL,
  `req_date` datetime DEFAULT NULL,
  `raw_request` text DEFAULT NULL,
  `ip` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

