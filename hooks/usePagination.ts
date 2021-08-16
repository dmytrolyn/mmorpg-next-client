import { useState, useEffect, useCallback } from 'react';

interface PaginationOptions {
    pageSize: number
}

const paginate = (array: Array<any>, page: number, all: number, options: PaginationOptions) => {
    if(page === 1) return [...array].splice(0, options.pageSize * page);
    else if (page < all && page > 1) return [...array].splice(options.pageSize * (page - 1), options.pageSize);
    else if (page === all) return [...array].splice(options.pageSize * (page - 1));
    return array;
}

const validatePageNumber = (p: number, all: number): number => {
    if (p >= 1 && p <= all) return p;
    else if(p > all) return --p;
    else if(p < 1) return ++p;

    return p;
}

const usePagination = (dataset: any[], pageSize: number): [any[], number, number, (p: number) => void] => {
    const size = Math.ceil(dataset.length / pageSize);

    const [data, setData] = useState(paginate(dataset, 1, size, { pageSize }));
    const [pages, setPages] = useState({ current: 1, all: size });

    const changePage = useCallback((p: number) => {
        if(p !== pages.current) {
            setPages({ current: validatePageNumber(p, pages.all), all: pages.all });
        }
    }, [pages]);

    useEffect(() => {
        if(pages.all === size) {
            setData(paginate(dataset, pages.current, pages.all, { pageSize }));
        } else {
            setPages({ current: 1, all: size });
        }
    }, [dataset, size, pageSize, pages])

    return [data, pages.current, pages.all, changePage];
};

export default usePagination;