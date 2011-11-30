<?php

namespace Refer\Theme;

use Symfony\Component\Finder\Finder as FileFinder;

class Directory {
	
	private $_directory;

	public function __construct($directory) {
		if (!is_dir($directory)) {
			throw new \InvalidArgumentException("The theme directory isn't valid ($directory)");
		}

		$this->_directory = realpath($directory);
	}

	public function install($destination) {
		$this->copy($this->_directory, $destination);
	}

	public function copy($from, $to) {
		$finder = new FileFinder();
		$iterator = $finder->files()->in($from)->ignoreDotFiles(true);

		foreach ($iterator as $file) {
			$copy_to = new \SplFileInfo($to . str_replace($from, "", $file->getRealpath()));

			if (!is_dir($copy_to->getPath())) {
				mkdir($copy_to->getPath(), 0777, true);
			}

			if (!copy($file->getRealpath(), $copy_to->getPathName())) {
				echo "Cant copy {$file->getRealpath()} to {$copy_to->getPathName()}\n";
				exit(1);
			}
		}
	}

}
