/// <reference path="../../../SSM.Shared/SSM.d.ts" />

module SSM {
    export function match_getlist(params: any, viewInfo: any) {
        var shouldReload = false;
        var isReady = $.Deferred();
        var openCreateViewAsRoot = viewInfo.layoutController.name === "split";
        var store = <DevExpress.data.ODataStore>db["Match_GetList"];
        var dataSource: DevExpress.data.DataSource;
        var dataSourceObservable = ko.observable<DevExpress.data.DataSource>();

        function handleMatch_GetListModification() {
            shouldReload = true;
        }

        function handleViewShown() {
            if (!dataSourceObservable()) {
                dataSourceObservable(dataSource);
                dataSource.load().always(function () {
                    isReady.resolve();
                });
            }
            else if (shouldReload) {
                refreshList();
            }
        }

        dataSource = new DevExpress.data.DataSource({
            store: store,
            map: function (item) {
                return new Match_GetListViewModel(item);
            }
        });

        function handleViewDisposing() {
            store.off("modified", handleMatch_GetListModification);
        }

        function handleDataSourceChanged() {
            isReady.resolve();
            dataSource.off("changed", handleDataSourceChanged);
        }

        function refreshList() {
            dataSource.pageIndex(0);
            dataSource.load();
        }

        dataSource.on("changed", handleDataSourceChanged);

        store.on("modified", handleMatch_GetListModification);

        return {
            isReady: isReady.promise(),
            dataSource: dataSource,
            refreshList: refreshList,
            viewShown: handleViewShown,
            viewDisposing: handleViewDisposing,
            openCreateViewAsRoot: openCreateViewAsRoot
        };
    }
    
}