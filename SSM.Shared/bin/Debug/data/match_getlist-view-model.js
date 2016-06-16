/// <reference path="../SSM.d.ts" />
var SSM;
(function (SSM) {
    var Match_GetListViewModel = (function () {
        function Match_GetListViewModel(data) {
            this.LeagueID = ko.observable();
            this.GroupID = ko.observable();
            this.ScheduleDate = ko.observable();
            this.HomeTeamName = ko.observable();
            this.GuestTeamName = ko.observable();
            this.HomeTeamID = ko.observable();
            this.GuestTeamID = ko.observable();
            this.HomeGoals = ko.observable();
            this.GuestGoals = ko.observable();
            this.RoundID = ko.observable();
            this.StageID = ko.observable();
            this.TimzeZone = ko.observable();
            this.TVChannel = ko.observable();
            this.OnlineChannel = ko.observable();
            if (data)
                this.fromJS(data);
        }
        Match_GetListViewModel.prototype.toJS = function () {
            return {
                LeagueID: this.LeagueID(),
                GroupID: this.GroupID(),
                ScheduleDate: this.ScheduleDate(),
                HomeTeamName: this.HomeTeamName(),
                GuestTeamName: this.GuestTeamName(),
                HomeTeamID: this.HomeTeamID(),
                GuestTeamID: this.GuestTeamID(),
                HomeGoals: this.HomeGoals(),
                GuestGoals: this.GuestGoals(),
                RoundID: this.RoundID(),
                StageID: this.StageID(),
                TimzeZone: this.TimzeZone(),
                TVChannel: this.TVChannel(),
                OnlineChannel: this.OnlineChannel()
            };
        };
        Match_GetListViewModel.prototype.fromJS = function (data) {
            if (!data)
                return;
            this.LeagueID(data.LeagueID);
            this.GroupID(data.GroupID);
            this.ScheduleDate(data.ScheduleDate);
            this.HomeTeamName(data.HomeTeamName);
            this.GuestTeamName(data.GuestTeamName);
            this.HomeTeamID(data.HomeTeamID);
            this.GuestTeamID(data.GuestTeamID);
            this.HomeGoals(data.HomeGoals);
            this.GuestGoals(data.GuestGoals);
            this.RoundID(data.RoundID);
            this.StageID(data.StageID);
            this.TimzeZone(data.TimzeZone);
            this.TVChannel(data.TVChannel);
            this.OnlineChannel(data.OnlineChannel);
        };
        Match_GetListViewModel.prototype.clear = function () {
            this.LeagueID(undefined);
            this.GroupID(undefined);
            this.ScheduleDate(undefined);
            this.HomeTeamName(undefined);
            this.GuestTeamName(undefined);
            this.HomeTeamID(undefined);
            this.GuestTeamID(undefined);
            this.HomeGoals(undefined);
            this.GuestGoals(undefined);
            this.RoundID(undefined);
            this.StageID(undefined);
            this.TimzeZone(undefined);
            this.TVChannel(undefined);
            this.OnlineChannel(undefined);
        };
        return Match_GetListViewModel;
    }());
    SSM.Match_GetListViewModel = Match_GetListViewModel;
})(SSM || (SSM = {}));
//# sourceMappingURL=match_getlist-view-model.js.map