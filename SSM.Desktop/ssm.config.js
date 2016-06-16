// NOTE object below must be a valid JSON
window.SSM = $.extend(true, window.SSM, {
    "config": {
        "layoutSet": "desktop",
        "animationSet": "default",
        "navigation": [
            {
                "title": "League Teams",
                "onExecute": "#LeagueTeams",
                "icon": "leagueteam"
            },
            {
                "title": "About",
                "onExecute": "#About",
                "icon": "info"
            }
        ]
    }
});
