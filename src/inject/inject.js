window.addEventListener("load", checkForRestState, false);
function checkForRestState(evt)
{
    var checkTimer = setInterval(checkForJSFinished, 111);
    function checkForJSFinished() {
        if (document.querySelector(".cpc-track-label")) {
            clearInterval (checkTimer);
			addBarcode();
        }
    }
}
function addBarcode()
{
	var label = $('.cpc-track-label');
	if (label.length !== 0) {
		var tracking = label.find('span');
		if (tracking.length !== 0) {
			var number = tracking.text();
			if (number.length !== 0) {
				$('.rightcomponent').prepend('<h3 _ngcontent-c20 class="text-typography-redesigned-light chrome-gs-barcode-header">Scan with mobile app</h3><svg id="chrome-gs-barcode"></svg>');
				JsBarcode("#chrome-gs-barcode", number, { displayValue: false });
			}
		}
	}	
}