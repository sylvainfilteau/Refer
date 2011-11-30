<?php

namespace Refer\Export;

use Refer\PageStructure\Node;

class DirectoryExporter {
	
	private $_destination_directory;
	
	public function __construct($destination_directory) {
		$this->_destination_directory = $destination_directory;
	}

	public function export(Node $node) {
		// Write pages to disk
		$this->_writeToDisk($node, $this->_destination_directory . "/pages");
		
		// ... then create a dictionnary of pages in JSON
		file_put_contents(
			"{$this->_destination_directory}/pages.json", 
			json_encode($node->toArray())
		);
	}

	private function _writeToDisk(Node $node, $directory) {
		$to_dir = $directory . "/" . $node->getName();
		$this->_createDirectory($to_dir);

		foreach ($node->getChildNodes() as $child_node) {
			$this->_writeToDisk($child_node, $to_dir);
		}

		foreach($node->getPages() as $page) {
			file_put_contents("$to_dir/{$page->getId()}.html", $page->getContent());
		}
	}

	private function _createDirectory($directory) {
		if (file_exists($directory)) {
			if (!is_dir($directory)) {
				throw new InvalidArgumentException("$directory exists but is not a directory");
			}
		} else {
			mkdir($directory);
		}
	}
}
