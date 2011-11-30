<?php

namespace Refer\PageStructure;

use Refer\PageStructure\Page;
use Refer\Parser\ParserFactory;

class PageFactory {

	/**
	 * Create a page from a filename
	 *
	 * @param string $filename Source file to parse and get content from
	 *
	 * @return Page
	 */
	public static function fromFilename($filename) {
		$fileinfo = new \SplFileInfo($filename);

		$extension = $fileinfo->getExtension();
		$title = $fileinfo->getBasename(".$extension");

		$parser = ParserFactory::fromFilename($filename);

		return new Page($title, $title, $parser->parse(file_get_contents($filename)));
	}
}
