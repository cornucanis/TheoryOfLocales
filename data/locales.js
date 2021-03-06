var locales = [
	
	//Hall of Ages
	{
		"id":"loc_ageshall",
		"name":"hall of ages",
		"desc":"The lost Hall of Ages was a gathering place of great and powerful patron mages.",
		"require":"g.tier3>0",
		"title":"Mark of Ages",
		"length":100,
		"once":{
			"history.max":1
		},
		"encs":[
			"enc_kaidi",
			"enc_cyril",
			"enc_jeremy",
			"enc_kanna",
			"enc_phrenesis",
			"enc_sinae",
			"enc_stags",
			"enc_tainted",
			"enc_tjoker",
			"enc_vondrey",
			"enc_mrreaper",
			"enc_mrwild"

		],
		"flavor":"the knowledge within may be beyond price."
	},
				
		//Normal Locales
	{
		"id":"mustylibrary",
		"name":"musty library",
		"level":1,
		"length":15,
		"sym":"??",
		"require":"evt_helper",
		"desc":"a good apprentice spends all their free time in the library. after doing chores, of course.",
		"run":{
			"stamina":0.2
		},
		"result":{
			"arcana":0.1,
			"research":10
		},
		"loot":{
			"scrolls":"1~4"
		},
		"encs":[
			"enc_tapestry",
			"enc_primer1",
			"enc_chest1",
			"enc_primer1",
			"enc_workbook1"
		]
	},
	{
		"id":"loc_spring",
		"name":"lillit's spring",
		"level":2,
		"length":20,
		"require":"evt_helper",
		"desc":"tradition tells of a spring with enchanted waters. investigations might prove revealing.",
		"run":{
			"stamina":0.2
		},
		"result":{
			"arcana":0.1,
			"research":10
		},
		"loot":{
			"herbs":"2~5"
		},
		"encs":[
			"manatree",
			"mysticwater",
			"manatree",
			"hiddencache"
		]
	},
	{
		"id":"eryleyot",
		"name":"eryl eyot",
		"level":5,
		"length":30,
		"desc":"the small and tranquil island is inhabited by an old hermit named thyffr",
		"run":{
			"stamina":0.2
		},
		"effect":{

		},
		"result":{
			"arcana":0.1,
			"research":10
		},
		"loot":{
			"scrolls":"1~4",
			"herbs":"2~5"
		},
		"encs":[
			"enc_chest3",
			"brightvista",
			"enc_thyffr",
			"starrysky1",
			"mysticwater"
		]
	},
	{
		"id":"loc_treffil",
		"name":"explore treffil wood",
		"level":7,
		"length":40,
		"desc":"the woods posses many features of interest to the magical scholar.",
		"run":{
			"stamina":0.2
		},
		"result":{
			"arcana":0.1,
			"naturelore.exp":10,
			"herbalism.exp":5,
			"animals.exp":5
		},
		"loot":{
			"herbs":"5~10"
		},
		"encs":[
			"manatree",
			"mysticwater",
			"brightvista",
			"hauntedglade",
			"enc_delki",
			"hiddencache"
		]
	},
	{
		"id":"pidwigcove",
		"name":"pidwig's cove",
		"level":9,
		"require":"g.history>=3",
		"length":25,
		"desc":"The half-goblin Pidwig has sailed the waters around his bay for hundreds of years. In that time he has collected a myriad of interesting artifacts.",
		"run":{
			"stamina":0.2
		},
		"effect":{

		},
		"result":{
			"arcana":0.1
		},
		"loot":{
			"gold":"20~30",
			"gems":"4~10"
		},
		"encs":[
			"enc_chest3",
			"pidwigstars",
			"enc_pidwig",
			"murkywater",
			"pidwigtreasure",
			"enc_chest1",
			"sombersunset",
			"starrysky1"
		]
	},
	{
		"id":"rithel",
		"level":14,
		"desc":"This tiny outpost in the center of thangmor outlasted even the pillars",
		"require":"g.evil<=0&&g.history>=5",
		"run":{
			"stamina":0.2
		},
		"result":{
			"arcana":0.1,
			"research":10
		},
		"loot":{
			"scrolls":"1~4"
		},
		"encs":[
			"enc_chest2",
			"enc_gnome",
			"enc_primer2",
			"enc_hettie",
			"enc_delki",
			"brightvista"
		]
	},
	{
		"id":"ruinedcrypt",
		"name":"ruined crypt",
		"level":4,
		"length":30,
		"require":"tier0",
		"desc":"an ancient crypt of crumbling stone.",
		"run":{
			"stamina":0.2
		},
		"result":{
			"arcana":0.15,
			"research":20
		},
		"loot":{
			"scrolls":"2~4"
		},
		"encs":[
			"enc_tapestry",
			"enc_mummy",
			"sarcophagus",
			"enc_rats",
			"strangebones",
			"enc_embalm1",
			"enc_chest2"
		]
	},
	{
		"id":"hallofmirrors",
		"level":12,
		"require":"g.scrying>=999",
		"length":10,
		"sym":"??",
		"desc":"",
		"run":{
			"stamina":0.2
		},
		"result":{
			"arcana":0.1,
			"research":10
		},
		"loot":{
			"scrolls":"1~4"
		},
		"encs":[
			"enc_tapestry",
			"enc_primer1",
			"enc_chest1",
			"enc_primer1",
			"enc_workbook1"
		]
	},
	{
		"id":"fazbitshop",
		"name":"fazbit's workshop",
		"level":9,
		"length":50,
		"sym":"??",
		"require":"g.alchemy>=7||g.scrying>=9",
		"desc":"You could spend a century in Fazbit's lost workshop and still not exhaust its creations.",
		"loot":{
			"tomes":"2~3",
			"gems":"3~5",
			"airgem":"50%",
			"firegem":"50%",
			"fazbitfixate":true
		},
		"encs":[
			"enc_alchemy",
			"enc_chest1",
			"enc_chest2",
			"enc_furnace",
			"enc_workbook1",
			"enc_alchemy",
			"enc_workbook2"
		]
	},
	{
		"id":"genezereth",
		"level":15,
		"require":"g.history>=6",
		"length":100,
		"sym":"??",
		"desc":"An ancient library at the bridge spanning Markhul's gap.",
		"flavor":"third of the Four Weirs of Dhrune.",
		"result":{
			"title":"Historian"
		},
		"loot":{
			"tomes":"3~5",
			"markhulcodex":true
		},"encs":[
			"enc_tapestry",
			"enc_tome",
			"enc_chest1",
			"enc_gap",
			"enc_statue2",
			"enc_history",
			"enc_primer1"
		]
	},
	{

		"id":"loc_orrem",
		"name":"sands of orrem",
		"require":"g.history>=7&&g.scrying>=5",
		"show":{
			"name":"Cities of Orrem",
			"desc":"A vision in a crystal orb reveals to you the ruins of the lost cities of Orrem."
		},
		"desc":"Only a small trading post marks the boundary of the lost cities of Orrem. Weathered masonry jutting from the sands beyond bespeak monuments of unimaginable proportions.",
		"length":400,
		"level":19,
		"run":{
			"stamina":3
		},
		"result":{
			"title":"Nomad",
			"fame":1
		},"encs":[
			"enc_aeonclock",
			"enc_caravan",
			"enc_oasis",
			"desert_rains",
			"orrem_rains",
			"enc_madwinds",
			"enc_orrem_cave",
			"enc_sandstorm",
			"enc_mirage",
			"enc_statue4",
			"strangebones",
			"enc_statue2",
			"starrysky1",
			"enc_chest3",
			"enc_orremtrade"
		]
	},
	{
		"id":"loc_tenwick",
		"name":"peregrination",
		"level":20,
		"require":"g.s_travel>=5&&g.a_travel>=100",
		"desc":"Tenwick's trail runs a circuit about the notable areas of Dhrune. On foot it takes the better part of a year to complete.",
		"length":10000,
		"run":{
			"stamina":2
		},
		"result":{
			"title":"Dhrunic Wayfarer",
			"tenwickstick":1,
			"fame":1
		},
		"encs":[
			"enc_statue2",
			"enc_battle1",
			"enc_oldstone",
			"strangebones",
			"enc_gibber",
			"hauntedglade",
			"enc_statue4",
			"enc_gap",
			"brightvista",
			"enc_mtpass",
			"hiddencache",
			"murkywater",
			"sombersunset",
			"enc_wyrd",
			"enc_sindel"

		]

	}

]