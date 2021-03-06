var encounters = [
	// Hall of Ages Encounters
	
	{
		"id":"agetablet1",
		"name":"ancient tablet",
		"desc":"A tablet on a dais displays a glowing list of names.",
		"flavor":"Chazza, Jiopaba, Kamianya, Alyx, Man of Smoke",
		"effect":{

		}

	},
	{
		"id":"agetablet2",
		"name":"weathered tablet",
		"desc":"A weathered tablet with a faded list of names.",
		"flavor":"Chazza, Jiopaba, Kamianya, Alyx, Man of Smoke",
		"effect":{

		}
	},

	{
		"id":"enc_cyril",
		"name":"view stars with cyril",
		"desc":"",
		"effect":{
			"rage":"1~5",
			"weary":"2~5",
			"research":1
		},
		"result":{
		}

	},
	{
		"id":"enc_kanna",
		"name":"Study under Kanna",
		"desc":"A fox-girl delightedly teaches you some practical ways to use your weapon more effectively",
		"effect":{
			"bf":"0~2",
			"weary":"2~5",
			"rage":"2~5",
			"bladelore.exp":3,
			"enchanting.exp":3
		},
		"result":{
			"bladelore.max":0.001
		}

	},
	{
		"id":"enc_jeremy",
		"name":"jeremi",
		"desc":"Nothing is known about this mage.",
		"effect":{
			"rage":"1~5",
			"weary":"2~5",
			"research":1
		},
		"result":{
		}
	},
	{
		"id":"enc_phrenesis",
		"name":"phrenesis",
		"desc":"Phrenesis was forever preoccupied with the cycles of death and rebirth.",
		"effect":{
			"stress":-0.1,
			"hp":-4
		}

	},
	{
		"id":"enc_sinae",
		"name":"sinae",
		"desc":"",
		"effect":{
			"rage":"1~5",
			"weary":"2~5",
			"research":1
		}
	},
	{
		"id":"enc_stags",
		"name":"stags",
		"desc":"Nothing is known about the enigmatic mage.",
		"effect":{
			"rage":"1~5",
			"weary":"2~5",
			"research":1
		},
		"result":{
		}
	},
	{
		"id":"enc_tainted",
		"name":"Tainted, Archon of the Void",
		"desc":"A violent echo still wanders the halls it never walked",
		"effect":{
			"madness":"2~4",
			"unease":"2~4",
			"tempus":-1,
			"chronomancy.exp":1,
			"voidlore.exp":1
		},
		"loot":{
			"voidrune":"1%",
			"voidgem":"1%",
			"timerune":"1%",
			"timegem":"1%"

		}, "flavor":"Did that actually happen?"

	},
	{
		"id":"enc_kaidi",
		"name":"kaidi",
		"desc":"",
		"effect":{

		},"flavor":""

	},
	{
		"id":"enc_tjoker",
		"name":"a joker",
		"desc":"A crafty expression suggests trouble.",
		"effect":{
			"rage":"1~5",
			"bf":"2~5",
			"trickery.exp":2,
			"player.exp":1
		}

	},
	{
		"id":"enc_vondrey",
		"name":"vondrey",
		"desc":"The mage does not appear inclined to speak.",
		"effect":{
			"bf":"1~5",
			"rage":"1~5",
			"weary":"2~5",
			"concentrate.exp":1,
			"composure.exp":1
		}
	},
	{
		"id":"enc_mrwild",
		"name":"master wild",
		"desc":"A mage of the wilds makes a perplexing teacher.",
		"effect":{
			"madness":"1~5",
			"weary":"2~5",
			"naturelore.exp":2,
			"animals.exp":2
		}

	},
	{
		"id":"enc_mrreaper",
		"name":"mister reaper",
		"desc":"A grim name for an otherwise respectable mage.",
		"effect":{
			"madness":"1~5",
			"bf":"2~5",
			"history.exp":2,
			"shadowlore.exp":2
		}

	}, 
	
	//Normal Encounters

	{
		"id":"enc_primer1",
		"name":"magical primer",
		"desc":"an introduction to magical theory.",
		"effect":{
			"bf":"-1~2",
			"lore.exp":1
		},
		"result":{
			"research":1,
			"arcana":0.01
		}
	},
	{
		"id":"enc_workbook1",
		"name":"workbook",
		"desc":"a book on the practical applications of magic",
		"effect":{
			"bf":"-1~2",
			"rage":"0~2",
			"crafting.exp":2
		}
	},
	{
		"id":"mysticwater",
		"name":"mystic waters",
		"level":1,
		"desc":"water suffused with enchantments",
		"effect":{
			"bf":"-1~2",
			"naturelore.exp":1,
			"waterlore.exp":1,
			"arcana":0.001
		},
		"result":{
			"watergem":"25%"
		}
	},
	{
		"id":"manatree",
		"name":"mana tree",
		"level":2,
		"desc":"a tree by a magic spring exhibits surprising qualities",
		"effect":{
			"bf":"-1~2",
			"naturelore.exp":2,
			"herbalism.exp":1
		},
		"result":{
			"managem":"25%"
		}
	},
	{
		"id":"enc_tapestry",
		"name":"occult tapestry",
		"level":2,
		"desc":"a tapestry with strange, hidden meanings",
		"effect":{
			"bf":"-1~2",
			"rage":"0~2"
		},
		"result":{
			"research":1,
			"arcana":0.005
		}
	},
	{
		"id":"foggydale",
		"name":"foggy dale",
		"desc":"The fog here is so thick, you can't see your own hands.",
		"effect":{
			"bf":"1~2",
			"rage":"0~1",
			"unease":"1~2",
			"airlore.exp":2,
			"spiritlore.exp":1
		}
	},
	{
		"id":"enc_chest1",
		"name":"dusty chest",
		"desc":"A battered, wooden chest.",
		"effect":{
			"bf":"-1~2"
		},
		"loot":{
			"gold":"2~10",
			"scrolls":"1~2"
		}
	},
	{
		"id":"enc_chest2",
		"name":"iron chest",
		"desc":"A solid iron chest.",
		"effect":{
			"bf":"-1~1",
			"rage":"0~1"
		},
		"loot":{
			"gold":"5~14",
			"codices":"0~2",
			"scrolls":"2~4"
		}
	},
	{
		"id":"enc_chest3",
		"name":"dusty chest",
		"desc":"A small but solid chest.",
		"effect":{
			"rage":"1~3"
		},
		"loot":{
			"gold":"0~50",
			"gems":"2~5",
			"runestones":"0~2",
			"codices":"0~4"
		}
	},
	{
		"id":"enc_chest4",
		"name":"oak chest",
		"desc":"A sturdy, oaken chest.",
		"effect":{
			"rage":"2~4",
			"weary":"1~3"
		},
		"loot":{
			"gold":"0~300",
			"firerune":"5%",
			"earthrune":"5%",
			"waterrune":"5%",
			"airrune":"5%",
			"tomes":"50%"
		}
	},
	{
		"id":"enc_primer2",
		"name":"advanced primer",
		"desc":"More advanced magical theory.",
		"effect":{
			"bf":"-1~3",
			"weary":"0~2",
			"rage":"0~2",
			"lore.exp":2,
			"languages.exp":1
		},
		"result":{
			"codices":"10%",
			"research":10,
			"arcana":0.02
		}
	},
	{
		"id":"enc_thyffr",
		"name":"talking to thyffr",
		"desc":"Within a ramble of mundane details, thyffr often discloses some genuine history.",
		"effect":{
			"rage":"0~2",
			"weary":"1~3",
			"history.exp":2,
			"research":1
		},
		"result":{
			"arcana":0.01
		}

	},
	{
		"id":"enc_delki",
		"name":"babbling delki",
		"desc":"The delki of the woods know many things, but are seldom coherent.",
		"effect":{
			"rage":"1~2",
			"weary":"1~3",
			"naturelore.exp":1,
			"research":1,
			"lore.exp":1
		},
		"result":{
			"naturegem":"10%",
			"arcana":0.01
		}

	},
	{
		"id":"enc_gnome",
		"name":"affable gnome",
		"desc":"A gnome is always more than willing to talk over a pint or a pipe.",
		"effect":{
			"weary":"0~2",
			"bf":"1~2",
			"spellcraft.exp":1,
			"research":1,
			"lore.exp":1
		},
		"result":{
			"spellcraft.max":0.001
		}

	},
	{
		"id":"enc_gibber",
		"name":"gibbering",
		"desc":"They hide in small cracks and in return for a wicked deed, will reveal one secret.",
		"effect":{
			"weary":"0~2",
			"madness":"0~2",
			"mysticism.exp":1,
			"research":1
		},
		"result":{
			"shadowgem":"5%",
			"arcana":0.01
		},"flavor":"legend tells of a massive gibbering, who will answer any question in return for a murder."

	},
	{
		"id":"enc_mummy",
		"name":"mummified remains",
		"desc":"A corpse preserved by the stale air",
		"effect":{
			"madness":"0~2",
			"unease":"1~3",
			"embalming.exp":1,
			"spiritlore.exp":1,
			"anatomy.exp":1
		},
		"result":{
			"anatomy.max":0.001
		},
		"loot":{
			"gold":"0~100",
			"bonedust":"0~2",
			"gems":"0~2",
			"bodies":"30%"
		}
	},
	{
		"id":"strangebones",
		"name":"strange bones",
		"desc":"You've never seen such bones before.",
		"effect":{
			"bf":"-1~2",
			"unease":"0~3",
			"anatomy.exp":1
		},
		"result":{
			"bones":"1~4"
		}
	},
	{
		"id":"enc_embalm1",
		"name":"embalming apparatus",
		"desc":"Fluids and recepticles for preservation of the dead.",
		"effect":{
			"bf":"-1~2",
			"unease":"0~2",
			"reanimation.exp":1,
			"embalming.exp":2
		},
		"result":{
			"bonedust":"0~3"
		}
	},
	{
		"id":"sarcophagus",
		"desc":"Ancient coffin marked by faded runes",
		"level":4,
		"effect":{
			"unease":"0~2",
			"madness":"0~2",
			"reanimation.exp":2,
			"embalming.exp":2
		},
		"loot":{
			"runestones":"10%",
			"shadowgem":"30%",
			"spiritgem":"30%",
			"bodies":"50%"
		}
	},
	{
		"id":"enc_rats",
		"name":"plague rats",
		"desc":"The scurrying vermin are covered in welts",
		"effect":{
			"bf":"-1~2",
			"unease":"0~2",
			"reanimation.exp":2
		}
	},
	{
		"id":"hauntedglade",
		"name":"haunted glade",
		"desc":"Trees here have an eerie aspect",
		"effect":{
			"madness":"1~2",
			"unease":"0~2",
			"shadowlore.exp":1,
			"spiritlore.exp":1
		},
		"result":{
			"spiritlore.max":0.001
		}
	},
	{
		"id":"hiddencache",
		"name":"hidden cache",
		"desc":"You sense something buried nearby.",
		"effect":{
			"rage":"1~2",
			"weary":"0~2",
			"bf":"-1~2",
			"naturelore.exp":1
		},
		"loot":{
			"gold":"0~50",
			"gems":"2~5",
			"scrolls":"2~5",
			"codices":"0~4"
		}
	},
	{
		"id":"murkywater",
		"name":"murky waters",
		"desc":"Ominous shapes drift and flow beneath the deep unsettled water.",
		"effect":{
			"bf":"0~2",
			"unease":"2~3",
			"madness":"1~2",
			"waterlore.exp":2,
			"shadowlore.exp":1,
			"arcana.max":0.05
		}
	},
	{
		"id":"enc_blackcat",
		"name":"black cat",
		"desc":"A black cat is an omen to be studied seriously",
		"effect":{
			"unease":"1~4",
			"rage":"2~4",
			"divination.exp":1,
			"scrying.exp":1
		},
		"result":{
			"spiritlore.max":0.001,
			"arcana":0.04
		}

	},
	{
		"id":"enc_hest_ward",
		"name":"warding charm",
		"desc":"A hanging charm wards away the borgles and grimstalks.",
		"effect":{
			"unease":"1~5",
			"bf":"1~5",
			"charms.exp":1,
			"enchanting.exp":1
		},
		"result":{
			"enchanting.max":0.01,
			"charms.max":0.01
		}
	},
	{
		"id":"enc_cauldron",
		"name":"bubbling cauldron",
		"desc":"the cauldron bubbles and glows with a odorous brew.",
		"effect":{
			"unease":"0~2",
			"weary":"1~3",
			"bf":"-1~2.5",
			"potions.exp":1,
			"alchemy.exp":1,
			"crafting.exp":1
		},
		"result":{
			"potions.max":0.01
		},
		"loot":"hestiabrew"
	},
	{

		"id":"enc_hettie",
		"name":"hettie",
		"desc":"An ancient gryffon lives atop the Rithel's solitary turret, and Hettie spends her days grooming and feeding the beast.",
		"effect":{
			"wear":"1~3",
			"bf":"1~2"
		},
		"result":{
			"magicbeasts.max":0.001
		}

	},
	{
		"id":"enc_hestia",
		"name":"hestia",
		"desc":"hestia has no interest in the world outside Thangmor, but will teach those who come to her.",
		"effect":{
			"unease":"2~4",
			"bf":"-2~3",
			"herbalism.exp":1
		},
		"result":{
			"scrying.max":0.001,
			"history.max":0.001,
			"potions.exp":0.001,
			"arcana":0.01
		}

	},
	{
		"id":"enc_pidwig",
		"name":"talk to pidwig",
		"desc":"pidwig is sparse with words, but has seen many mysteries in his travels.",
		"effect":{
			"bf":"0~2",
			"weary":"0~2",
			"unease":"0~2",
			"history.exp":2,
			"astronomy.exp":1,
			"lore.exp":1
		},
		"result":{
			"arcana":0.05
		}

	},
	{
		"id":"pidwigtreasure",
		"name":"pidwig's hoard",
		"desc":"over the years Pidwig has amassed a sizeable collection of gems and artifacts.",
		"effect":{
			"crafting.exp":1,
			"history.exp":1,
			"trickery.exp":1,
			"rage":"0~2",
			"madness":"0~2"
		},
		"loot":"magicgems",
		"flavor":"perhaps he could be induced to part with some..."

	},
	{
		"id":"starrysky1",
		"name":"starry night",
		"desc":"a clear sky affords an endless view of the firmament.",
		"effect":{
			"bf":"1~2",
			"unease":"-1~2",
			"madness":"-1~1",
			"astronomy.exp":1,
			"planeslore.exp":1,
			"scrying.exp":1
		}
	},
	{
		"id":"pidwigstars",
		"name":"pidwig's starcharts",
		"desc":"an old hand at astronomical calculations, pidwig shares his extensive observations.",
		"effect":{
			"bf":"1~3",
			"unease":"-1~2",
			"madness":"-1~1",
			"astronomy.exp":3,
			"planeslore.exp":1,
			"scrying.exp":1
		}, "loot":"starcharts"
	},
	{
		"id":"sombersunset",
		"name":"somber sunset",
		"desc":"lapping waves in the dying sun hint at secrets just beyond your reach.",
		"effect":{
			"rage":"-1~-2",
			"weary":"-1~-2",
			"madness":"-1~-2",
			"waterlore.exp":1,
			"mysticism.exp":1,
			"divination.exp":1
		}
	},
	{
		"id":"brightvista",
		"name":"bright vista",
		"desc":"a small knoll reveals lands far into the distance",
		"effect":{
			"bf":"-1~-2",
			"weary":"-1~-2",
			"rage":"-1~-2",
			"naturelore.exp":1,
			"lightlore.exp":1
		}
	},
	{
		"id":"enc_tome",
		"name":"runic tome",
		"desc":"even deciphering the runes is a tedious chore.",
		"effect":{
			"bf":"-1~4",
			"rage":"0~4",
			"unease":"0~2",
			"lore.exp":2
		},
		"result":{
			"codices":1,
			"arcana":0.01
		}
	},
	{
		"id":"enc_history",
		"name":"dhrunic manuscript",
		"desc":"Much that was is lost.",
		"effect":{
			"bf":"-1~4",
			"rage":"0~4",
			"history.exp":2
		},
		"result":{
			"history.max":0.001,
			"arcana":0.01
		}
		,"flavor":"for none now live, who remember it."
	},
	{
		"id":"enc_workbook2",
		"name":"master's workbook",
		"desc":"A book on the practical applications of magic",
		"effect":{
			"bf":"-1~3",
			"madness":"0~3",
			"rage":"1~3",
			"crafting.exp":4
		},
		"result":{
			"crafting.max":0.001
		}
	},
	{
		"id":"enc_furnace",
		"name":"fazbit's furnace",
		"desc":"Its embers still glow after centuries",
		"effect":{
			"bf":"-1~4",
			"madness":"0~2",
			"unease":"1~3",
			"firelore.exp":3
		},
		"result":{
			"firelore.max":0.001
		}
	},
	{
		"id":"enc_alchemy",
		"name":"alchemical equipment",
		"desc":"The uses of these instruments are beyond you.",
		"effect":{
			"bf":"-1~4",
			"madness":"0~2",
			"rage":"1~3",
			"alchemy.exp":3
		},
		"result":{
			"alchemy.max":0.001
		}
	},
	{
		"id":"enc_statue2",
		"name":"crumbled statue",
		"desc":"The old stonemasons often chiselled spells into their works.",
		"effect":{
			"earthlore.exp":1,
			"bf":"0~2",
			"unease":"0~2",
			"history.exp":1
		},
		"result":{
			"earthlore.max":0.001
		}
	},
	{
		"id":"enc_statue4",
		"name":"eldar statue",
		"desc":"Its weathered face has gazed upon the world since the Wind Age.",
		"effect":{
			"madness":1,
			"bf":"3~7",
			"unease":"3~7",
			"history.exp":2
		},
		"result":{
			"runestones":"10%",
			"history.max":0.001
		}
	},
	{
		"id":"enc_battle1",
		"name":"ancient battlefield",
		"desc":"Blasted hills and scraps of armor still mark an ancient site of battle.",
		"effect":{
			"madness":0.5,
			"weary":"2~7",
			"unease":"2~5",
			"history.exp":0.5
		},
		"result":{
			"history.max":0.001
		}
	},
	{
		"id":"enc_mtpass",
		"name":"thandhrun pass",
		"desc":"Higher even than Gorboru, the passes of Thandhrun incessantly thunder.",
		"effect":{
			"madness":0.5,
			"weary":"4~7",
			"rage":"2~7"
		},
		"result":{
			"dist":0.01
		}
	},
	{
		"id":"enc_oldstone",
		"name":"the old stone",
		"desc":"The massive head of stone and moss is said to be as old as the world itself.",
		"effect":{
			"unease":"3~4",
			"bf":"0~-2",
			"madness":"0~2",
			"history.exp":2
		},"flavor":"a voice seems to grumble from the ground."
	},
	{
		"id":"enc_sindel",
		"name":"star shrine",
		"desc":"A glowing star cinder embedded in a shrine.",
		"effect":{
			"lightlore.exp":1,
			"bf":"2~5",
			"weary":"0~-2",
			"unease":"1~5",
			"history.exp":1
		},
		"result":{
			"lightlore.max":0.001
		},"flavor":"you can't seem to pry it loose."
	},
	{
		"id":"enc_tenwick",
		"name":"tenwick",
		"desc":"Tenwick is often on the trail, but always glad to stop and trade tales.",
		"effect":{
			"scrying.exp":1,
			"divination.exp":1,
			"bf":"3~6",
			"unease":"2~5"
		},
		"result":{
		}
	},
	{
		"id":"enc_wyrd",
		"name":"wyrd sister",
		"desc":"The Wyrd sister Hecubah waits by the roadside.",
		"effect":{
			"scrying.exp":1,
			"divination.exp":1,
			"madness":2,
			"bf":"3~7",
			"unease":"2~4"
		},
		"result":{
		},"flavor":"blank verse is always hard to interpret."
	},
	{
		"id":"enc_gap",
		"name":"markhul's gap",
		"desc":"Gazing over the dizzy edge, you see no sign of a bottom",
		"effect":{
			"bf":"0~3",
			"unease":"1~4",
			"madness":"0~3",
			"airlore.exp":2
		},
		"result":{
			"airgem":"10%",
			"airlore.max":0.001
		}
	},
	{

		"id":"enc_sandstorm",
		"name":"sandstorm",
		"desc":"The blistering sands peel away your skin.",
		"effect":{
			"madness":"0~1",
			"weary":"1~2",
			"player.hp":-2,
			"airlore.exp":1,
			"earthlore.exp":1,
			"earth":0.5,
			"air":0.5
		},
		"result":{
			"history.max":0.001
		}
	},
	{
		"id":"enc_oasis",
		"name":"oasis",
		"desc":"A cooling spring and frond trees relieve the monotany of the wastes.",
		"effect":{
			"weary":-2,
			"madness":-1,
			"unease":-1
		}
	},
	{
		"id":"enc_mirage",
		"name":"mirage",
		"desc":"Extended travel beneath the hot sun produces visceral visions in the sand.",
		"effect":{
			"madness":"1~3",
			"unease":"0~2",
			"bf":"0~2",
			"lightlore.exp":1
		},
		"result":{
			"history.max":0.001
		}
	},
	{
		"id":"enc_orremtrade",
		"name":"lost trading post",
		"desc":"In the midst of a wide desolation, a tall grey-skinned creature with no eyes offers you its wares.",
		"effect":{
			"unease":"2~3",
			"madness":"1~3",
			"mana":-1
		},
		"result":{
			"bloodgem":"20%",
			"arcanegem":"10%",
			"codices":"15%"
		}
	},
	{
		"id":"enc_madwinds",
		"name":"winds of madness",
		"desc":"Voices on the wind scream and echo in your mind.",
		"effect":{
			"madness":"2~5",
			"mana":0.5,
			"spiritlore.exp":1,
			"spirit":1,
			"airlore.exp":1
		}
	},
	{
		"id":"orrem_rains",
		"name":"orrem rains",
		"desc":"Rare but torrential, the Orrem rains are accounted a wonder of the world.",
		"effect":{
			"stamina":1,
			"waterlore.exp":1,
			"water":0.5
		}
	},
	{
		"id":"enc_orrem_cave",
		"name":"hidden cave",
		"desc":"The shifting sands reveal a rocky cave. Perhaps some artifacts remain within.",
		"effect":{
			"unease":"1~3",
			"void":0.1
		},
		"result":{
			"codices":"2~4",
			"tomes":"0~3",
			"runestones":"10%"
		}
	},
	{
		"id":"enc_caravan",
		"name":"caravan",
		"desc":"All features of the riders are hidden in robes. They communicate with gutteral sounds and gestures.",
		"effect":{
			"unease":"1~3"
		},
		"result":{
			"s_travel.max":0.001
		}
	},
	{
		"id":"enc_aeonclock",
		"name":"aeon clock",
		"desc":"Legend has it that Thurn himself crafted the ten leagues of clockworks in the Orrem Sands. Year by year, it ticks away the endless Aeons.",
		"effect":{
			"madness":"0~3",
			"unease":"0~2",
			"bf":"1~3",
			"chronomancy.exp":1,
			"crafting.exp":1,
			"history.exp":1
		},
		"result":{
			"history.max":0.001
		},
		"flavor":"Its vast face is nothing to what is reputed to lie buried below."
	},
	{
		"id":"e_bloodgrass",
		"name":"blood grass",
		"desc":"Steel-sharp blades of grass bite cut at your boots.",
		"effect":{
			"weary":"0~3",
			"rage":"1~3",
			"hp":-2
		},
		"result":{
		}
	},
	{
		"id":"e_spidermass",
		"name":"spider swarm",
		"desc":"Piled higher than your head, an eclectic mass of skittering spiders bars the path.",
		"effect":{
			"unease":"2~3",
			"madness":"2~4",
			"rage":"1~2",
			"hp":-1
		},
		"result":{
		}
	},
	{
		"id":"e_snakemass",
		"name":"snake swarm",
		"desc":"Writhing in heaps and drooping from branches, a mass of snakes covers the vicinity.",
		"effect":{
			"unease":"1~2",
			"madness":"1~2",
			"rage":"1~2",
			"hp":-3
		},
		"result":{
		}
	},
	{
		"id":"e_bestiary1",
		"name":"snake swarm",
		"desc":"A pristine tapestry nearby displays a partial index of the menagerie.",
		"effect":{
			"unease":"1~2",
			"madness":"1~2",
			"rage":"1~2",
			"hp":-3
		},
		"result":{
		}
	},
	{
		"id":"e_bestiary2",
		"name":"snake swarm",
		"desc":"A manual of beastly lore rests atop an ancient pedestal.",
		"effect":{
			"unease":"1~2",
			"madness":"1~2",
			"rage":"1~2",
			"hp":-3
		},
		"result":{
		}
	}

]
