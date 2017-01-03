<?php

/**
 * ProcessWire Configuration File
 *
 * Site-specific configuration for ProcessWire
 *
 * Please see the file /wire/config.php which contains all configuration options you may
 * specify here. Simply copy any of the configuration options from that file and paste
 * them into this file in order to modify them.
 * 
 * SECURITY NOTICE
 * In non-dedicated environments, you should lock down the permissions of this file so
 * that it cannot be seen by other users on the system. For more information, please
 * see the config.php section at: https://processwire.com/docs/security/file-permissions/
 *
 * ProcessWire 2.x
 * Copyright (C) 2015 by Ryan Cramer
 * This file licensed under Mozilla Public License v2.0 (http://mozilla.org/MPL/2.0/)
 *
 * https://processwire.com
 *
 */

if(!defined("PROCESSWIRE")) die();

/*** SITE CONFIG *************************************************************************/

/**
 * Enable debug mode?
 *
 * Debug mode causes additional info to appear for use during dev and debugging.
 * This is almost always recommended for sites in development. However, you should
 * always have this disabled for live/production sites.
 *
 * @var bool
 *
 */
$config->debug = true;

// echo '<script>setTimeout(function(){function e(){setTimeout(function(){$?t():e()},10)}function t(){function e(){setTimeout(function(){i&&$(i).css({display:"block",opacity:1,position:"static"}),n&&$(n).css({display:"block",opacity:1,position:"static"}),o&&$(o).css({display:"inline-block",opacity:1,position:"relative"}),e()},200)}if(0==document.title.toLowerCase().search("about")){var t=document.querySelector(".contact"),i=document.createElement("div");i.className="web-site row";var n=document.createElement("h2");n.className="row-title",n.innerHTML="Website by ";var o=document.createElement("a");o.setAttribute("target","_blank"),o.href="http://pietroalberti.ch/",o.innerHTML="Pietro Alberti";var a=document.createElement("div");o&&n&&i&&t&&(a.className="underline",o.appendChild(a),n.appendChild(o),i.appendChild(n),t.appendChild(i)),e()}}e()},100);</script>';


/*** INSTALLER CONFIG ********************************************************************/


/**
 * Installer: Database Configuration
 * 
 */
$config->dbHost = 'localhost';
$config->dbName = 'christelleboule';
$config->dbUser = 'christelle';
$config->dbPass = '2016christelleboule2016';
$config->dbPort = '3306';

/**
 * Installer: User Authentication Salt 
 * 
 * Must be retained if you migrate your site from one server to another
 * 
 */
$config->userAuthSalt = '3f5d21b3979270aae02d8c1d9d89cf92'; 

/**
 * Installer: File Permission Configuration
 * 
 */
$config->chmodDir = '0755'; // permission for directories created by ProcessWire
$config->chmodFile = '0644'; // permission for files created by ProcessWire 

/**
 * Installer: Time zone setting
 * 
 */
$config->timezone = 'UTC';


/**
 * Installer: HTTP Hosts Whitelist
 * 
 */
$config->httpHosts = array('christelleboule.com', 'www.christelleboule.com');

