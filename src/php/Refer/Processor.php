<?php

namespace Refer;

use Refer\Parser\ParserFactory;
use Refer\PageStructure\NodeFactory;
use Refer\Export\DirectoryExporter;
use Refer\Theme\Theme;

class Processor {

	private $_source_directory;

	private $_destination_directory;

	public function __construct($source_directory, $destination_directory, $config = array()) {

		if (!is_dir($source_directory)) {
			throw new \UnexpectedValueException("The source directory doesn't exists");
		}

		if (!is_dir($destination_directory)) {
			throw new \UnexpectedValueException("The destination directory doesn't exists");
		}

		$this->_source_directory = realpath($source_directory);
		$this->_destination_directory = realpath($destination_directory);

		$this->setConfig($config);
	}

	public function setConfig(array $config) {
	}

	/**
	 * Process files in the source directory to produce HTML in destination directory
	 */
	public function process() {
		$root = NodeFactory::fromDirectory($this->_source_directory);
		$exporter = new DirectoryExporter($this->_destination_directory);

		$exporter->export($root);

		$theme = new Theme("base");
		$theme->install($this->_destination_directory);
	}

}
