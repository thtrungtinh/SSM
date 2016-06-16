/// <reference path="ts/jquery.d.ts" />
/// <reference path="ts/globalize.d.ts" />
/// <reference path="ts/knockout.d.ts" />
/// <reference path="ts/dx.all.d.ts" />

/// <reference path="data/leagueteams-view-model.ts" />

declare module SSM {
    export interface Config {
        layoutSet?: string;
        animationSet?: string;
        navigation: Array<DevExpress.framework.dxCommandOptions>;
        commandMapping: {
            [containderId: string]: {
                defaults?: DevExpress.framework.dxCommandOptions;
                commands?: DevExpress.framework.dxCommandOptions;
            }
        };
        endpoints: {
            [key: string]: {
                local?: string;
                production?: string;
            }
        };
        services: {
            [key: string]: {
                entities: {
                    [entityName: string]: {
						key?: any;
						keyType?: any;
					}
                }
            }
        };
    }

	export var config: Config;
	export var db: DevExpress.data.ODataContext;
    export var app: DevExpress.framework.html.HtmlApplication;
}