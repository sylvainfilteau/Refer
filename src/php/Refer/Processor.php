<?php

namespace Refer;

use Refer\Parser\ParserFactory;
use Symfony\Component\Finder\Finder as FileFinder;

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

	public function process() {
		$finder = new FileFinder();
		$iterator = $finder->files()->in($this->_source_directory)->name('*.md');

		foreach($iterator as $file) {
			$parser = ParserFactory::fromFilename($file->getRealpath());
			$html = $parser->parse(file_get_contents($file->getRealpath()));
			
			$file_path = $file->getPathInfo()->getPathname();
			$relative_path = $this->getRelativePathFromBaseDirectory($file_path, $this->_source_directory);
			
			$this->createDirectoryIfNotExists($this->_destination_directory . '/' . $relative_path);

			$extension = $file->getExtension();
			$destination_file = $file->getBasename(".$extension") . ".html";

			file_put_contents($this->_destination_directory . '/' . $relative_path . '/' . $destination_file, $html);
		}
	}

	public function createDirectoryIfNotExists($directory) {
		if (!is_dir($directory)) {
			mkdir($directory, 0777, true);
		}
	}

	public function getRelativePathFromBaseDirectory($directory, $base) {
		if (!substr($directory, 0, strlen($base)) == $base) {
			throw new UnexpectedValueException('Base directory provided isn\'t the base of the directory parameter');
		}

		$relative = substr($directory, strlen($base));
		
		if (strlen($relative) > 0 && $relative[0] == "/") {
			$relative = substr($relative, 1);
		}

		return $relative;

	}

}
