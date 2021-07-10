import React from 'react';
import { Badge, Card, CardBody, CardTitle } from 'reactstrap';
import { useTable, usePagination, useSortBy } from 'react-table';
import classnames from 'classnames';

import IntlMessages from '../../helpers/IntlMessages';
import DatatablePagination from '../../components/DatatablePagination';

import products from '../../data/products';
import { table1, table2, table3, table4, table5, table6 } from '../../data/allData';

function Table({ columns, data, divided = false, defaultPageSize = 6 }) {
    const {
        getTableProps,
        getTableBodyProps,
        prepareRow,
        headerGroups,
        page,
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: defaultPageSize },
        },
        useSortBy,
        usePagination
    );

    return (
        <>
            <table
                {...getTableProps()}
                className={`r-table table ${classnames({ 'table-divided': divided })}`}
            >
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column, columnIndex) => (
                                <th
                                    key={`th_${columnIndex}`}
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={
                                        column.isSorted
                                            ? column.isSortedDesc
                                                ? 'sorted-desc'
                                                : 'sorted-asc'
                                            : ''
                                    }
                                >
                                    {column.render('Header')}
                                    <span />
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell, cellIndex) => (
                                    <td
                                        key={`td_${cellIndex}`}
                                        {...cell.getCellProps({
                                            className: cell.column.cellClass,
                                        })}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <DatatablePagination
                page={pageIndex}
                pages={pageCount}
                canPrevious={canPreviousPage}
                canNext={canNextPage}
                pageSizeOptions={[4, 10, 20, 30, 40, 50]}
                showPageSizeOptions={false}
                showPageJump={false}
                defaultPageSize={pageSize}
                onPageChange={(p) => gotoPage(p)}
                onPageSizeChange={(s) => setPageSize(s)}
                paginationMaxSize={pageCount}
            />
        </>
    );
}

export const PerformanceGridTable = () => {
    const cols = React.useMemo(
        () => [
            {
                Header: ' Group',
                accessor: 'group',
                cellClass: 'list-item-heading ',
                Cell: (props) => <> {props.value} </>,
            },
            {
                Header: 'Sub Indicator',
                accessor: 'subIndicator',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Unit',
                accessor: 'unit',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Baseline',
                accessor: 'baseline',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Target',
                accessor: 'target',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Achived',
                accessor: 'achived',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Status',
                accessor: 'status',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>
                    <span>
                        <span style={{color:props.value.color}}>
                            <span style={{width:'15px',height:'15px',borderRadius:'15px',background:props.value.color,display:'inline-block',marginRight:'10px'}}></span>
                        {/* <IntlMessages id={`${props.value.title}`} /> */}
                        </span>
                    </span >
                </>,
            },
            {
                Header: 'Y-O-Y',
                accessor: 'yoy',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
        ],
        []
    );

    return (
        <Table columns={cols} data={table1} />
    );
};

export const PerformanceGridTable2 = () => {
    const cols = React.useMemo(
        () => [
            {
                Header: ' Group',
                accessor: 'group',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Sub Indicator',
                accessor: 'subIndicator',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Unit',
                accessor: 'unit',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Baseline',
                accessor: 'baseline',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Target',
                accessor: 'target',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Achived',
                accessor: 'achived',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },

            {
                Header: 'Status',
                accessor: 'status',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>
                    <span>
                        <span style={{color:props.value.color}}>
                            <span style={{width:'15px',height:'15px',borderRadius:'15px',background:props.value.color,display:'inline-block',marginRight:'10px'}}></span>
                        {/* <IntlMessages id={`${props.value.title}`} /> */}
                        </span>
                    </span >
                </>,
            },
            {
                Header: 'Y-O-Y',
                accessor: 'yoy',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
        ],
        []
    );

    return (
        <Table columns={cols} data={table2} />
    );
};

export const PerformanceGridTable3 = () => {
    const cols = React.useMemo(
        () => [
            {
                Header: ' Group',
                accessor: 'group',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Sub Indicator',
                accessor: 'subIndicator',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Unit',
                accessor: 'unit',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Baseline',
                accessor: 'baseline',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Target',
                accessor: 'target',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Achived',
                accessor: 'achived',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },

            {
                Header: 'Status',
                accessor: 'status',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>
                    <span>
                        <span style={{color:props.value.color}}>
                            <span style={{width:'15px',height:'15px',borderRadius:'15px',background:props.value.color,display:'inline-block',marginRight:'10px'}}></span>
                        {/* <IntlMessages id={`${props.value.title}`} /> */}
                        </span>
                    </span >
                </>,
            },
            {
                Header: 'Y-O-Y',
                accessor: 'yoy',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
        ],
        []
    );

    return (
        <Table columns={cols} data={table3} />
    );
};

export const PerformanceGridTable4 = () => {
    const cols = React.useMemo(
        () => [
            {
                Header: ' Group',
                accessor: 'group',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Sub Indicator',
                accessor: 'subIndicator',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Unit',
                accessor: 'unit',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Baseline',
                accessor: 'baseline',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Target',
                accessor: 'target',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Achived',
                accessor: 'achived',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },

            {
                Header: 'Status',
                accessor: 'status',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>
                    <span>
                        <span style={{color:props.value.color}}>
                            <span style={{width:'15px',height:'15px',borderRadius:'15px',background:props.value.color,display:'inline-block',marginRight:'10px'}}></span>
                        {/* <IntlMessages id={`${props.value.title}`} /> */}
                        </span>
                    </span >
                </>,
            },
            {
                Header: 'Y-O-Y',
                accessor: 'yoy',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
        ],
        []
    );

    return (
        <Table columns={cols} data={table4} />
    );
};

export const PerformanceGridTable5 = () => {
    const cols = React.useMemo(
        () => [
            {
                Header: ' Group',
                accessor: 'group',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Sub Indicator',
                accessor: 'subIndicator',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Unit',
                accessor: 'unit',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Baseline',
                accessor: 'baseline',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Target',
                accessor: 'target',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Achived',
                accessor: 'achived',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },

            {
                Header: 'Status',
                accessor: 'status',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>
                    <span>
                        <span style={{color:props.value.color}}>
                            <span style={{width:'15px',height:'15px',borderRadius:'15px',background:props.value.color,display:'inline-block',marginRight:'10px'}}></span>
                        {/* <IntlMessages id={`${props.value.title}`} /> */}
                        </span>
                    </span >
                </>,
            },
            {
                Header: 'Y-O-Y',
                accessor: 'yoy',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
        ],
        []
    );

    return (
        <Table columns={cols} data={table5} />
    );
};

export const PerformanceGridTable6 = () => {
    const cols = React.useMemo(
        () => [
            {
                Header: ' Group',
                accessor: 'group',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Sub Indicator',
                accessor: 'subIndicator',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Unit',
                accessor: 'unit',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Baseline',
                accessor: 'baseline',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Target',
                accessor: 'target',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Achived',
                accessor: 'achived',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },

            {
                Header: 'Status',
                accessor: 'status',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>
                    <span>
                        <span style={{color:props.value.color}}>
                            <span style={{width:'15px',height:'15px',borderRadius:'15px',background:props.value.color,display:'inline-block',marginRight:'10px'}}></span>
                        {/* <IntlMessages id={`${props.value.title}`} /> */}
                        </span>
                    </span >
                </>,
            },
            {
                Header: 'Y-O-Y',
                accessor: 'yoy',
                cellClass: 'list-item-heading ',
                Cell: (props) => <>{props.value}</>,
            },
        ],
        []
    );

    return (
        <Table columns={cols} data={table6} />
    );
};

export const ReactTableDivided = () => {
    const cols = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'title',
                cellClass: 'list-item-heading w-40',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Sales',
                accessor: 'sales',
                cellClass: 'text-muted  w-10',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Stock',
                accessor: 'stock',
                cellClass: 'text-muted  w-10',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Category',
                accessor: 'category',
                cellClass: 'text-muted  w-40',
                Cell: (props) => <>{props.value}</>,
            },
        ],
        []
    );
    return (
        <div className="mb-4">
            <CardTitle>
                {/* <IntlMessages id="table.divided" /> */}
            </CardTitle>
            <Table columns={cols} data={products} divided />
        </div>
    );
};
