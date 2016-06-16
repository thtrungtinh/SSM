/// <reference path="../SSM.Shared/SSM.d.ts" />

interface External { Notify(arg: string): any; }

module SSM {
    $(function() {
        var startupView = "LeagueTeams";
        DevExpress.devices.current("desktop");

        app = new DevExpress.framework.html.HtmlApplication({
            namespace: SSM,
            layoutSet: DevExpress.framework.html.layoutSets[SSM.config.layoutSet],
            animationSet: DevExpress.framework.html.animationSets[SSM.config.animationSet],
            mode: "webSite",
            navigation: SSM.config.navigation,
            commandMapping: SSM.config.commandMapping,
            navigateToRootViewMode: "keepHistory",
            useViewTitleAsBackText: true
        });

        $(window).unload(function() {
            app.saveState();
        });

        app.router.register(":view/:id", { view: startupView, id: undefined });
        app.navigate();
    });
}