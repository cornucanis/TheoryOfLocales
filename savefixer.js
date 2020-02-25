//processes save, in the form of a string, and outputs repaired save string
var successfulFixes = [];

function fixSave(save) {	
	var playerObj = JSON.parse(save);
	var inv = playerObj.items.inv.items;
	inv.forEach(i => {
		if (i.mod === "0[object Object]") {
			if (i.hasOwnProperty("enchants")) {
				var newMod = {};
				var ench = i.enchants.split(",");
				ench.forEach(e => {
					combineObjects(newMod, generateModObject(enchantsDictionary[e].mod), 1, true);
				});
				i.mod = newMod;
				successfulFixes.push(i.name);
			} else {
				console.log("Broken mod detected on " + i.name + " but no enchants detected?");
			}
		}
	});
	console.log("Successful fixes:");
	console.log(successfulFixes);
	var fixString = "Fixed Items: ";
	for(i=0;i<successfulFixes.length;i++) fixString += "\n" + successfulFixes[i];
	$("#savedata")[0].value = fixString;
	return JSON.stringify(playerObj);
}

function generateModObject(mods) {
	var returnObj = {};
	Object.keys(mods).forEach(mod => {
		var curObj = {};
		var curPath = curObj;
		modProperties = mod.split(".");
		for (i=1;i<modProperties.length;i++) {
			if (i == modProperties.length - 1) {
				curPath[modProperties[i]] = mods[mod];
			} else {
				curPath[modProperties[i]] = {};
				curPath = curPath[modProperties[i]];
			}

		}
		test = $.extend({}, curObj);
		test2 = $.extend({}, returnObj);
		combineObjects(returnObj, curObj, 1, true);
	});
	return returnObj;
}

function processTextInput() {
	var input = $("#savedata")[0].value;
	input = fixSave(input);
	$("#fixeddata")[0].value = input;
}

function copyToClipboard() {
	$("#fixeddata").select();
	document.execCommand('copy');
}