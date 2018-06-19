const LOG = 0;
const DEBUG = 1;
const WARN = 2;
const ERROR = 3;
const OBSERVATION = 4;

class MessageType {
	
   static get LOG() {
	   return LOG;
   }
	
   static get DEBUG() {
	   return DEBUG;
   }
	
   static get WARN() {
	   return WARN;
   }
	
   static get ERROR() {
	   return ERROR;
   }
	
   static get OBSERVATION() {
	   return OBSERVATION;
   }
}