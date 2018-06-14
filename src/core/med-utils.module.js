export class MEDUtils {
	static renderXWidget( settings ) {
		return XWidget( settings ).render();
	}

	static runAjaxRequest( url, data, type, dataType, contentType = "application/json", headers = {} ) {
		return $.ajax( {
			url: url,
			dataType: dataType,
			data: data,
			type: type,
			headers: headers,
			contentType: contentType
		} );
	}
}