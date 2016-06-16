/// <reference path="../../../SSM.Shared/SSM.d.ts" />

module SSM {
	export function LeagueTeamEdit(params: { id: number }, viewInfo: any) {
		var id = params.id,
            isReady = $.Deferred(),
            isNew = (id === undefined),
			isSplitLayout = viewInfo.layoutController.name === "split",
            store = <DevExpress.data.ODataStore>db["LeagueTeams"],
			leagueteam = new LeagueTeamViewModel();

		function load() {
            return store.byKey(id).done(function(data) {
                leagueteam.fromJS(data);
            });
		}

        function update() {
            store.update(id, leagueteam.toJS()).done(function() {
                app.back();
            });
        }

        function insert() {
            store.insert(leagueteam.toJS()).done(function(values, newId) {
                app.navigate({ view: "LeagueTeamDetails", id: newId }, { target: "current" });
            });
        }

		function handleSave() {
			if(isNew)
				insert();            
			else
				update();
		}

        function handleCancel() {
            if(!isNew) {
                app.back();
            }
            else {
                if(isSplitLayout) {
                    app.navigate("Blank", { target: "current" });
                }
                else {
                    app.back();
                }
                leagueteam.clear();
            }
        }

        function handleViewShown() {
            if(!isNew)
                load().done(function() {
                    isReady.resolve();
                });
            else {
                isReady.resolve();
            }
        }

		return {
            leagueteam: leagueteam,
            handleSave: handleSave,
            handleCancel: handleCancel,
            viewShown: handleViewShown,
            isReady: isReady.promise()
        };
    }
}