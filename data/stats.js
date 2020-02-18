var stats = 
[
	{
		"id":"hp",
		"name":"life",
		"desc":"Wizard life-force",
		"val":5,
		"max":5,
		"unit":false,
		"locked":false
	},
	{
		"id":"level",
		"val":0,
		"unit":true,
		"stat":true,
		"locked":false,
		"hide":true,
		"mod":{
			"spelllist.max":1,
			"stamina.max":1,
			"player.tohit":1,
			"hp.max":1,
			"allies.max":"/5",
			"speed":"/4"
		},
		"result":{
			"hallPoints":0.1,
			"sp":"/3"
		}

	},
	{

		"id":"stamina",
		"max":10,
		"val":10,
		"unit":false,
		"locked":false
	},
	{
		"id":"age",
		"val":"15~25",
		"stat":"true",
		"locked":false
	},
	{
		"id":"dist",
		"name":"distance",
		"desc":"Maximum travel distance.",
		"val":10,
		"stat":true,
		"locked":false
	},
	{
		"id":"exp",
		"val":0,
		"unit":false,
		"locked":false
	},
	{
		"id":"sp",
		"name":"skill points",
		"desc":"Spend to unlock new skills",
		"stat":true,
		"val":0,
		"locked":false
	},
	{
		"id":"dodge",
		"val":1,
		"stat":true,
		"unit":false,
		"locked":false
	},
	{
		"id":"speed",
		"desc":"Movement speed",
		"val":1,
		"stat":true,
		"unit":false,
		"locked":false
	},
	{
		"id":"luck",
		"desc":"affinity for fortune",
		"val":0,
		"stat":true,
		"unit":false,
		"locked":false,
		"flavor":"let's keep this party polite"
	},
	{
		"id":"scraft",
		"name":"spellcraft power",
		"val":1,
		"stat":true,
		"unit":true,
		"locked":false
	},
	{
		"id":"DR",
		"name":"Damage reduction",
		"desc":"Amount of damage subtracted from total.",
		"val":0,
		"stat":true,
		"unit":false,
		"locked":false
	},
	{
		"id":"virtue",
		"hide":"true",
		"locked":false,
		"desc":"Tendency to good",
		"stat":true,
		"val":0
	},
	{
		"id":"evilamt",
		"name":"evil",
		"hide":true,
		"locked":false,
		"stat":true,
		"desc":"Tendency to evil",
		"val":0
	},

	{
		"id":"fame",
		"name":"notoriety",
		"hide":true,
		"locked":false,
		"stat":true,
		"desc":"Your reputation in the world",
		"result":{
			"hallPoints":1
		},
		"val":0
	}

]