/// <reference path="../SSM.d.ts" />

module SSM {
    export interface ILeagueTeam {
        LeagueID: string;
        TeamID: string;
        GroupID: string;
        Rank: number;
        Point: number;
        Won: number;
        Lost: number;
        Drawn: number;
        GoalLostDiff: number;
        GoalsScored: number;
        GoalConceded: number;
    }

    export class LeagueTeamViewModel {
        public LeagueID = ko.observable<string>();
        public TeamID = ko.observable<string>();
        public GroupID = ko.observable<string>();
        public Rank = ko.observable<number>();
        public Point = ko.observable<number>();
        public Won = ko.observable<number>();
        public Lost = ko.observable<number>();
        public Drawn = ko.observable<number>();
        public GoalLostDiff = ko.observable<number>();
        public GoalsScored = ko.observable<number>();
        public GoalConceded = ko.observable<number>();

        constructor(data?: ILeagueTeam) {
            if (data) this.fromJS(data);
        }

        toJS() {
            return <ILeagueTeam>{
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
        }

        fromJS(data: ILeagueTeam) {
            if(!data) return;
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
        }

        clear() {
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
        }
    }
}
