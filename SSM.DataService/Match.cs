//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SSM.DataService
{
    using System;
    using System.Collections.Generic;
    
    public partial class Match
    {
        public int MatchID { get; set; }
        public System.DateTime ScheduleDate { get; set; }
        public string LeagueID { get; set; }
        public string HomeTeamID { get; set; }
        public string GuestTeamID { get; set; }
        public string TVChannel { get; set; }
        public string OnlineChannel { get; set; }
        public string RoundID { get; set; }
        public string StageID { get; set; }
        public byte TimzeZone { get; set; }
        public Nullable<byte> HomeGoals { get; set; }
        public Nullable<byte> GuestGoals { get; set; }
    }
}
