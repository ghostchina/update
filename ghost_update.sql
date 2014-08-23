/*
 Navicat MySQL Data Transfer

 Source Server         : liux
 Source Server Version : 50619
 Source Host           : localhost
 Source Database       : ghost_update

 Target Server Version : 50619
 File Encoding         : utf-8

 Date: 08/24/2014 02:11:28 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `update_log`
-- ----------------------------
DROP TABLE IF EXISTS `update_log`;
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
  `headers` varchar(1000) DEFAULT NULL,
  `ip` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `update_log`
-- ----------------------------
BEGIN;
INSERT INTO `update_log` VALUES ('3', null, null, null, null, null, null, null, null, null, null, null, '2014-08-24 02:10:26', '{\"host\":\"127.0.0.1:3000\",\"connection\":\"keep-alive\",\"cache-control\":\"max-age=0\",\"accept\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8\",\"user-agent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36\",\"accept-encoding\":\"gzip,deflate,sdch\",\"accept-language\":\"zh-CN,zh;q=0.8\",\"cookie\":\"bdshare_firstime=1404723151745; _ga=GA1.4.1663170038.1403773444; Hm_lvt_897c5e90b15f7f050e35c66b6978bd2c=1405320939,1405473653,1406102976,1406796442; Hm_lvt_6338835ad35c6d950a554fdedb598e48=1408361551; Hm_lpvt_6338835ad35c6d950a554fdedb598e48=1408774727\",\"if-none-match\":\"\\\"-1070072566\\\"\"}', '127.0.0.1'), ('4', '0.5.0', '0.10.28', 'development', 'sqlite3', 'adaad76294f5d22e37a7faa444c16311', 'casper', '', '1', '0', '', '1.4.9', '2014-08-24 02:11:01', '{\"host\":\"127.0.0.1:3000\",\"connection\":\"keep-alive\",\"cache-control\":\"max-age=0\",\"accept\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8\",\"user-agent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36\",\"accept-encoding\":\"gzip,deflate,sdch\",\"accept-language\":\"zh-CN,zh;q=0.8\",\"cookie\":\"bdshare_firstime=1404723151745; _ga=GA1.4.1663170038.1403773444; Hm_lvt_897c5e90b15f7f050e35c66b6978bd2c=1405320939,1405473653,1406102976,1406796442; Hm_lvt_6338835ad35c6d950a554fdedb598e48=1408361551; Hm_lpvt_6338835ad35c6d950a554fdedb598e48=1408774727\",\"if-none-match\":\"\\\"-1246593932\\\"\"}', '127.0.0.1');
COMMIT;

-- ----------------------------
--  Table structure for `version`
-- ----------------------------
DROP TABLE IF EXISTS `version`;
CREATE TABLE `version` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `version` varchar(100) NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `version`
-- ----------------------------
BEGIN;
INSERT INTO `version` VALUES ('1', '0.5.0', '多用户', '2014-08-11 01:20:17'), ('2', '0.5.1', 'bug修改', '2014-08-31 01:20:17');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
