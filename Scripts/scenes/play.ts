// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        private _rollButton: objects.Button;
        private _die: createjs.Bitmap[];

        private _faceOne =0;
        private _faceTwo =0;
        private _faceThree =0;
        private _faceFour =0;
        private _faceFive =0;
        private _faceSix =0;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            console.log("Starting the start() method");

            // //Add Play Label
            // this._playLabel = new objects.Label(
            //     "PLAY SCENE","60px Consolas", 
            //     "#000000", 
            //     config.Screen.CENTER_X,config.Screen.CENTER_Y);
            // this.addChild(this._playLabel);

            // add roll button to the scene
            this._rollButton = new objects.Button("rollButton", 640, 360 + 300);
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._rollButtonClick, this);
            console.log("Added roll button");
            
            //Initialize Bitmap Array
            this._initializeBitmapArray();
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        private _spinDie(): string[] {
            var river = [" ", " "];
            var outCome = [0, 0];

            for (var spin = 0; spin < 2; spin++) {
                outCome[spin] = Math.floor((Math.random() * 100) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 1, 20):
                        river[spin] = "faceOne";
                        this._faceOne++;
                        break;
                    case this._checkRange(outCome[spin], 21,40):
                        river[spin] = "faceTwo";
                        this._faceTwo++;
                        break;
                    case this._checkRange(outCome[spin], 41,60):
                        river[spin] = "faceThree";
                        this._faceThree++;
                        break;
                    case this._checkRange(outCome[spin], 61,80):
                        river[spin] = "faceFour";
                        this._faceFour++;
                        break;
                    case this._checkRange(outCome[spin], 81,90):
                        river[spin] = "faceFive";
                        this._faceFive++;
                        break;
                    case this._checkRange(outCome[spin], 91,100):
                        river[spin] = "faceSix";
                        this._faceSix++;
                        break;                    
                }
            }
            return river;
        }
        
        //Initialize array of bitmaps 
        private _initializeBitmapArray(): void {

            this._die = new Array<createjs.Bitmap>();
            for (var dice: number = 0; dice < 2; dice++) {
                this._die[dice] = new createjs.Bitmap(assets.getResult("faceOne"));
                this._die[dice].y = 350;
                this._die[dice].x = 545 + (dice * 100);
                this.addChild(this._die[dice]);
            }
        }
        
        //Randomize array of bitmaps 
        private _randomizeBitmapArray(one , two): void {

            this._die = new Array<createjs.Bitmap>();
            
                this._die[0] = new createjs.Bitmap(assets.getResult(one));
                this._die[0].y = 350;
                this._die[0].x = 545;                
                this.addChild(this._die[0]);
                
                this._die[1] = new createjs.Bitmap(assets.getResult(two));
                this._die[1].y = 350;
                this._die[1].x = 645;                
                this.addChild(this._die[1]);        
           
        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        private _rollButtonClick(event: createjs.MouseEvent): void {
            console.log("Roll Button");
            this._rollDie();
        }
        
        //PRIVATE METHODS +++++++++++++
        private _rollDie() {
            
            console.log("Randomizing");
            var bitmap: string[] = this._spinDie();            
            this._randomizeBitmapArray(bitmap[0], bitmap[1]);
            
        }
        
        private _checkRange(value: number, lowerBounds: number, upperBounds: number): number {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        }

    }
}