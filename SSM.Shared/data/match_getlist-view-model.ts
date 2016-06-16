/// <reference path="../SSM.d.ts" />

module SSM {    
    export interface IMatch_GetList {
        LeagueID: string;
        GroupID: string;
        ScheduleDate: Date;
        HomeTeamName: string;
        GuestTeamName: string;
        HomeTeamID: string;
        GuestTeamID: string;
        HomeGoals: number;
        GuestGoals: number;
        RoundID: string;
        StageID: string;
        TimzeZone: number;
        TVChannel: string;
        OnlineChannel: string;
        
    }

    export class Match_GetListViewModel {   

        public LeagueID = ko.observable<string>();
        public GroupID = ko.observable<string>();
        public ScheduleDate = ko.observable<Date>();
        public HomeTeamName = ko.observable<string>();
        public GuestTeamName = ko.observable<string>();
        public HomeTeamID = ko.observable<string>();
        public GuestTeamID = ko.observable<string>();
        public HomeGoals = ko.observable<number>();
        public GuestGoals = ko.observable<number>();
        public RoundID = ko.observable<string>();
        public StageID = ko.observable<string>();
        public TimzeZone = ko.observable<number>();
        public TVChannel = ko.observable<string>();
        public OnlineChannel = ko.observable<string>();

        constructor(data?: IMatch_GetList) {
            if (data) this.fromJS(data);
        }

        toJS() {
            return <IMatch_GetList>{                

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
        }

        fromJS(data: IMatch_GetList) {
            if(!data) return;
            this.LeagueID (data.LeagueID);
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
        }

        clear() {
            
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
        }

        SelectAll(callback: any) {
            $.getJSON("http://localhost:9999/api.svc/Match_GetList", callback);
        }
    }
}
