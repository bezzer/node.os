/**
 * Created by yeliex
 */

(function () {
    module.exports = (function () {
        var os;
        var that = require("os");
        switch (that.platform()) {
            case "browser":
            {
                // 浏览器时,正则判断US
                os = (function () {
                    var release = require("os").release();
                    if (release.match(/iPad|iPhone/g)) {
                        return "ios";
                    }
                    if (release.match(/Macintosh|Mac OS X/g)) {
                        return "osx";
                    }
                    if (release.match(/Windows/g)) {
                        return "win";
                    }
                    if (release.match(/Android/g)) {
                        return "android";
                    }
                    if (release.match(/Linux/g)) {
                        return "linux";
                    }
                    return "other";
                }());
                break;
            }
            case "darwin":
            {
                os = "osx";
                break;
            }
        }
        that.isWin = (function () {
            return os == "win";
        }());
        that.isOSX = (function () {
            return os == "osx";
        }());
        that.isLinux = (function () {
            return os == "linux";
        }());
        that.isIOS = (function () {
            return os == "ios";
        }());
        that.isAndroid = (function () {
            return os == "android";
        }());
        that.isBrowser = (function () {
            return platform == "browser";
        }());
        that.os = os;
        that.platform = that.platform();
        return that;
    }());
}());