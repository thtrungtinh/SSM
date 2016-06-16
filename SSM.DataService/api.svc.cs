using System;
using System.Collections.Generic;
using System.Data.Services;
using System.Data.Services.Common;
using System.Data.Services.Providers;
using System.Linq;
using System.ServiceModel.Web;
using System.Web;

namespace SSM.DataService
{
#if DEBUG
	[System.ServiceModel.ServiceBehavior(IncludeExceptionDetailInFaults = true)]
#endif
    [JSONPSupportBehavior]
    public class DataService : DataService<SOCCER_SCHEDULEEntities>, IServiceProvider
    {
        // This method is called only once to initialize service-wide policies.
        public static void InitializeService(DataServiceConfiguration config)
        {
            // TODO: set rules to indicate which entity sets and service operations are visible, updatable, etc.
            // Examples:
            // config.SetEntitySetAccessRule("MyEntityset", EntitySetRights.AllRead);
            // config.SetServiceOperationAccessRule("MyServiceOperation", ServiceOperationRights.All);
            config.SetEntitySetAccessRule("*", EntitySetRights.All);
            config.SetServiceOperationAccessRule("Match_GetList", ServiceOperationRights.AllRead);
            config.DataServiceBehavior.MaxProtocolVersion = DataServiceProtocolVersion.V3;
#if DEBUG
			config.UseVerboseErrors = true;
#endif
        }
        public object GetService(Type serviceType)
        {
            if (serviceType == typeof(IDataServiceStreamProvider))
            {
                // Return the stream provider to the data service.
                return new ImageStreamProvider();
            }
            return null;
        }

        [WebGet]
        public List<Match_GetList_Result> Match_GetList(string groupID)
        {
            return CurrentDataSource.Match_GetList(groupID).ToList();
        }
    }
}
