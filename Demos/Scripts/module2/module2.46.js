//demo#46
'use strict';
function processInvoice(segments, ...values){
	console.log(segments);
	console.log(values);
}
let invoiceNumber = '1350';
let amount = '2000';
processInvoice `Invoice : ${invoiceNumber} for ${amount}`;
