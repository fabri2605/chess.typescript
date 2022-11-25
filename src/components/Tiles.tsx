import React from 'react';
import classes from './Tile.module.css';

const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

interface Props {
    numberV: number;
    numberH: number;
}

const Tiles = ({ numberV, numberH }: Props) => {
    const random = Math.random() * 100;
    const number = numberV + numberH + 2;
    return (
        <div
            //value exited
            key={random}
            className={
                number % 2 === 0 ? classes['black-tile'] : classes['white-tile']
            }
        >
            <div className={horizontalAxis[numberH] + '' + (numberV + 1)}>
                [{horizontalAxis[numberH]}
                {numberV + 1}]
            </div>
        </div>
    );
};

export default Tiles;
