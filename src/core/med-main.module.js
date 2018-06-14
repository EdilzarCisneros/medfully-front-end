import {MEDUtils} from "./med-utils.module";

export class MEDMain {

}

if( typeof window.MEDUtils === "undefined" ) {
	window.MEDUtils = MEDUtils;
}
if( typeof window.MEDMain === "undefined" ) {
	window.MEDMain = MEDMain;
}