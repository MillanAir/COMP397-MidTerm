var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.PLAY = 1;
        Scene.END = 2;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 1280;
        Screen.HEIGHT = 720;
        Screen.CENTER_X = 640;
        Screen.CENTER_Y = 360;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map