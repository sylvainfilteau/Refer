<?php

namespace Refer\PageStructure;

use Refer\PageStructure\Page;

class Node {

	private $_name;

	private $_child_nodes = array();

	private $_pages = array();

	public function __construct($name) {
		$this->_name = $name;
	}

	public function addPage(Page $page) {
		$this->_pages[] = $page;
	}

	public function addChildNode(Node $node) {
		$this->_child_nodes[] = $node;
	}

	public function getName() {
		return $this->_name;
	}

	public function getChildNodes() {
		return $this->_child_nodes;
	}

	public function getPages() {
		return $this->_pages;
	}

	public function toArray() {
		return array(
			'name' => $this->getName(),
			'child_nodes' => array_map(
				function($node) {
					return $node->toArray();
				},
				$this->_child_nodes
			),
			'pages' => array_map(
				function($page) {
					return $page->toArray();
				},
				$this->_pages
			)
		);
	}

}
