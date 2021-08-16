import { Table as TableComponent , TableHead, TableBody } from './styled/components';
import { trKeys, transformValues } from './utils';
import TableSize, * as Sizes from './utils/sizes';

const transformedData = (data: any[]) => data.map((item) => transformValues(item));

const transformedKeys = (titles: Array<string>) => titles.map((key) => trKeys[key] || key);

interface TableProps{
    data: Array<any>,
    titles: Array<string>,
    size: TableSize
}

export const TableSizes = Sizes;

export default function Table({ data, titles, size = Sizes.COMMON } : TableProps) {
    return (
        <TableComponent size={size}>
            <TableHead>
                <tr>
                    {transformedKeys(titles).map((key, index) => <th key={index}>{key}</th>)}
                </tr>
            </TableHead>
            <TableBody>
                {transformedData(data).map((item, index) => {
                    let keys = Object.keys(item);
                    return <tr key={index}>
                        {keys.map((key: any) => <td key={key}>{item[key]}</td>)}
                    </tr>
                })}
            </TableBody>
        </TableComponent>
    )
}