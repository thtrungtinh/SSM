// NOTE object below must be a valid JSON
window.SSM = $.extend(true, window.SSM, {
    "config": {
        "endpoints": {
            "db": {
                "local": "http://localhost:9999/api.svc",
                "production": "http://localhost:9999/api.svc"
            }
        },
        "services": {
            "db": {
                "entities": {
					"LeagueTeams": { 
						"key": ["LeagueID","TeamID"], 
						"keyType": {"LeagueID":"String","TeamID":"String"} 
					},
                    "Match_Getlist":{
                        "key": ["LeagueID"],
                        "keyType": { "LeagueID": "String" }
                    }
                }
            }
        }
    }
});
