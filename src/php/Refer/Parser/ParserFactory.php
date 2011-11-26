<?php

namespace Refer\Parser;

use Refer\Parser\MarkdownParser;

class ParserFactory {

	private static $_parsers_by_extension = array(
		'md' => 'Markdown'
	);

	public static function fromFilename($filename) {
		$extension = pathinfo($filename, PATHINFO_EXTENSION);

		if (!isset(self::$_parsers_by_extension[$extension])) {
			throw new \RangeException('There is no parser matching the file extension provided (extension=' . $extension . ')');
		}

		$class_name = 'Refer\\Parser\\' . self::$_parsers_by_extension[$extension] . 'Parser';

		return new $class_name();
	}
}
