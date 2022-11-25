import { useContext, useState } from 'react';
import { CtxProvider, GameContext } from './components/GameContext';

import { BackBoard } from './components/Board';
import Chessboard from './components/Chessboard';

export const App = () => {
    const { myPiece, movement } = useContext(GameContext);
    const [piece, setPiece] = useState(myPiece);

    const changing = (e : string) => {
        setPiece(e);
        movement(e);
    };

    return (
        <CtxProvider>
            <div style={{ textAlign: 'center' }}>
                <h3>{myPiece + ''}</h3>
                <BackBoard />
                <Chessboard changePiece={(e:string)=>{changing(e)}} />
            </div>
        </CtxProvider>
    );
};
