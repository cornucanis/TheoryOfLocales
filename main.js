
var localeDictionary = {};
var encounterDictionary = {};
var resourceDictionary = {};
var skillDictionary = {};
var statDictionary = {};
var stressorDictionary = {};
generateDictionaries();

var lootCategories = ["Resources", "Stats", "Stressors", "Max Increase", "Exp Gain", "Other"];

//temp assignments for debugging
var testRep = avgLootReport("eryleyot");

function generateDictionaries() {
	locales.forEach(function(item, index) {
		localeDictionary[item.id] = index;
	});
	encounters.forEach(function(item, index) {
		encounterDictionary[item.id] = index;
	});
	resources.forEach(function(item, index) {
		resourceDictionary[item.id] = index;
	});
	skills.forEach(function(item, index) {
		skillDictionary[item.id] = index;
	});
	stats.forEach(function(item, index) {
		statDictionary[item.id] = index;
	});
	stressors.forEach(function(item, index) {
		stressorDictionary[item.id] = index;
	});
}

//5 secionts to analyze: locale result, locale loot, encounter effect, encounter result, encounter loot
function avgLootReport(id) {
	var locale = locales[localeDictionary[id]];
	var avg = avgEncounterTime(locale.encs);
	var fullTime = avg * locale.length;
	var loopTime = avg * locale.encs.length;
	var fullLootPool = {};
	var loopLootPool = {};
	locale.result && combineObjects(fullLootPool, locale.result);
	locale.loot && combineObjects(fullLootPool, locale.loot);
	locale.encs.forEach(function(enc) {
		var encRef = encounters[encounterDictionary[enc]];
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
		//console.log(loopLootPool);
	});
	divideChildren(loopLootPool, loopTime);
	divideChildren(fullLootPool, fullTime);
	combineObjects(loopLootPool, fullLootPool);
	prettyNames(loopLootPool);
	//console.log(loopLootPool);
	return loopLootPool;
}

function completeLootReport() {
	var report = {};
	locales.forEach(function(locale) {
		console.log("Starting report for " + locale.id);
		report[locale.id] = avgLootReport(locale.id);
	});
	console.log(report);
}


function avgEncounterTime(encs) {
	var totalTime = 0;
	encs.forEach(function(enc) {
		totalTime += encounters[encounterDictionary[enc]].level * 5 || 5;
	});
	return totalTime / encs.length;
}

function pruneSingles(lootObject) {
	var returnLoot = {};
	Object.keys(lootObject).forEach(function(loot) {
		if (loot != "title" && typeof(lootObject[loot]) != "boolean") {
			returnLoot[loot] = cleanFloat(lootObject[loot].valueOf());
		}
	});
	return returnLoot;
}

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

function divideChildren(objParent, divisor) {
	Object.keys(objParent).forEach(function(item) {
		objParent[item] /= divisor;
	});
}

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
			var skillRef = skills[skillDictionary[res.split(".")[0]]];
			newName = skillRef.name || skillRef.id;
			newName += " Exp";
			newCategory = "Exp Gain";
		} else if (res.indexOf("max") > -1) {
			//max increase
			var itemName = res.split(".")[0];
			var itemRef = skills[skillDictionary[itemName]] || resources[resourceDictionary[itemName]];
			newName = "Max " + itemRef.name || itemRef.id;
			newCategory = "Max Increase";
		} else {
			if (resources[resourceDictionary[res]]) {
				newCategory = "Resources";
				if (resources[resourceDictionary[res]].hasOwnProperty("name")) {
					newName = resources[resourceDictionary[res]].name;
				} 
			} else if (stats[statDictionary[res]]) {
				newCategory = "Stats";
				if (stats[statDictionary[res]].hasOwnProperty("name")) {
					newName = stats[statDictionary[res]].name;
				} 
			} else if (stressors[stressorDictionary[res]]) {
				newCategory = "Stressors";
				if (stressors[stressorDictionary[res]].hasOwnProperty("name")) {
					newName = stressors[stressorDictionary[res]].name;
				} 
			} else {
				//no case found
				console.log("no pretty name category found for " + res);
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