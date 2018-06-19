/*
    thomasjm - This stores constants.
*/

//Key Server
const KEY_IDENTIFIER_SIZE = 4;

//Protects
const SYMMETRIC_KEY_SIZE = 128;
const RANDOM_PARANOIA = 0;
const WORD_SIZE = 32;
const BCRYPT_SALT_ROUNDS = 10;

//Observations
const PROTECTED_EMPTY_VALUE = "SBO-EMPTY";
const UPPERCASE_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_SET = "abcdefghijklmnopqrstuvwxyz";
const DIGIT_SET = "0123456789";
const SPECIAL_SET = "!@#$%^&*()_-=+`~[]{}\\|;:\'\"<>,.?/";
const PROTECTED_MAX_LENGTH = 33;
const SALT_HASH_SALT = "$2a$10$/pzpvHJ.ulipi0yNvLoUFu";

//Observation cache
const MAX_CACHE_SIZE = 1;
const MAX_SEND_SIZE = 8192000;

const BROWSER_IDENTIFIER_SIZE = 8;
const SALT_SIZE = 128;
const SENDS_PER_PROPERTIES = 100;

const SAFE_BROWSING_CACHE_SIZE = 10000;

class Constants {

	static get SAFE_BROWSING_CACHE_SIZE() {
		return SAFE_BROWSING_CACHE_SIZE;
	}
	
	static get KEY_IDENTIFIER_SIZE() {
		return KEY_IDENTIFIER_SIZE;
	}

	static get SYMMETRIC_KEY_SIZE() {
		return SYMMETRIC_KEY_SIZE;
	}

	static get RANDOM_PARANOIA() {
		return RANDOM_PARANOIA;
	}

	static get WORD_SIZE() {
		return WORD_SIZE;
	}

	static get BCRYPT_SALT_ROUNDS() {
		return BCRYPT_SALT_ROUNDS;
	}

	static get PROTECTED_EMPTY_VALUE() {
		return PROTECTED_EMPTY_VALUE;
	}

	static get UPPERCASE_SET() {
		return UPPERCASE_SET;
	}

	static get LOWERCASE_SET() {
		return LOWERCASE_SET;
	}

	static get DIGIT_SET() {
		return DIGIT_SET;
	}

	static get SPECIAL_SET() {
		return SPECIAL_SET;
	}

	static get PROTECTED_MAX_LENGTH() {
		return PROTECTED_MAX_LENGTH;
	}

	static get SALT_HASH_SALT() {
		return SALT_HASH_SALT;
	}

	static get MAX_CACHE_SIZE() {
		return MAX_CACHE_SIZE;
	}

	static get MAX_SEND_SIZE() {
		return MAX_SEND_SIZE;
	}

	static get BROWSER_IDENTIFIER_SIZE() {
		return BROWSER_IDENTIFIER_SIZE;
	}

	static get SALT_SIZE() {
		return SALT_SIZE;
	}

	static get SENDS_PER_PROPERTIES() {
		return SENDS_PER_PROPERTIES;
	}
	

}