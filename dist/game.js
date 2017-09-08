System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DIMENSION, game;
    function boardLoop(board, fn) {
        for (var row = 0; row < DIMENSION; row++) {
            for (var col = 0; col < DIMENSION; col++) {
                fn(board[row][col], { row: row, col: col });
            }
        }
    }
    return {
        setters:[],
        execute: function() {
            DIMENSION = 3;
            game = {
                /**
                 * Create a new board (2D array)
                 */
                createBoard: function () {
                    var board = [];
                    for (var row = 0; row < DIMENSION; row++) {
                        board[row] = [];
                        for (var col = 0; col < DIMENSION; col++) {
                            board[row][col] = null;
                        }
                    }
                    return board;
                },
                /**
                 * NON-DESTRUCTIVE, PURE function for returning a new board with the
                 * given cell updated
                 */
                set: function (board, val, row, col) {
                    if (board[row][col] != null) {
                        console.warn("Attempted to set on cell that has a value: row: " + row + " col: " + col + " value: " + val);
                        return board;
                    }
                    return board.slice(0, row).concat([
                        board[row].slice(0, col).concat([
                            val
                        ], board[row].slice(col + 1))
                    ], board.slice(row + 1));
                },
                /**
                 * Check a slice of the board for winner
                 */
                check: function (arr) {
                    var clone = arr.slice(0);
                    var sum = 0;
                    while (clone.length) {
                        var val = clone.pop();
                        if (val == null) {
                            return;
                        }
                        sum += val;
                    }
                    if (sum === 0 || sum === DIMENSION) {
                        return {
                            winner: sum / DIMENSION || 0
                        };
                    }
                    return;
                },
                /**
                 * Check if there is a winner on the board
                 */
                checkBoard: function (board) {
                    var winner;
                    // Check rows
                    winner = board.reduce(function (hasWon, row) { return hasWon || game.check(row); }, false);
                    // Check cols
                    var cols = [];
                    var _loop_1 = function(i) {
                        cols.push(board.map(function (row) { return row[i]; }));
                    };
                    for (var i = 0; i < DIMENSION; i++) {
                        _loop_1(i);
                    }
                    winner = winner || cols.reduce(function (hasWon, col) { return hasWon || game.check(col); }, false);
                    // Check diagonals
                    var diagonals = [
                        board.map(function (row, i) { return row[i]; }),
                        board.map(function (row, i) { return row[DIMENSION - 1 - i]; })
                    ];
                    winner = winner || diagonals.reduce(function (hasWon, diagonal) { return hasWon || game.check(diagonal); }, false);
                    return winner;
                },
                display: function (board) {
                    var display = '';
                    var prevRow;
                    boardLoop(board, function (val, coord) {
                        if (coord.row !== prevRow) {
                            display += '\n';
                            prevRow = coord.row;
                        }
                        display += (val == null ? '-' : val) + " ";
                    });
                    display += '\n';
                    console.log(display);
                }
            };
            exports_1("default",game);
        }
    }
});
//# sourceMappingURL=game.js.map