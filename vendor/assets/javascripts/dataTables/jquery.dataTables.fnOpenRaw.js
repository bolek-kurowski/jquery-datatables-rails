$.fn.dataTableExt.oApi.fnOpenRaw = function ( oSettings, nTr, mHtml, sClass )
{

	/* Find settings from table node */
	/*var oSettings = this.oApi._fnSettingsFromNode( this[DataTable.ext.iApiIndex] );*/

	/* Check that the row given is in the table */
	var nTableRows = this.oApi._fnGetTrNodes( oSettings );
	if ( $.inArray(nTr, nTableRows) === -1 )
	{
		return;
	}

	/* the old open one if there is one */
	this.fnClose( nTr );

	var nNewRow = document.createElement("tr");
	/*var nNewCell = document.createElement("td"); */

	/*nNewCell.className = sClass;*/
	/*nNewCell.colSpan = _fnVisbleColumns( oSettings );*/

	if (typeof mHtml === "string")
	{
		nNewRow.innerHTML = mHtml;
	}
	else
	{
		$(nNewRow).html( mHtml );
	}

	/* If the nTr isn't on the page at the moment - then we don't insert at the moment */
	var nTrs = $('tr', oSettings.nTBody);
	if ( $.inArray(nTr, nTrs) != -1  )
	{
		$(nNewRow).insertAfter(nTr);
	}

	oSettings.aoOpenRows.push( {
		"nTr": nNewRow,
		"nParent": nTr
	} );

	return nNewRow;
}