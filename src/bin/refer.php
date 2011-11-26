#!/usr/bin/php
<?php

use Refer\Processor;

if (getenv('REFER')) {
	set_include_path(get_include_path() . PATH_SEPARATOR . realpath(getenv('REFER')));
}

require_once('Zend/Loader/Autoloader.php');

$autoloader = Zend_Loader_Autoloader::getInstance();
$autoloader->registerNamespace('Zend');
$autoloader->registerNamespace('Markdown');
$autoloader->registerNamespace('Symfony');
$autoloader->registerNamespace('Refer');

try {
	$opts = new Zend_Console_Getopt(array());
	$opts->parse();
} catch (Zend_Console_Getopt_Exception $e) {
	echo $e->getUsageMessage();
	exit(1);
}
$args = $opts->getRemainingArgs();

$source_directory = array_shift($args);
$destination_directory = array_shift($args);

$processor = new Processor($source_directory, $destination_directory);
$processor->process();
