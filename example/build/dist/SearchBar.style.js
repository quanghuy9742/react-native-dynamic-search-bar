"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_native_helpers_1 = require("@freakycoder/react-native-helpers");
function container(props) {
    const { height = 35, width = react_native_helpers_1.ScreenWidth * 0.93, backgroundColor = "#fff", borderRadius = 10 } = props;
    return {
        width: width,
        height: height,
        borderRadius,
        backgroundColor,
        paddingLeft: 8,
        paddingRight: 8
    };
}
exports.container = container;
function textInputStyle(fontSize = 13, fontColor = "#b3b6c3") {
    return {
        ...react_native_1.Platform.select({
            android: {
                padding: 0,
                margin: 0,
                borderWidth: 0
            },
            ios: {
                bottom: 1
            }
        }),
        marginLeft: 24,
        color: fontColor,
        fontSize: fontSize,
        width: react_native_helpers_1.ScreenWidth * 0.7
    };
}
exports.textInputStyle = textInputStyle;
function _shadowStyle(shadowColor = "#757575") {
    return {
        ...react_native_1.Platform.select({
            ios: {
                shadowColor,
                shadowRadius: 5,
                shadowOpacity: 0.3,
                shadowOffset: { width: 2, height: 1 }
            },
            android: { elevation: 5 }
        })
    };
}
exports._shadowStyle = _shadowStyle;
function ifIPhoneXHeader(noExtraMargin) {
    if (noExtraMargin)
        return { marginTop: 16 };
    return {
        marginTop: react_native_helpers_1.isIPhoneXFamily() ? 44 : 16
    };
}
exports.ifIPhoneXHeader = ifIPhoneXHeader;
exports.default = react_native_1.StyleSheet.create({
    containerGlue: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    searchStyle: {
        top: 2,
        flex: 1,
        flexDirection: "row"
    },
    textInputContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    center: {
        alignSelf: "center",
        alignContent: "center"
    }
});
