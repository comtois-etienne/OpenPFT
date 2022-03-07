# OpenPFT  
## Description
A tool to create PFT file that can easily be integrated into a BIM workflow.  

Un outil de création de PFT pouvant être facilement intégré dans un processus BIM.  


## Example  
Output file example
```json
{
   "open_pft_version": "1.0",
	"parameters": {
		"general": [
			{
				"parameter": "project_name",
				"data_type": "text",
				"identifier": "Nom du projet",
				"order": 1,
				"default": ""
			},
			{
				"parameter": "project_address",
				"data_type": "text",
				"identifier": "Adresse du projet",
				"order": 2,
				"default": ""
			}
		],
		"rooms": [
			{
				"parameter": "room_name",
				"data_type": "text",
				"identifier": "Nom",
				"order": 1,
				"default": ""
			},
			{
				"parameter": "room_number",
				"data_type": "text",
				"identifier": "Numero",
				"order": 2,
				"default": ""
			},
			{
				"parameter": "room_area",
				"data_type": "area",
				"identifier": "Supperficie",
				"order": 3,
				"default": 0.0
			},
			{
				"parameter": "room_sector",
				"data_type": "sector",
				"identifier": "Secteur",
				"order": 4,
				"default": null
			}
		],
		"sectors": [
			{
				"parameter": "sector_name",
				"data_type": "text",
				"identifier": "Secteur",
				"order": 1,
				"default": ""
			},
			{
				"parameter": "gross_area",
				"data_type": "area",
				"identifier": "Supperficie brut",
				"order": 2,
				"default": 0.0
			},
			{
				"parameter": "parent_sector",
				"data_type": "sector",
				"identifier": "Aile",
				"order": 3,
				"default": null
			}
		]
	},
	
	"general": {
		"project_name": "Maison Comtois",
		"project_address": "123 rue du Projet"
	},
	
	"rooms": [
		{
			"pft_uid": "R0",
			"room_name": "cuisine",
			"room_number": "101",
			"room_area": 12.0,
			"room_sector": "S2"
		},
		{
			"pft_uid": "R1",
			"room_name": "salon",
			"room_number": "102",
			"room_area": 20.0,
			"room_sector": "S2"
		},
		{
			"pft_uid": "R2",
			"room_name": "chambre maitres",
			"room_number": "103",
			"room_area": 20.0,
			"room_sector": "S1"
		},
		{
			"pft_uid": "R3",
			"room_name": "chambre secondaire",
			"room_number": "104",
			"room_area": 15.0,
			"room_sector": "S1"
		}
	],
	
	"sectors": [
		{
			"pft_uid": "S0",
			"sector_name": "Maison",
			"gross_area": 80.0,
			"parent_sector": null
		},
		{
			"pft_uid": "S1",
			"sector_name": "Chambres",
			"gross_area": 40.0,
			"parent_sector": "S0"
		},
		{
			"pft_uid": "S2",
			"sector_name": "Aires communes",
			"gross_area": 40.0,
			"parent_sector": "S0"
		}
	]
}
```
