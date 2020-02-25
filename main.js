var lootCategories = ["Resources", "Stats", "Stressors", "Max Increase", "Exp Gain", "Other"];
var dataCategories = ["locales", "encounters", "resources", "skills", "stats", "stressors", "enchants"];
var localeReports = {};
var resourceReports = {};

generateDictionaries();


function nameProperties(obj) {
	var newObj = {};
	Object.keys(obj).forEach((i) => {
		obj[obj[i].id] = obj[i];
		delete obj[i];
		//newObj[obj[i].id] = obj[i];
		//console.log("iteration " + i + " report.. Obj:");
		//console.log(obj);
		//console.log("new obj: ");
		//console.log(newObj);
	});
}


// make dictionaries to look up references by name. example usage: localesDictionary["rithel"].level 
function generateDictionaries() {
	
	dataCategories.forEach((categoryName) => {
		var thisDict = window[categoryName + "Dictionary"] = {};
		window[categoryName].forEach((itemRef) => {
			thisDict[itemRef.id] = itemRef;
		});
		
	});
	
}

function localeReport(locale) {
	var locRef = localesDictionary[locale];
	var report = {};
	//report.name = 
	
}

//process loot for a single locale into ordered object
function avgLootReport(id) {
	var locale = localesDictionary[id];
	var avg = avgEncounterTime(locale.encs);
	var fullTime = avg * (locale.length || 100);
	var loopTime = avg * locale.encs.length;
	var fullLootPool = {};
	var loopLootPool = {};
	locale.result && combineObjects(fullLootPool, locale.result);
	locale.loot && combineObjects(fullLootPool, locale.loot);
	locale.encs.forEach(function(enc) {
		if (!encountersDictionary[enc]) return;
		var encRef = encountersDictionary[enc];
		encRef.effect && combineObjects(loopLootPool, encRef.effect, (encRef.level * 5 || 5));
		encRef.result && combineObjects(loopLootPool, encRef.result);
		if (encRef.loot) {
			if (typeof(encRef.loot) == "string") {
				var newLoot = {};
				newLoot[encRef.loot] = 1;
				combineObjects(loopLootPool, newLoot);
			} else {
				combineObjects(loopLootPool, encRef.loot);
			}
		}
		//console.log("after " + enc + " the loot pool looks like:");
		//console.log($.extend({},loopLootPool));
	});
	divideChildren(loopLootPool, loopTime);
	divideChildren(fullLootPool, fullTime);
	combineObjects(loopLootPool, fullLootPool);
	prettyNames(loopLootPool);
	return loopLootPool;
}

// return loot report for all available locales
function completeLootReport() {
	var report = {};
	locales.forEach(function(locale) {
		//console.log("Starting report for " + locale.id);
		report[titleCase(locale.name || locale.id)] = avgLootReport(locale.id);
	});
	return report;
}

// determine length of average encounter based on encounter pool
function avgEncounterTime(encs) {
	var totalTime = 0;
	encs.forEach(enc => {
		if (encountersDictionary[enc]) totalTime += encountersDictionary[enc].level * 5 || 5;
	});
	return totalTime / encs.length;
}


// remove single time rewards from the loot pool. currently covers titles and bools
function pruneSingles(lootObject) {
	var returnLoot = {};
	Object.keys(lootObject).forEach(function(loot) {
		if (loot != "title" && typeof(lootObject[loot]) != "boolean") {
			returnLoot[loot] = cleanFloat(lootObject[loot].valueOf());
		}
	});
	return returnLoot;
}

// parse the string provided for loot amount and output a clean float
function cleanFloat(input) {
	if (typeof input == "number") {
			return input;
	}
	if (typeof input == "string") {
		if (input.slice(-1) == "%") {
			return 0.01 * input.slice(0, -1);
		}
		if (input.indexOf("~") != -1) {
			return (Number(input.split("~")[0]) + Number(input.split("~")[1])) / 2;
		}
	}
	
	console.log("No case covered for cleanFloat() when provided with the " + typeof input + " known as " + input);
	return 0;
}


// deep copy one object onto the other, while adding together identical properties
function combineObjects(base, newObj, multi) {
	multi = multi || 1;
	var objCopy = pruneSingles(newObj);
	Object.keys(objCopy).forEach(function(item) {
		objCopy[item] *= multi;
		if (base.hasOwnProperty(item)) {
			objCopy[item] += base[item];
		}
	});
	$.extend(base, objCopy);
}

function addProperty() {
	var assignValue = arguments[arguments.length - 1];
	
}

function divideChildren(objParent, divisor) {
	Object.keys(objParent).forEach(i => objParent[i] /= divisor);
}


// makes the names of the loot a bit more readable
function prettyNames(obj) {
	lootCategories.forEach(function(category) {
		obj[category] = {};
	});
	Object.keys(obj).forEach(function(res) {
		if (lootCategories.indexOf(res) > -1) {
			return;
		}
		var newName = res;
		var newCategory = "Other";
		if (res.indexOf("exp") > -1) {
			//exp gain
			if (res.split(".")[0] == "player") {
				newName = "Player";
			} else {
				var skillRef = skillsDictionary[res.split(".")[0]];
				newName = (skillRef.name || skillRef.id);
				newCategory = "Exp Gain";
			}
			newName += " Exp";
		} else if (res.indexOf("max") > -1) {
			//max increase
			var itemName = res.split(".")[0];
			var itemRef = skillsDictionary[itemName] || resourcesDictionary[itemName];
			newName = "Max " + (itemRef.name || itemRef.id);
			newCategory = "Max Increase";
		} else {
			if (resourcesDictionary[res]) {
				newCategory = "Resources";
				if (resourcesDictionary[res].hasOwnProperty("name")) {
					newName = resourcesDictionary[res].name;
				} 
			} else if (statsDictionary[res]) {
				newCategory = "Stats";
				if (statsDictionary[res].hasOwnProperty("name")) {
					newName = statsDictionary[res].name;
				} 
			} else if (stressorsDictionary[res]) {
				newCategory = "Stressors";
				if (stressorsDictionary[res].hasOwnProperty("name")) {
					newName = stressorsDictionary[res].name;
				} 
			} else {
				//no case found
				//console.log("no pretty name category found for " + res);
				//console.trace();
			}
		}
		newName = titleCase(newName);
		obj[newCategory][newName] = obj[res];
		delete obj[res];
		
	});
}

function titleCase(input) {
		var words = input.split(" ");
		for (i=0;i<words.length;i++) {
			words[i] = words[i][0].toUpperCase() + words[i].substring(1);
		}
		return words.join(" ");
}

// exp diff functions, everything below here currently incomplete

function determineExp(name, length, level, maxDiff){
	var returnText = "" + name + " Report: \n\n";
	for	(i = 0; i <= maxDiff; i++){
		returnText += "expected xp for diff of " + i + " is " + (1.25 * level * (15 + length) / (1 + i)) + "\n";
	}
	return returnText;
}

function calcSingle(length, level, diff) {
	return 1.25 * level * (15 + length) / (1 + diff)
}

/*
function determineExp(avgLength, minLevel, maxLevel, locale){
	var returnText = "" + name + " Report: \n\n";
	for	(i = minLevel; i <= maxLevel; i++){
		returnText += "expected xp at level " + i + " is " + (1.25 * level * (15 + length) / (1 + i)) + "\n";
	}
	return returnText;
}
*/

/*

Locale/Dungeon completion:
T = 1 + Player_Level - Locale_Level; Minimum 1

1.25 * Locale_Level * (15 + Locale_Length) / (1 + Player_Level - Locale_Level)

        var t = Math.max(1 + this.player.level - this.locale.level, 1);
        (this.player.exp +=
          (this.locale.level * (15 + this.locale.length)) / (0.8 * t)),
		  
		  
Monster killed:
(1.5 * Monster_Level) - Player_Level; Minimum 1.

(this.player.exp += Math.max(1.5 * t.level - this.player.level, 1))

Encounter done:

0.75 + Encounter_Level - Player_Level; Minimum 0.75

this.player.exp += 0.75 + Math.max(t.level - this.player.level, 0)
*/


// Create more detailed object about each locale
// Create object to represent sources for each obtainable resource
// Alphabetical sorting
// Implement exp analysis


// Front end...