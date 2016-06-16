// NOTE object below must be a valid JSON
window.SSM = $.extend(true, window.SSM, {
  "config": {
    "layoutSet": "slideout",
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
      },
      {
        "title": "match_getlist",
        "onExecute": "#match_getlist",
        "icon": "match_getlist"
      }
    ]
  }
});
