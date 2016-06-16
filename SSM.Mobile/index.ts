/// <reference path="../SSM.Shared/SSM.d.ts" />

interface External { Notify(arg: string): any; }

module SSM {
    $(function() {
        var startupView = "LeagueTeams";

        // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
        // DevExpress.devices.current({ platform: "generic" });

        if(DevExpress.devices.real().platform === "win8") {
            $("body").css("background-color", "#000");
        }

        $(document).on("deviceready", function () {
            navigator["splashscreen"].hide();
            if (window["devextremeaddon"]) {
                window["devextremeaddon"].setup();
            }
            $(document).on("backbutton", function () {
                DevExpress.processHardwareBackButton();
            });
        });

        function onNavigatingBack(e) {
            if(e.isHardwareButton && !SSM.app.canBack()) {
                e.cancel = true;
                exitApp();
            }
        }

        function exitApp() {
            switch (DevExpress.devices.real().platform) {
                case "android":
                    navigator["app"].exitApp();
                    break;
                case "win8":
                    window.external.Notify("DevExpress.ExitApp");
                    break;
            }
        }

        app = new DevExpress.framework.html.HtmlApplication({
            namespace: SSM,
            layoutSet: DevExpress.framework.html.layoutSets[SSM.config.layoutSet],
            animationSet: DevExpress.framework.html.animationSets[SSM.config.animationSet],
            navigation: SSM.config.navigation,
            commandMapping: SSM.config.commandMapping,
            navigateToRootViewMode: "keepHistory",
            useViewTitleAsBackText: true
        });

        $(window).unload(function() {
            app.saveState();
        });

        app.router.register(":view/:id", { view: startupView, id: undefined });
        SSM.app.on("navigatingBack", onNavigatingBack);
        app.navigate();
    });
}