import { NativeUI, startApp, t } from "mendix/native";
import { navigationStyle } from "C:/Users/Rick.wilson/projects/dynamicLink/test/MxTestProject/theme/styles.js";

startApp({
    "cacheBust": "637281849515701695",
    "languages": [
        "en_US"
    ],
    "navigationStyle": navigationStyle,
    "getTabs": () => ( [
        {
            "pageName": "MyFirstModule.Home_Native",
            "caption": t( [
                "Home"
            ] ),
            "icon": {
                "type": "glyph",
                "iconClass": "glyphicon-home"
            }
        }
    ] ),
    "onStartupNativeClient": () => {
        NativeUI.registerPage("MyFirstModule.Home_Native", require("C:/Users/Rick.wilson/projects/dynamicLink/test/MxTestProject/deployment/native/pages/MyFirstModule.Home_Native"), {"headerRegionName":"header","showBottomBar":true});
    }
});