/// <reference path="../SSM.d.ts" />
var SSM;
(function (SSM) {
    var LeagueTeamViewModel = (function () {
        function LeagueTeamViewModel(data) {
            this.LeagueID = ko.observable();
            this.TeamID = ko.observable();
            this.GroupID = ko.observable();
            this.Rank = ko.observable();
            this.Point = ko.observable();
            this.Won = ko.observable();
            this.Lost = ko.observable();
            this.Drawn = ko.observable();
            this.GoalLostDiff = ko.observable();
            this.GoalsScored = ko.observable();
            this.GoalConceded = ko.observable();
            if (data)
                this.fromJS(data);
        }
        LeagueTeamViewModel.prototype.toJS = function () {
            return {
                LeagueID: this.LeagueID(),
                TeamID: this.TeamID(),
                GroupID: this.GroupID(),
                Rank: this.Rank(),
                Point: this.Point(),
                Won: this.Won(),
                Lost: this.Lost(),
                Drawn: this.Drawn(),
                GoalLostDiff: this.GoalLostDiff(),
                GoalsScored: this.GoalsScored(),
                GoalConceded: this.GoalConceded()
            };
        };
        LeagueTeamViewModel.prototype.fromJS = function (data) {
            if (!data)
                return;
            this.LeagueID(data.LeagueID);
            this.TeamID(data.TeamID);
            this.GroupID(data.GroupID);
            this.Rank(data.Rank);
            this.Point(data.Point);
            this.Won(data.Won);
            this.Lost(data.Lost);
            this.Drawn(data.Drawn);
            this.GoalLostDiff(data.GoalLostDiff);
            this.GoalsScored(data.GoalsScored);
            this.GoalConceded(data.GoalConceded);
        };
        LeagueTeamViewModel.prototype.clear = function () {
            this.LeagueID(undefined);
            this.TeamID(undefined);
            this.GroupID(undefined);
            this.Rank(undefined);
            this.Point(undefined);
            this.Won(undefined);
            this.Lost(undefined);
            this.Drawn(undefined);
            this.GoalLostDiff(undefined);
            this.GoalsScored(undefined);
            this.GoalConceded(undefined);
        };
        return LeagueTeamViewModel;
    }());
    SSM.LeagueTeamViewModel = LeagueTeamViewModel;
})(SSM || (SSM = {}));
//# sourceMappingURL=leagueteams-view-model.js.map