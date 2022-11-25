import { useContext, useState } from 'react';
import { CtxProvider, GameContext } from './components/GameContext';

import { BackBoard } from './components/Board';
import Chessboard from './components/Chessboard';

export const App = () => {
    const { myPiece } = useContext(GameContext);

    return (
        <CtxProvider>
            <div style={{ textAlign: 'center' }}>
                <h3>{myPiece + ''}</h3>
                <BackBoard />
                <Chessboard />
            </div>
        </CtxProvider>
    );
};
