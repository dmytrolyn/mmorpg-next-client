import React from 'react';
import Image from 'next/image';

import cn from 'classnames';
import styles from './styles/styles.module.css';

import prevArr from './assets/prev-icon.png';
import nextArr from './assets/next-icon.png';

interface PaginationProps {
    current: number,
    all: number,
    changePage: (p: number) => void,
    options?: {
        buttonsVisible?: number,
        activeButtonCenterOffset?: number
        separator?: string
    }
}

const Pagination: React.FC<PaginationProps> = ({ current, all, changePage, options }) => {
    const pageNumbers = [...Array(all)].map((y, index) => ++index);
    const separator = options?.separator || "..";

    const visibleButtons = options?.buttonsVisible || 6;
    const paginationRequired = all > visibleButtons;

    const activeButtonCenterOffset = options?.activeButtonCenterOffset || 2;

    const leftLimit = visibleButtons - 1;
    const middleLimit = visibleButtons - 2;
    const rightLimit = all - middleLimit;

    const leftSeparatorRequired = current < leftLimit;
    const rightSeparatorRequired = current > rightLimit;
    const bothSeparatorsRequired = current <= rightLimit && current >= leftLimit;

    const button = (x: number) => <button type="button" key={x} 
        onClick={() => changePage(x)} 
        className={cn(
            styles.button,
            current === x && styles.active
            )
        }>{x}</button>

    const separatorElement = (s: string, salt: number) => <div key={salt + s} className={styles.separator}>{s}</div>

    const createButtonsChunks = () => {
        if(paginationRequired) {
            if(leftSeparatorRequired) {
                let leftChunk = [...[...pageNumbers].splice(0, leftLimit)];
                let rightChunk = [pageNumbers[all - 1]];
                return [leftChunk, rightChunk];
            } 
            else if(bothSeparatorsRequired) {
                let leftChunk = [1];
                let middleChunk = [...[...pageNumbers].splice(current - activeButtonCenterOffset, middleLimit)];
                let rightChunk = [pageNumbers[all - 1]];
                return [leftChunk, middleChunk, rightChunk];
            } 
            else if(rightSeparatorRequired) {
                let leftChunk = [1];
                let rightChunk = [...[...pageNumbers].splice(all - leftLimit, visibleButtons)]
                return [leftChunk, rightChunk];
            } 
        }
        return [pageNumbers];
    }

    const renderButtons = (chunksArray: Array<Array<number>>) => chunksArray.reduce<Array<JSX.Element>>((result, chunk, index, array) => {
        let buttons = chunk.map(item => button(item));
        if(array.length - 1 !== index) return result.concat(buttons, separatorElement(separator, index));
        else return result.concat(buttons);
    }, []);

    return (
        all > 1 ? <div className={styles.wrap}>
            <div className={styles.buttons}>
                <button type="button" disabled={current === 1} onClick={() => changePage(current - 1)} className={cn(styles.button, styles.arrow)}><Image src={prevArr} alt="prev-arrow" /></button>
                {renderButtons(createButtonsChunks())}
                <button type="button" disabled={current === all} onClick={() => changePage(current + 1)} className={cn(styles.button, styles.arrow)}><Image src={nextArr} alt="next-arrow" /></button>
            </div>
        </div> : null
    )
};

export default React.memo(Pagination);