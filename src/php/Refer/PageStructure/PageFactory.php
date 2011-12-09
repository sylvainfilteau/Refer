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

		$extension = pathinfo($fileinfo->getRealpath(), PATHINFO_EXTENSION);
		$id = $fileinfo->getBasename(".$extension");
		$title = $id; // Default title

		$parser = ParserFactory::fromFilename($filename);
		$html_content = $parser->parse(file_get_contents($filename));

		$title_in_content = self::_findTitle($html_content);
		if ($title_in_content !== false) {
			$title = $title_in_content;
		}

		return new Page($id, $title, $html_content);
	}

	/**
	 * Finds the title of the page
	 *
	 * Searches in the HTML until it finds the first h1 tag. Takes the text in 
	 * the tag as title.
	 *
	 * @param string $html_content Content of the page containg a title
	 *
	 * @return mixed The title of the page of false if it can't find it.
	 */
	private static function _findTitle($html_content) {
		$dom = \DOMDocument::loadHTML($html_content);
		$node_list = $dom->getElementsByTagName('h1');

		if ($node_list->length > 0) {
			$elem = $node_list->item(0);
			return self::_getElementInnerText($elem);
		}

		return false;
	}

	private static function _getElementInnerText(\DOMElement $element) {
		$text = "";
		foreach ($element->childNodes as $child) {
			if ($child instanceof \DOMText) {
				$text .= $child->wholeText;
			} elseif ($child instanceof \DOMElement) {
				$text .= self::_getElementInnerText($child);
			}
		}

		return $text;
	}
}
