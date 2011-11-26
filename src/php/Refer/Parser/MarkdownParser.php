<?php

namespace Refer\Parser;

use Refer\Parser\ParserInterface;
use Markdown\Parser as MkdParser;

class MarkdownParser implements ParserInterface {

	/**
	 * @var Markdown\Parser
	 */
	private $_proxied_parser;

	public function __construct($proxied_parser = null) {
		if (is_null($proxied_parser)) {
			$proxied_parser = MkdParser::factory();
		}

		$this->_proxied_parser = $proxied_parser;
	}

	public function parse($content) {
		return $this->_proxied_parser->transform($content);
	}

}
