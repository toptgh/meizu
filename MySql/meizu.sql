/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : meizu

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2018-10-15 16:46:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodsinfo
-- ----------------------------
DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodsinfo
-- ----------------------------
INSERT INTO `goodsinfo` VALUES ('11111', '魅族 16th', '全网通公开版', '2798', null, '', 'images/jyh.png', '静夜黑', '6+64G', '官方标配', '', '', '', '', '', '', '', '', '', '');
INSERT INTO `goodsinfo` VALUES ('11131', '魅族 16th', '全网通公开版', '3598', null, null, 'images/jyh.png', '静夜黑', '8 +128G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11132', '魅族 16th', '全网通公开版', '3698', null, null, 'images/jyh.png', '静夜黑', '8 +128G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11122', '魅族 16th', '全网通公开版', '3198', null, null, 'images/jyh.png', '静夜黑', '6+128G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11121', '魅族 16th', '全网通公开版', '3098', null, '', 'images/jyh.png', '静夜黑', '6+128G', '官方标配', '', '', '', '', '', '', '', '', '', '');
INSERT INTO `goodsinfo` VALUES ('21111', '魅族 16th Plus', '全网通公开版', '3198', null, null, 'images/jyh.png', '静夜黑', '6 + 64G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21112', '魅族 16th Plus', '全网通公开版', '3298', null, null, 'images/jyh.png', '静夜黑', '6 + 64G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21121', '魅族 16th Plus', '全网通公开版', '3498', null, null, 'images/jyh.png', '静夜黑', '6 + 128G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21122', '魅族 16th Plus', '全网通公开版', '3598', null, null, 'images/jyh.png', '静夜黑', '6 + 128G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21131', '魅族 16th Plus', '全网通公开版', '3998', null, null, 'images/jyh.png', '静夜黑', '8 + 128G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21132', '魅族 16th Plus', '全网通公开版', '4098', null, null, 'images/jyh.png', '静夜黑', '8 + 128G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11211', '魅族 16th', '全网通公开版', '2798', null, null, 'images/ysb.png', '远山白', '6+64G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11212', '魅族 16th', '全网通公开版', '2898', null, null, 'images/ysb.png', '远山白', '6 +64G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11221', '魅族 16th', '全网通公开版', '3098', null, null, 'images/ysb.png', '远山白', '6+128G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11222', '魅族 16th', '全网通公开版', '3198', null, null, 'images/ysb.png', '远山白', '6+128G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11231', '魅族 16th', '全网通公开版', '3598', null, null, 'images/ysb.png', '远山白', '8 +128G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11232', '魅族 16th', '全网通公开版', '3698', null, null, 'images/ysb.png', '远山白', '8 +128G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21211', '魅族 16th Plus', '全网通公开版', '3198', null, null, 'images/ysb.png', '远山白', '6 + 64G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21212', '魅族 16th Plus', '全网通公开版', '3298', null, null, 'images/ysb.png', '远山白', '6 + 64G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21221', '魅族 16th Plus', '全网通公开版', '3498', null, null, 'images/ysb.png', '远山白', '6 +128G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21222', '魅族 16th Plus', '全网通公开版', '3598', null, null, 'images/ysb.png', '远山白', '6 +128G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21231', '魅族 16th Plus', '全网通公开版', '3998', null, null, 'images/ysb.png', '远山白', '8+ 128G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21232', '魅族 16th Plus', '全网通公开版', '4098', null, null, 'images/ysb.png', '远山白', '8 +128G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11311', '魅族 16th', '全网通公开版', '2798', null, null, 'images/jgl.png', '极光蓝', '6+64G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11321', '魅族 16th', '全网通公开版', '3098', null, null, 'images/jgl.png', '极光蓝', '6 +128G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11331', '魅族 16th', '全网通公开版', '3598', null, null, 'images/jgl.png', '极光蓝', '8 +128G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11312', '魅族 16th', '全网通公开版', '2898', null, null, 'images/jgl.png', '极光蓝', '6+64G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11322', '魅族 16th', '全网通公开版', '3198', null, null, 'images/jgl.png', '极光蓝', '6 +128G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11332', '魅族 16th', '全网通公开版', '3698', null, null, 'images/jgl.png', '极光蓝', '8 +128G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21311', '魅族 16th Plus', '全网通公开版', '3198', null, null, 'images/jgl.png', '极光蓝', '6+64G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21321', '魅族 16th Plus', '全网通公开版', '3498', null, null, 'images/jgl.png', '极光蓝', '6 +128G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21331', '魅族 16th Plus', '全网通公开版', '3998', null, null, 'images/jgl.png', '极光蓝', '8 +128G', '官方标配', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21312', '魅族 16th Plus', '全网通公开版', '3298', null, null, 'images/jgl.png', '极光蓝', '6+64G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21322', '魅族 16th Plus', '全网通公开版', '3598', null, null, 'images/jgl.png', '极光蓝', '6 +128G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('21332', '魅族 16th Plus', '全网通公开版', '4098', null, null, 'images/jgl.png', '极光蓝', '8 +128G', '碎屏保套餐', null, null, null, null, null, null, null, null, null, null);
INSERT INTO `goodsinfo` VALUES ('11112', '魅族 16th', '全网通公开版', '2898', null, '', 'images/jyh.png', '静夜黑', '6+64G', '碎屏保套餐', '', '', '', '', '', '', '', '', '', '');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=87 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------

-- ----------------------------
-- Table structure for user_cart
-- ----------------------------
DROP TABLE IF EXISTS `user_cart`;
CREATE TABLE `user_cart` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `goodId` int(20) NOT NULL,
  `goodcount` int(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_cart
-- ----------------------------
