<?php

namespace Refer;

class Configuration {

	private $_config = array(
		'theme' => 'base',
		'theme_directory' => '__PEAR_DATA_DIR__/refer/themes',
		'title' => 'Reference guide'
	);

	public function __construct($config) {
		if (is_string($config)) {
			$file = $config;
			if (!is_file($file)) {
				throw new InvalidArgumentException("The file provided ($file) doesn't exists");
			}

			$config = json_decode(file_get_contents($file), true);

			if (json_last_error() !== JSON_ERROR_NONE) {
				throw new InvalidArgumentException("The file provided ($file) doesn't contains valid JSON");
			}
		}

		if (!is_array($config)) {
			throw new InvalidArgumentException("The configuration provided should be a filename or an assoc array");
		}

		$this->_config = $this->_mergeConfig($this->_config, $config);
	}

	public function getThemeDirectory() {
		$theme_directory = $this->_config['theme_directory'];
		$theme_directory = str_replace('__PEAR_DATA_DIR__', $this->getPearDataDirectory(), $theme_directory);

		return $theme_directory;
	}

	public function getTheme() {
		return $this->_config['theme'];
	}

	public function getTitle() {
		return $this->_config['title'];
	}

	public function getPearDataDirectory() {
		return \PEAR_Config::singleton()->get('data_dir');
	}

	private function _mergeConfig() {
		if (func_num_args() < 2) {
			trigger_error(__FUNCTION__ .' needs two or more array arguments', E_USER_WARNING);
			return;
		}

		$arrays = func_get_args();
		$merged = array();

		while ($arrays) {
			$array = array_shift($arrays);
			if (!is_array($array)) {
				trigger_error(__FUNCTION__ .' encountered a non array argument', E_USER_WARNING);
				return;
			}

			if (!$array) {
				continue;
			}

			foreach ($array as $key => $value) {
				if (is_string($key)) {
					if (is_array($value) && array_key_exists($key, $merged) && is_array($merged[$key])) {
						$merged[$key] = call_user_func(__FUNCTION__, $merged[$key], $value);
					} else {
						$merged[$key] = $value;
					}
				} else {
					$merged[] = $value;
				}
			}
		}

		return $merged;
	}

}
