import { board } from './board.js'
import { ctx } from './index.js'

export const zones = {
    one: {
        in: false,
        x1: canvas.width / 2 - board.size * 1.5,
        x2: canvas.width / 2 - board.size / 2,
        cx: ((canvas.width / 2 - board.size / 2) + (canvas.width / 2 - board.size * 1.5)) / 2,
        y1: canvas.height / 2 - board.size * 1.5,
        y2: canvas.height / 2 - board.size / 2,
        cy: ((canvas.height / 2 - board.size / 2) + (canvas.height / 2 - board.size * 1.5)) / 2
    },

    two: {
        in: false,
        x1: canvas.width / 2 - board.size / 2,
        x2: canvas.width / 2 + board.size / 2,
        cx: ((canvas.width / 2 + board.size / 2) + (canvas.width / 2 - board.size / 2)) / 2,
        y1: canvas.height / 2 - board.size * 1.5,
        y2: canvas.height / 2 - board.size / 2,
        cy: ((canvas.height / 2 - board.size / 2) + (canvas.height / 2 - board.size * 1.5)) / 2
    },

    three: {
        in: false,
        x1: canvas.width / 2 + board.size / 2,
        x2: canvas.width / 2 + board.size * 1.5,
        cx: ((canvas.width / 2 + board.size * 1.5) + (canvas.width / 2 + board.size / 2)) / 2,
        y1: canvas.height / 2 - board.size * 1.5,
        y2: canvas.height / 2 - board.size / 2,
        cy: ((canvas.height / 2 - board.size / 2) + (canvas.height / 2 - board.size * 1.5)) / 2
    },

    four: {
        in: false,
        x1: canvas.width / 2 - board.size * 1.5,
        x2: canvas.width / 2 - board.size / 2,
        cx: ((canvas.width / 2 - board.size / 2) + (canvas.width / 2 - board.size * 1.5)) / 2,
        y1: canvas.height / 2 - board.size / 2,
        y2: canvas.height / 2 + board.size / 2,
        cy: ((canvas.height / 2 + board.size / 2) + (canvas.height / 2 - board.size / 2)) / 2
    },

    five: {
        in: false,
        x1: canvas.width / 2 - board.size / 2,
        x2: canvas.width / 2 + board.size / 2,
        cx: ((canvas.width / 2 + board.size / 2) + (canvas.width / 2 - board.size / 2)) / 2,
        y1: canvas.height / 2 - board.size / 2,
        y2: canvas.height / 2 + board.size / 2,
        cy: ((canvas.height / 2 + board.size / 2) + (canvas.height / 2 - board.size / 2)) / 2
    },

    six: {
        in: false,
        x1: canvas.width / 2 + board.size / 2,
        x2: canvas.width / 2 + board.size * 1.5,
        cx: ((canvas.width / 2 + board.size * 1.5) + (canvas.width / 2 + board.size / 2)) / 2,
        y1: canvas.height / 2 - board.size / 2,
        y2: canvas.height / 2 + board.size / 2,
        cy: ((canvas.height / 2 + board.size / 2) + (canvas.height / 2 - board.size / 2)) / 2
    },

    seven: {
        in: false,
        x1: canvas.width / 2 - board.size * 1.5,
        x2: canvas.width / 2 - board.size / 2,
        cx: ((canvas.width / 2 - board.size / 2) + (canvas.width / 2 - board.size * 1.5)) / 2,
        y1: canvas.height / 2 + board.size / 2,
        y2: canvas.height / 2 + board.size * 1.5,
        cy: ((canvas.height / 2 + board.size * 1.5) + (canvas.height / 2 + board.size / 2)) / 2
    },

    eight: {
        in: false,
        x1: canvas.width / 2 - board.size / 2,
        x2: canvas.width / 2 + board.size / 2,
        cx: ((canvas.width / 2 + board.size / 2) + (canvas.width / 2 - board.size / 2)) / 2,
        y1: canvas.height / 2 + board.size / 2,
        y2: canvas.height / 2 + board.size * 1.5,
        cy: ((canvas.height / 2 + board.size * 1.5) + (canvas.height / 2 + board.size / 2)) / 2
    },

    nine: {
        in: false,
        x1: canvas.width / 2 + board.size / 2,
        x2: canvas.width / 2 + board.size * 1.5,
        cx: ((canvas.width / 2 + board.size * 1.5) + (canvas.width / 2 + board.size / 2)) / 2,
        y1: canvas.height / 2 + board.size / 2,
        y2: canvas.height / 2 + board.size * 1.5,
        cy: ((canvas.height / 2 + board.size * 1.5) + (canvas.height / 2 + board.size / 2)) / 2
    },
}