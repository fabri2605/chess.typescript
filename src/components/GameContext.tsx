import React, { useEffect, useState, useCallback } from 'react';
import { Cells } from './Chessboard';

const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

interface ctxInter {
    myPiece: string;
    Board: Cells[];
    setBoard: (smth: Cells[]) => void;
    movement: (smth: string) => void;
}

export const GameContext = React.createContext({} as ctxInter);

export const CtxProvider = ({ children }: any) => {
    const [myPiece, setPiece] = useState<string>('e 2');
    const [Board, setBoard] = useState<Cells[]>([]);

    useEffect(() => {
        console.log('ctx useEffect myPiece: ' + myPiece);
    }, [myPiece]);

    useEffect(() => {
        console.log(Board);
    }, [Board]);

    const finishMove = useCallback( (tile: string) => {
        console.log('FINISHING');
        let place: Cells;
        let piece: Cells;
        let myPlace = tile;
        if (Board.length === 0) console.log('board is empty');
        // Board seems to be empty
        Board.forEach((e) => {
            console.log(e);
            /* if (e.key === myPiece) {
                console.log('found');
                piece = e;
            }
            if (e.key === myPlace) {
                console.log('found x2');
                place = e;
            } */
        });
        setPiece('');
        /* setBoard(
            Board.map((e) => {
                if (e.key === place.key) {
                    console.log({ ...piece });
                    return {
                        ...piece,
                        key: place.key,
                         props: {
                                ...piece.props,
                                numberV: place.props.numberV,
                                numberH: place.props.numberH,
                            },
                        numberV: place.props.numberV,
                        numberH: place.props.numberH,
                    };
                }
                if (e.key === piece.key) {
                    return (
                        <Pieces
                            numberV={e.props.numberV}
                            numberH={e.props.numberH}
                            key={
                                horizontalAxis[e.props.numberH] +
                                ' ' +
                                verticalAxis[e.props.numberV]
                            }
                            defaultt={false}
                            onMove={movement}
                        ></Pieces>
                    );
                }
                return e;
            })
        ); */
    }, [Board]);

    const movement = (pieceOrPlace: string = '') => {
        if (pieceOrPlace === '') {
            setPiece('');
            return;
        }
        const tile = pieceOrPlace.charAt(0) + ' ' + pieceOrPlace.charAt(1);
        if (myPiece.length === 0) {
            console.log('IF');
            setPiece(tile);
        } else {
            console.log('ELSE');
            finishMove(tile);
        }
    };

    return (
        <GameContext.Provider
            value={{
                myPiece,
                Board,
                setBoard,
                movement,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
