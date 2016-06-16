/// <reference path="../../../SSM.Shared/SSM.d.ts" />
var SSM;
(function (SSM) {
    function LeagueTeamEdit(params, viewInfo) {
        var id = params.id, isReady = $.Deferred(), isNew = (id === undefined), isSplitLayout = viewInfo.layoutController.name === "split", store = SSM.db["LeagueTeams"], leagueteam = new SSM.LeagueTeamViewModel();
        function load() {
            return store.byKey(id).done(function (data) {
                leagueteam.fromJS(data);
            });
        }
        function update() {
            store.update(id, leagueteam.toJS()).done(function () {
                SSM.app.back();
            });
        }
        function insert() {
            store.insert(leagueteam.toJS()).done(function (values, newId) {
                SSM.app.navigate({ view: "LeagueTeamDetails", id: newId }, { target: "current" });
            });
        }
        function handleSave() {
            if (isNew)
                insert();
            else
                update();
        }
        function handleCancel() {
            if (!isNew) {
                SSM.app.back();
            }
            else {
                if (isSplitLayout) {
                    SSM.app.navigate("Blank", { target: "current" });
                }
                else {
                    SSM.app.back();
                }
                leagueteam.clear();
            }
        }
        function handleViewShown() {
            if (!isNew)
                load().done(function () {
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
    SSM.LeagueTeamEdit = LeagueTeamEdit;
})(SSM || (SSM = {}));
//# sourceMappingURL=leagueteam-edit.js.map