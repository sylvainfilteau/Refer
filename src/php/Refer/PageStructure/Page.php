<?php

namespace Refer\PageStructure;

class Page {

	private $_id;

	private $_title;

	private $_content;

	public function __construct($id, $title, $content) {
		$this->_id = $id;
		$this->_title = $title;
		$this->_content = $content;
	}

	public function getId() {
		return $this->_id;
	}

	public function getTitle() {
		return $this->_title;
	}

	public function getContent() {
		return $this->_content;
	}

	public function toArray() {
		return array(
			'id' => $this->getId(),
			'title' => $this->getTitle()
		);
	}

}
