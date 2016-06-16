/// <reference path="../../../SSM.Shared/SSM.d.ts" />
var SSM;
(function (SSM) {
    function LeagueTeamDetails(params, viewInfo) {
        var id = params.id;
        var isReady = $.Deferred();
        var leagueteam = new SSM.LeagueTeamViewModel();
        var store = SSM.db["LeagueTeams"];
        function handleDelete() {
            DevExpress.ui.dialog.confirm("Are you sure you want to delete this item?", "Delete item").then(function (result) {
                if (result)
                    handleConfirmDelete();
            });
        }
        function handleConfirmDelete() {
            store.remove(id).done(function () {
                if (viewInfo.canBack) {
                    SSM.app.navigate("LeagueTeams", { target: "back" });
                }
                else {
                    SSM.app.navigate("Blank", { target: "current" });
                }
            });
        }
        function handleViewShown() {
            store.byKey(id).done(function (data) {
                leagueteam.fromJS(data);
                isReady.resolve();
            });
        }
        return {
            id: id,
            isReady: isReady.promise(),
            leagueteam: leagueteam,
            handleDelete: handleDelete,
            viewShown: handleViewShown
        };
    }
    SSM.LeagueTeamDetails = LeagueTeamDetails;
})(SSM || (SSM = {}));
//# sourceMappingURL=leagueteam-details.js.map