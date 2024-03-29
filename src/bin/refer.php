#!/usr/bin/php
<?php
error_reporting(E_ALL & ~E_DEPRECATED);

use Refer\Processor;

if (getenv('REFER')) {
	set_include_path(realpath(getenv('REFER')) . PATH_SEPARATOR . get_include_path());
}

require_once('Zend/Loader/Autoloader.php');

$autoloader = Zend_Loader_Autoloader::getInstance();
$autoloader->registerNamespace('Zend');
$autoloader->registerNamespace('Markdown');
$autoloader->registerNamespace('Symfony');
$autoloader->registerNamespace('Refer');
$autoloader->registerNamespace('PEAR');

if (getenv('REFER')) {
	PEAR_Config::singleton()->set('data_dir', realpath(__DIR__ . "/../data"));
}

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
