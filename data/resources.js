var resources = [

	{
		"id":"gold",
		"desc":"Gold Coins",
		"locked":false,
		"max":5
	},
	{
		"id":"research",
		"desc":"Research into the Arcane",
		"max":10
	},
	{
		"id":"arcana",
		"school":"arcane",
		"desc":"Profound mystical knowledge",
		"max":0
	},
	{

		"id":"bones",
		"desc":"human bones.",
		"max":10

	},
	{

		"id":"skulls",
		"alias":"skulls",
		"desc":"human skull.",
		"max":5

	},
	{

		"id":"bonedust",
		"name":"bone dust",
		"desc":"The dust of human bones.",
		"max":10
	},
	{
		"id":"scrolls",
		"desc":"Scroll of arcane lore",
		"max":10,
		"mod":{
			"research.rate":0.005,
			"research.max":1
		}
	},
	{

		"id":"starcharts",
		"desc":"A map of the stars",
		"max":10,
		"mod":{
			"research.max":1,
			"astronomy.max":0.1,
			"astronomy.rate":0.02,
			"planeslore.max":0.05,
			"planeslore.rate":0.02
		}

	},
	{

		"id":"runestones",
		"name":"rune stones",
		"desc":"Runes carved on pieces of stone.",
		"tags":"t_runes",
		"max":10,
		"mod":{
			"research.max":"1%",
			"runelore.rate":0.1,
			"runelore.max":0.03
		}, "flavor":""

	},
	{

		"id":"firerune",
		"name":"flame runes",
		"tags":"t_runes",
		"desc":"Rune etched with lines of fire",
		"max":10,
		"mod":{
			"research.max":10
		}, "flavor":""

	},
	{

		"id":"waterrune",
		"name":"water runes",
		"tags":"t_runes",
		"desc":"Rune lined in flowing water",
		"max":10,
		"mod":{
			"research.max":10
		}, "flavor":""

	},
	{

		"id":"spiritrune",
		"name":"spirit runes",
		"tags":"t_runes",
		"desc":"A Runestone carved in bone; it seems to whisper.",
		"max":10,
		"mod":{
			"research.max":10
		}, "flavor":""

	},
	{

		"id":"airrune",
		"name":"air runes",
		"tags":"t_runes",
		"desc":"rune etched with solid air",
		"max":10,
		"mod":{
			"research.max":10
		}, "flavor":""

	},
	{

		"id":"earthrune",
		"name":"earth runes",
		"tags":"t_runes",
		"desc":"Rune ingrained with moonstone",
		"max":10,
		"mod":{
			"research.max":10
		}, "flavor":""

	},
	{

		"id":"timerune",
		"name":"time runes",
		"desc":"Time flows along the grooves of the rune",
		"mod":{
			"tempus.rate":0.001,
			"bf.rate":0.01
		},
		"max":3,
		"flavor":"it's not easy to look at."
	},
	{
		"id":"bodies",
		"desc":"bodies for necromatic magic",
		"max":1,
		"mod":{
			"dissection.rate":0.01,
			"embalming.rate":0.01
		}
	},
	{
		"id":"souls",
		"desc":"imprisoned souls of living creatures.",
		"max":1,
		"mod":{
			"shadow.rate":0.001,
			"spirit.rate":0.001,
			"spiritlore.rate":0.01
		},
		"flavor":"is it wrong?"
	},
	{
		"id":"schematic",
		"name":"schematics",
		"desc":" Schematic of Thurn the Artificer",
		"max":3,
		"mod":{
			"crafting.max":0.1,
			"crafting.rate":"5%"
		}
	},
	{
		"id":"codices",
		"name":"Codices",
		"desc":"Codex of arcane lore",
		"max":10,
		"mod":{
			"research.rate":0.07,
			"research.max":5,
			"lore.rate":0.1
		}

	},
	{
		"id":"tomes",
		"name":"Tomes",
		"desc":"A hefty tome of knowledge.",
		"max":5,
		"mod":{
			"research.max":5,
			"arcana.rate":0.001,
			"lore.rate":0.1,
			"lore.max":0.1
		}

	},
	{
		"id":"gems",
		"desc":"Various fine gemstones.",
		"max":5
	},
	{

		"id":"managem",
		"tags":"magicgems",
		"name":"arcane gem",
		"desc":"Gem infused with arcane energy.",
		"max":2
	},
	{
		"id":"firegem",
		"tags":"magicgems",
		"name":"fire gem",
		"desc":"Gem imbued with the essence of fire.",
		"max":2
	},
	{
		"id":"watergem",
		"tags":"magicgems",
		"name":"water gem",
		"desc":"Gem imbued with the essence of water.",
		"max":2
	},
	{
		"id":"naturegem",
		"tags":"magicgems",
		"name":"nature gem",
		"desc":"physical essence of life.",
		"max":2,
		"flavor":"the force from the beginning"
	},
	{
		"id":"earthgem",
		"tags":"magicgems",
		"name":"earth gem",
		"desc":"Gem imbued with the essence of earth.",
		"max":2
	},
	{
		"id":"airgem",
		"tags":"magicgems",
		"name":"air gem",
		"desc":"Gem imbued with the essence of air.",
		"max":2
	},
	{
		"id":"shadowgem",
		"tags":"magicgems",
		"name":"shadow gem",
		"desc":"Gem imbued with the essence of darkness.",
		"max":2
	},
	{
		"id":"lightgem",
		"tags":"magicgems",
		"name":"light gem",
		"desc":"Gem imbued with the essence of light.",
		"max":2
	},
	{
		"id":"spiritgem",
		"tags":"magicgems",
		"name":"spirit gem",
		"desc":"Gem imbued with raw spirit.",
		"max":2
	},
	{
		"id":"bloodgem",
		"tags":"magicgems",
		"name":"blood gem",
		"desc":"a little magic and a lot of blood",
		"max":2,
		"mod":{
			"hp.max":1
		}
	},
	{

		"id":"timegem",
		"tags":"magicgems",
		"desc":"crafted from gems which do not yet exist.",
		"mod":{
			"gems.rate":-0.005,
			"tempus.rate":0.01
		},
		"max":3
	},
	{

		"id":"voidgem",
		"tags":"magicgems",
		"desc":"the space where a gem once was.",
		"mod":{
			"player.resist.void":1
		},
		"max":3
	},
	{
		"id":"ichor",
		"tags":"reagent",
		"desc":"The blood of gods.",
		"flavor":"the secret courtesy that courses like ichor",
		"max":5
	},
	{

		"id":"sindel",
		"name":"star shard",
		"desc":"A glowing cinder of the stars.",
		"flavor":"the pillars broke; the stars fell screaming from the sky",
		"max":3,
		"mod":{
			"light.rate":0.1,
			"player.resist.shadow":1
		}

	},
	{
		"id":"dreams",
		"desc":"We are such stuff as dreams are made of. And our little life is rounded with a sleep.",
		"max":3,
		"mod":{
			"weary.rate":-0.1,
			"arcana.rate":"1%"
		},"flavor":"in your wildest..."
	},
	{

		"id":"herbs",
		"desc":"Special plants for potions and alchemy.",
		"max":10
	},
	{
		"id":"sulphur",
		"desc":"principle of fire.",
		"max":10
	},
	{
		"id":"mercury",
		"desc":"principle of metal.",
		"max":10
	},
	{
		"id":"space",
		"name":"floor space",
		"desc":"Space Available",
		"modCost":true,
		"hide":true,
		"reverse":true,
		"max":0

	},
	{
		"id":"mana",
		"tags":"manas,prismatic",
		"desc":"raw magical energy",
		"unit":false,
		"require":"lore",
		"name":"mana",
		"max":5
	},
	{
		"id":"fire",
		"require":"firelore",
		"unit":false,
		"tags":"manas,element,prismatic",
		"desc":"Fire Mana",
		"max":0
	},
	{
		"id":"air",
		"require":"airlore",
		"unit":false,
		"tags":"manas,element,prismatic",
		"desc":"Air Mana",
		"max":0
	},
	{
		"id":"earth",
		"unit":false,
		"tags":"manas,element,prismatic",
		"require":"earthlore",
		"desc":"Earth Mana",
		"max":0
	},
	{
		"id":"water",
		"unit":false,
		"tags":"manas,element,prismatic",
		"desc":"Water Mana",
		"require":"waterlore",
		"max":0
	},
	{
		"id":"nature",
		"tags":"manas,prismatic",
		"unit":false,
		"require":"naturelore",
		"desc":"Nature Mana",
		"max":0
	},
	{
		"id":"shadow",
		"name":"shadow",
		"tags":"manas,prismatic",
		"unit":false,
		"require":"shadowlore",
		"desc":"Shadow mana",
		"max":0
	},
	{
		"id":"light",
		"tags":"manas,prismatic",
		"unit":false,
		"require":"lightlore",
		"desc":"Light mana",
		"max":0
	},
	{

		"id":"spirit",
		"tags":"manas,prismatic",
		"unit":false,
		"desc":"Spirit mana",
		"require":"spiritlore",
		"max":0
	},
	{
		"id":"tempus",
		"require":"chronomancy",
		"tags":"manas",
		"unit":false,
		"desc":"Time incarnate. If only...",
		"max":0
	},
	{
		"id":"chaos",
		"tags":"manas",
		"unit":false,
		"desc":"Chaos incarnate. No current use.",
		"max":0
	},
	{
		"id":"void",
		"tags":"manas",
		"unit":false,
		"desc":"nothingness. No current use.",
		"flavor":"",
		"max":0
	}

]