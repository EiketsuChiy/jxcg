
function highLight(id) {
	var obj = document.getElementById(id);
	obj.style.backgroundColor = '#A4A4A4';
}
var _pre_obj;
var _current_active_obj;

function cancelHL(id) {
	var obj = document.getElementById(id);
	if(obj != _current_active_obj) {
		obj.style.backgroundColor = '#01a9db';
		obj.style.color = 'white';
	}
}

function active(id) {
	if(_current_active_obj != null) {
		_current_active_obj.style.backgroundColor = '#01a9db';
		_current_active_obj.style.color = 'white';
	}
	var _parentObj = document.getElementById(id);
	_current_active_obj = _parentObj;
	var childArr=_parentObj.children || _parentObj.childNodes;
	var _active_obj = document.getElementById(childArr[1].id);
	if(_pre_obj != null) {
		_pre_obj.style.display = 'none';
	}
	_pre_obj = _active_obj;
	_active_obj.style.display = 'block';
}

function Check_AdobeReader() {
    var displayString;
    var acrobat = new Object();
    acrobat.installed = false;
    acrobat.version = "0.0";

    if (navigator.plugins && navigator.plugins.length) {
        for (x = 0; x < navigator.plugins.length; x++) {
            if (navigator.plugins[x].description.indexOf("Adobe Acrobat") != -1) {
                acrobat.version = parseFloat(navigator.plugins[x].description.split("Version ")[1]);
                if (acrobat.version.toString().length == 1) acrobat.version += ".0";
                acrobat.installed = true;
                break;
            } else if (navigator.plugins[x].description.indexOf("Adobe PDF Plug-In") != -1) {
                acrobat.installed = true;
                acrobat.version = "8+";
            }
        }
    } else if (window.ActiveXObject) {
        for (x = 2; x < 10; x++) {
            try {
                oAcro = eval_r("new ActiveXObject('PDF.PdfCtrl." + x + "');");
                if (oAcro) {
                    acrobat.installed = true;
                    acrobat.version = x + ".0";
                }
            }
            catch (e) {
            }
        }

        try {
            oAcro4 = new ActiveXObject("PDF.PdfCtrl.1");
            if (oAcro4) {
                acrobat.installed = true;
                acrobat.version = '4.0';
            }
        }
        catch (e) {
        }

        try {
            oAcro7 = new ActiveXObject('AcroPDF.PDF.1');
            if (oAcro7) {
                acrobat.installed = true;
                acrobat.version = '7.0';
            }
        }
        catch (e) {
        }
    }

    return acrobat;
}