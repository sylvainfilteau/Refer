<?php

namespace Refer\PageStructure;

use Refer\PageStructure\Node;
use Refer\PageStructure\PageFactory;
use Symfony\Component\Finder\Finder as FileFinder;

class NodeFactory {

	public static function fromDirectory($directory, $path_from_base = "") {
		$node = new Node(basename($path_from_base));

		$finder = new FileFinder();
		$iterator = $finder->in($directory)->depth('== 0')->filter(function (\SplFileInfo $fileinfo) {
			$extension = pathinfo($fileinfo->getRealpath(), PATHINFO_EXTENSION);
			return ($fileinfo->isDir() || in_array($extension, array('md')));
		});

		foreach ($iterator as $file) {
			if ($file->isDir()) {
				$node->addChildNode(self::fromDirectory(
						$file->getRealpath(), 
						$path_from_base . "/" . basename($file->getRealpath())
				));
			} else {
				$node->addPage(PageFactory::fromFilename($file->getRealpath()));
			}
		}

		return $node;
	}
}
