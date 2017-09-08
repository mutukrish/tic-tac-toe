System.register(['angular2/core', './game'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, game_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (game_1_1) {
                game_1 = game_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.currentPlayer = 0;
                    this.board = game_1.default.createBoard();
                }
                AppComponent.prototype.restart = function () {
                    this.board = game_1.default.createBoard();
                    this.winner = null;
                    this.currentPlayer = 0;
                };
                AppComponent.prototype.cellClicked = function (row, col) {
                    if (this.board[row][col] === 0 || this.board[row][col] === 1 || this.winner != null)
                        return;
                    this.currentPlayer++;
                    this.board[row][col] = this.currentPlayer % 2 ? 0 : 1;
                    var checkResult = game_1.default.checkBoard(this.board);
                    if (checkResult) {
                        this.winner = checkResult.winner;
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>Tic Tac Toe</h1>\n    <div class=\"board\">\n        <div *ngFor=\"#row of board;#rowNo=index\" class=\"row\">\n            <div *ngFor=\"#cell of row;#colNo=index\" class=\"cell\" (click)=\"cellClicked(rowNo, colNo)\">\n                <span class=\"marker\" *ngIf=\"cell===0\">X</span>\n                <span class=\"marker\" *ngIf=\"cell===1\">O</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"gameResults\" *ngIf=\"winner===0\">Winner: First Player</div>\n    <div class=\"gameResults\" *ngIf=\"winner===1\">Winner: Second Player</div>\n    <button class=\"restart\" (click)=\"restart()\">Restart</button>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map