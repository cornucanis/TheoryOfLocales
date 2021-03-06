var enchants = 

[

	{
		"id":"en_armor1",
		"name":"sturdy armor",
		"verb":"infusing armor",
		"only":"armor",
		"desc":"infuse an item with magical protection.",
		"require":"g.enchanting>=3",
		"level":1,
		"buy":{
			"arcana":1,
			"research":100
		},
		"length":30,
		"cost":{
			"managem":3,
			"mana":5
		},
		"mod":{
			"armor":1
		}
	},
	{
		"id":"en_luck1",
		"name":"luck",
		"adj":"of luck",
		"only":"ring",
		"desc":"infuse a ring with a mana gem.",
		"require":"g.enchanting>=1",
		"level":1,
		"buy":{
			"arcana":1,
			"research":100
		},
		"length":30,
		"cost":{
			"airgem":1,
			"mana":5
		},
		"mod":{
			"mod.luck":1
		},"flavor":"let's keep this party polite"
	},
	{
		"id":"en_mana1",
		"name":"mana",
		"verb":"enchanting",
		"adj":"of mana",
		"only":"ring",
		"desc":"infuse a ring with a mana gem.",
		"require":"g.enchanting>=1",
		"level":1,
		"buy":{
			"arcana":1,
			"research":100
		},
		"length":30,
		"cost":{
			"managem":1,
			"mana":5
		},
		"mod":{
			"mod.mana.max":1
		}
	},
	{
		"id":"en_energy1",
		"name":"energy",
		"verb":"enchanting",
		"adj":"of energy",
		"only":"ring",
		"desc":"link a ring with a mana source.",
		"require":"g.enchanting>=1",
		"level":1,
		"buy":{
			"arcana":1,
			"research":100
		},
		"length":30,
		"cost":{
			"managem":1,
			"mana":5
		},
		"mod":{
			"mod.mana.rate":0.01
		}
	},
	{
		"id":"en_hp1",
		"name":"life pool",
		"verb":"enchanting",
		"adj":"of life",
		"only":"neck",
		"desc":"infuse an amulet with lifeforce.",
		"require":"g.enchanting>=2",
		"level":1,
		"buy":{
			"arcana":1,
			"research":100
		},
		"length":30,
		"cost":{
			"bloodgem":1,
			"mana":5,
			"hp":10
		},
		"mod":{
			"mod.hp.max":4
		}
	},
	{
		"id":"en_regen1",
		"name":"regeneration",
		"verb":"enchanting",
		"adj":"of regeneration",
		"only":"neck",
		"desc":"infuse an amulet with living blood.",
		"require":"g.enchanting>=5",
		"level":2,
		"buy":{
			"arcana":1,
			"research":100
		},
		"length":40,
		"cost":{
			"bloodgem":1,
			"mana":5,
			"hp":10
		},
		"mod":{
			"mod.hp.rate":0.2
		}
	},
	{
		"id":"en_dmg1",
		"name":"biting edge",
		"verb":"infusing weapon",
		"adj":"of biting",
		"only":"weapon",
		"desc":"imbue a weapon with a magic strike.",
		"require":"g.enchanting>=3",
		"level":1,
		"buy":{
			"arcana":1,
			"research":100
		},
		"length":30,
		"cost":{
			"managem":3,
			"mana":5
		},
		"mod":{
			"attack.bonus":1
		}
	},
	{
		"id":"en_speed1",
		"name":"quick boots",
		"verb":"infusing shoes",
		"only":"feet",
		"desc":"imbue an item with inherent speed",
		"require":"g.enchanting>=3",
		"level":1,
		"buy":{
			"arcana":1,
			"research":200
		},
		"length":30,
		"cost":{
			"airgem":1,
			"watergem":1,
			"mana":5
		},
		"mod":{
			"mod.speed":0.5
		}
	},
	{
		"id":"en_fire1",
		"name":"fire ring",
		"adj":"of fire",
		"only":"ring",
		"desc":"increases your aptitude with fire",
		"require":"g.enchanting>=1&&g.firelore>=7",
		"level":1,
		"buy":{
			"research":300
		},
		"length":30,
		"cost":{
			"firegem":1,
			"fire":5
		},
		"mod":{
			"mod.firelore.max":1,
			"mod.fire.rate":0.2
		}
	},
	{
		"id":"en_water1",
		"name":"water ring",
		"adj":"of water",
		"only":"ring",
		"desc":"increases your aptitude with water",
		"require":"g.enchanting>=1&&g.waterlore>=7",
		"level":1,
		"buy":{
			"research":300
		},
		"length":30,
		"cost":{
			"watergem":1,
			"water":5
		},
		"mod":{
			"mod.waterlore.max":1,
			"mod.water.rate":0.2
		}
	},
	{
		"id":"en_earth1",
		"name":"earth ring",
		"adj":"of earth",
		"only":"ring",
		"desc":"increases your aptitude with earth",
		"require":"g.enchanting>=1&&g.earthlore>=7",
		"level":1,
		"buy":{
			"research":300
		},
		"length":30,
		"cost":{
			"earthgem":1,
			"earth":5
		},
		"mod":{
			"mod.earthlore.max":1,
			"mod.earth.rate":0.2
		}
	},
	{
		"id":"en_air1",
		"name":"air ring",
		"adj":"of air",
		"only":"ring",
		"desc":"increases your aptitude with air",
		"require":"g.enchanting>=1&&g.airlore>=7",
		"level":1,
		"buy":{
			"research":300
		},
		"length":30,
		"cost":{
			"airgem":1,
			"air":5
		},
		"mod":{
			"mod.airlore.max":1,
			"mod.air.rate":0.2
		}
	},
	{
		"id":"en_speed2",
		"name":"quick boots II",
		"verb":"infusing shoes",
		"only":"feet",
		"desc":"imbue an item with inherent speed",
		"require":"g.enchanting>=5",
		"level":3,
		"buy":{
			"tomes":3,
			"research":800
		},
		"length":30,
		"cost":{
			"airgem":5,
			"watergem":5,
			"mana":5
		},
		"mod":{
			"mod.speed":2
		}
	},
	{
		"id":"en_speed3",
		"name":"quick boots III",
		"verb":"infusing shoes",
		"only":"feet",
		"desc":"imbue an item with inherent speed",
		"require":"g.enchanting>=7",
		"level":5,
		"buy":{
			"tomes":10,
			"research":200
		},
		"length":30,
		"cost":{
			"runestones":2,
			"mana":10
		},
		"mod":{
			"mod.speed":5
		}
	},
	{
		"id":"en_speed4",
		"name":"quick boots IV",
		"verb":"infusing shoes",
		"only":"feet",
		"adj":"of speed",
		"desc":"imbue your boots with speed",
		"require":"g.enchanting>=10",
		"level":7,
		"buy":{
			"tomes":10,
			"runestones":10,
			"research":3000
		},
		"length":30,
		"cost":{
			"runestones":2,
			"mana":15
		},
		"mod":{
			"mod.speed":8
		}
	},

	{
		"id":"en_clarity",
		"name":"clarity",
		"only":"head",
		"adj":"of clarity",
		"desc":"an enchantment to aid the mind.",
		"level":3,
		"buy":{
			"tomes":3,
			"research":800
		},
		"length":20,
		"cost":{
			"managem":10
		},
		"mod":{
			"mod.bf.rate":-0.5
		}
	},
	{
		"id":"en_scraft",
		"name":"spellcraft",
		"adj":"of spells",
		"desc":"increases your spellcrafting power.",
		"only":"armor,weapon",
		"level":3,
		"buy":{
			"gold":100,
			"research":700,
			"codices":10
		},
		"length":20,
		"cost":{
			"managem":15,
			"mana":5
		},
		"mod":{
			"mod.scraft":1
		}
	},
	{
		"id":"en_courage",
		"name":"courage",
		"only":"waist",
		"desc":"an enchantment to gird the spine.",
		"level":5,
		"buy":{
			"tomes":3,
			"research":1000
		},
		"length":20,
		"cost":{
			"earthgem":5
		},
		"mod":{
			"mod.unease.rate":-0.5
		}
	},
	{
		"id":"en_sanity",
		"name":"sanity",
		"only":"head",
		"adj":"of sanity",
		"desc":"an enchantment to ward off madness",
		"level":6,
		"buy":{
			"tomes":5,
			"research":1000
		},
		"length":20,
		"cost":{
			"managem":10
		},
		"mod":{
			"mod.madness.rate":-1
		}
	},
	{
		"id":"en_stam1",
		"name":"refreshment",
		"verb":"enchanting",
		"adj":"of refreshing",
		"only":"ring",
		"desc":"runed ring refreshes your stamina.",
		"require":"g.enchanting>=10&&g.enchanter>0",
		"level":7,
		"buy":{
			"arcana":1,
			"research":5000,
			"tomes":25
		},
		"length":30,
		"cost":{
			"waterrune":3,
			"mana":5
		},
		"mod":{
			"mod.stamina.rate":0.3
		}
	},
	{
		"id":"en_tohit1",
		"name":"keen weapon",
		"verb":"infusing weapon",
		"only":"weapon",
		"desc":"infuse an item with magical precision.",
		"require":"g.enchanting>=3",
		"level":1,
		"buy":{
			"arcana":1,
			"research":100
		},
		"length":30,
		"cost":{
			"managem":3,
			"mana":5
		},
		"mod":{
			"attack.tohit":2
		}
	},
	{
		"id":"en_scraft2",
		"name":"spellcraft II",
		"adj":"of spells",
		"only":"armor,weapon",
		"desc":"increases your spellcrafting power",
		"require":"g.en_scraft>0&&g.enchanting>=6",
		"level":6,
		"buy":{
			"gold":500,
			"research":700,
			"tomes":5
		},
		"length":30,
		"cost":{
			"managem":15,
			"spiritgem":15
		},
		"mod":{
			"mod.scraft":2
		}
	},
	{
		"id":"en_decep",
		"name":"deception",
		"only":"back",
		"adj":"of deception",
		"desc":"a cloak to confuse your enemies.",
		"level":9,
		"buy":{
			"tomes":4,
			"research":2000
		},
		"length":20,
		"cost":{
			"watergem":10
		},
		"mod":{
			"mod.trickery":2
		}
	},
	{
		"id":"en_prisma",
		"name":"prismatic ring",
		"only":"ring",
		"adj":"of colors",
		"desc":"restores energies of all kinds.",
		"level":8,
		"buy":{
			"tomes":5,
			"research":5000
		},
		"length":20,
		"cost":{
			"managem":10,
			"airgem":10,
			"watergem":10,
			"earthgem":10,
			"firegem":10,
			"lightgem":10,
			"shadowgem":10,
			"spiritgem":10
		},
		"mod":{
			"mod.prismatic.rate":0.5
		}
	}

]

