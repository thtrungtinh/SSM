/// <reference path="../SSM.d.ts" />
var SSM;
(function (SSM) {
    var isWinJS = "WinJS" in window;
    var endpointSelector = new DevExpress.EndpointSelector(SSM.config.endpoints);
    var serviceConfig = $.extend(true, {}, SSM.config.services, {
        db: {
            url: endpointSelector.urlFor("db"),
            // To enable JSONP support, uncomment the following line
            //jsonp: !isWinJS,
            // To allow cookies and HTTP authentication with CORS, uncomment the following line
            // withCredentials: true,
            errorHandler: handleServiceError
        }
    });
    function handleServiceError(error) {
        alert(error.message);
    }
    // Enable partial CORS support for IE < 10    
    $.support.cors = true;
    SSM.db = new DevExpress.data.ODataContext(serviceConfig.db);
})(SSM || (SSM = {}));
//# sourceMappingURL=db.js.map