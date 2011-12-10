<?php

namespace Refer;

use Refer\Parser\ParserFactory;
use Refer\PageStructure\NodeFactory;
use Refer\Export\DirectoryExporter;
use Refer\Theme\Theme;
use Refer\Configuration;

class Processor {

	private $_source_directory;

	private $_destination_directory;

	private $_config;

	public function __construct($source_directory, $destination_directory) {

		if (!is_dir($source_directory)) {
			throw new \UnexpectedValueException("The source directory doesn't exists");
		}

		if (!is_dir($destination_directory)) {
			throw new \UnexpectedValueException("The destination directory doesn't exists");
		}

		$this->_source_directory = realpath($source_directory);
		$this->_destination_directory = realpath($destination_directory);

		$src_config = $this->_source_directory . "/config.json";
		if (!is_file($src_config)) {
			$src_config = array();
		}

		$this->setConfig(new Configuration($src_config));
	}

	public function setConfig(Configuration $config) {
		$this->_config = $config;
	}

	/**
	 * Process files in the source directory to produce HTML in destination directory
	 */
	public function process() {
		$root = NodeFactory::fromDirectory($this->_source_directory);
		$exporter = new DirectoryExporter($this->_destination_directory);

		$exporter->export($root);

		$theme = new Theme($this->_config->getTheme(), $this->_config->getThemeDirectory());
		$theme->install($this->_destination_directory);
	}

}
