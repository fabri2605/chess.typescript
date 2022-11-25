import React from 'react';
import classes from './Tile.module.css';

export interface piecex {
    alt: string;
    url: string;
    x: string;
    y: number;
}
interface Props {
    numberV: number,
    numberH: number,
    defaultt: boolean,
    onMove: (smth : string)=> void,
}

const horizontalAxis: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const defaultPieces = [
    // white_pawns
    { alt: 'pawn', url: '/images/pawn_w.png', x: 'a', y: 1 },
    { alt: 'pawn', url: '/images/pawn_w.png', x: 'b', y: 1 },
    { alt: 'pawn', url: '/images/pawn_w.png', x: 'c', y: 1 },
    { alt: 'pawn', url: '/images/pawn_w.png', x: 'd', y: 1 },
    { alt: 'pawn', url: '/images/pawn_w.png', x: 'e', y: 1 },
    { alt: 'pawn', url: '/images/pawn_w.png', x: 'f', y: 1 },
    { alt: 'pawn', url: '/images/pawn_w.png', x: 'g', y: 1 },
    { alt: 'pawn', url: '/images/pawn_w.png', x: 'h', y: 1 },
    //alt: 'pawn'  white_pieces
    { alt: 'rook', url: '/images/rook_w.png', x: 'a', y: 0 },
    { alt: 'knight', url: '/images/knight_w.png', x: 'b', y: 0 },
    { alt: 'bishop', url: '/images/bishop_w.png', x: 'c', y: 0 },
    { alt: 'queen', url: '/images/queen_w.png', x: 'd', y: 0 },
    { alt: 'king', url: '/images/king_w.png', x: 'e', y: 0 },
    { alt: 'bishop', url: '/images/bishop_w.png', x: 'f', y: 0 },
    { alt: 'knight', url: '/images/knight_w.png', x: 'g', y: 0 },
    { alt: 'rook', url: '/images/rook_w.png', x: 'h', y: 0 },
    //alt: 'pawn'  black_pawns
    { alt: 'pawn', url: '/images/pawn_b.png', x: 'a', y: 6 },
    { alt: 'pawn', url: '/images/pawn_b.png', x: 'b', y: 6 },
    { alt: 'pawn', url: '/images/pawn_b.png', x: 'c', y: 6 },
    { alt: 'pawn', url: '/images/pawn_b.png', x: 'd', y: 6 },
    { alt: 'pawn', url: '/images/pawn_b.png', x: 'e', y: 6 },
    { alt: 'pawn', url: '/images/pawn_b.png', x: 'f', y: 6 },
    { alt: 'pawn', url: '/images/pawn_b.png', x: 'g', y: 6 },
    { alt: 'pawn', url: '/images/pawn_b.png', x: 'h', y: 6 },
    // black_pieces
    { alt: 'rook', url: '/images/rook_b.png', x: 'a', y: 7 },
    { alt: 'knight', url: '/images/knight_b.png', x: 'b', y: 7 },
    { alt: 'bishop', url: '/images/bishop_b.png', x: 'c', y: 7 },
    { alt: 'queen', url: '/images/queen_b.png', x: 'd', y: 7 },
    { alt: 'king', url: '/images/king_b.png', x: 'e', y: 7 },
    { alt: 'bishop', url: '/images/bishop_b.png', x: 'f', y: 7 },
    { alt: 'knight', url: '/images/knight_b.png', x: 'g', y: 7 },
    { alt: 'rook', url: '/images/rook_b.png', x: 'h', y: 7 },
];

export const Pieces = ({ defaultt, numberV, numberH, onMove }: Props) => {

    const moving = (val: string) => {
        onMove(val);
    };

    //definiendo la pieza
    let piece: piecex = {alt:'',url:'',x:'',y:0};
    defaultPieces.forEach((e) => {
        if (e.x === horizontalAxis[numberH] && defaultt) {
            if (e.y === numberV) {
                piece = {...e};
            }
        }
    });

    const value = horizontalAxis[numberH] + '' + (numberV + 1);

    if (piece !== null) {
        return (
            <div
                onClick={() => moving(value)}
                className={classes.pieces}
            >
                <img
                    className={value}
                    alt={piece.alt}
                    src={piece.url}
                />
            </div>
        );
    } else {
        return (
            <div
                onClick={() => moving(value)}
                className={classes.pieces}
            >
                <div className={value} />
            </div>
        );
    }
};
