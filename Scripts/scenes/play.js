var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
            this._faceOne = 0;
            this._faceTwo = 0;
            this._faceThree = 0;
            this._faceFour = 0;
            this._faceFive = 0;
            this._faceSix = 0;
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            console.log("Starting the start() method");
            // //Add Play Label
            // this._playLabel = new objects.Label(
            //     "PLAY SCENE","60px Consolas", 
            //     "#000000", 
            //     config.Screen.CENTER_X,config.Screen.CENTER_Y);
            // this.addChild(this._playLabel);
            //Add First dice label
            this._diceLabel1 = new objects.Label("one", "20px Consolas", "#000000", 580, 450);
            this.addChild(this._diceLabel1);
            //Add Second dice label
            this._diceLabel2 = new objects.Label("one", "20px Consolas", "#000000", 680, 450);
            this.addChild(this._diceLabel2);
            // add roll button to the scene
            this._rollButton = new objects.Button("rollButton", 640, 360 + 300);
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._rollButtonClick, this);
            console.log("Added roll button");
            //Initialize Bitmap Array
            this._initializeBitmapArray();
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        Play.prototype._spinDie = function () {
            var river = [" ", " "];
            var outCome = [0, 0];
            for (var spin = 0; spin < 2; spin++) {
                outCome[spin] = Math.floor((Math.random() * 100) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 1, 20):
                        river[spin] = "faceOne";
                        this._faceOne++;
                        break;
                    case this._checkRange(outCome[spin], 21, 40):
                        river[spin] = "faceTwo";
                        this._faceTwo++;
                        break;
                    case this._checkRange(outCome[spin], 41, 60):
                        river[spin] = "faceThree";
                        this._faceThree++;
                        break;
                    case this._checkRange(outCome[spin], 61, 80):
                        river[spin] = "faceFour";
                        this._faceFour++;
                        break;
                    case this._checkRange(outCome[spin], 81, 90):
                        river[spin] = "faceFive";
                        this._faceFive++;
                        break;
                    case this._checkRange(outCome[spin], 91, 100):
                        river[spin] = "faceSix";
                        this._faceSix++;
                        break;
                }
            }
            return river;
        };
        //Initialize array of bitmaps 
        Play.prototype._initializeBitmapArray = function () {
            this._die = new Array();
            for (var dice = 0; dice < 2; dice++) {
                this._die[dice] = new createjs.Bitmap(assets.getResult("faceOne"));
                this._die[dice].y = 350;
                this._die[dice].x = 545 + (dice * 100);
                this.addChild(this._die[dice]);
            }
        };
        //Randomize array of bitmaps 
        Play.prototype._randomizeBitmapArray = function (one, two) {
            this._die = new Array();
            this._die[0] = new createjs.Bitmap(assets.getResult(one));
            this._die[0].y = 350;
            this._die[0].x = 545;
            this.addChild(this._die[0]);
            this._die[1] = new createjs.Bitmap(assets.getResult(two));
            this._die[1].y = 350;
            this._die[1].x = 645;
            this.addChild(this._die[1]);
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Play.prototype._rollButtonClick = function (event) {
            console.log("Roll Button");
            this._rollDie();
        };
        //PRIVATE METHODS +++++++++++++
        Play.prototype._rollDie = function () {
            console.log("Randomizing");
            var bitmap = this._spinDie();
            this._randomizeBitmapArray(bitmap[0], bitmap[1]);
            console.log(bitmap[0] + " , " + bitmap[1]);
            //Add First dice label
            this._diceLabel1.text = bitmap[0];
            //Add Second dice label
            this._diceLabel2.text = bitmap[1];
        };
        Play.prototype._checkRange = function (value, lowerBounds, upperBounds) {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map