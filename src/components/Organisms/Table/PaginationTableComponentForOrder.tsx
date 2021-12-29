import React from 'react';
import { useTable, usePagination } from 'react-table';
import { Button } from 'components';
import Link from 'next/link';
import { ROUTES } from 'config';
import {
  EyeIcon,
} from '@heroicons/react/outline';

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination,
  );

  // Render the UI for your table
  return (
    <div>
      <table className="mt-4 min-w-full leading-normal" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs text-gray-500 tracking-wider" {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => <td className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs text-black tracking-wider" {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>

      <ul className="flex mt-6 justify-end items-end h-16">
        <select
          className="border-0 border-b-2 border-grey-200 mr-10 text-sm"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          style={{ width: '12rem', height: '3rem', color: 'grey' }}
        >
          {[5, 10, 20, 30, 40, 50].map((val) => (
            <option className="text-grey-300" key={val} value={val}>
              Rows per page
              {' '}
              {val}
            </option>
          ))}
        </select>
        {/* <button className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                  <a className="page-link">First</a>
              </button>
              <button className="page-item" onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}>
                  <a className="page-link">Last</a>
              </button> */}

        <p>
          Page
          {' '}
          <strong>
            {pageIndex + 1}
            {' '}
            of
            {pageOptions.length}
          </strong>
          {' '}
        </p>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <p className="text-grey-300 mr-1 text-3xl">{'<'}</p>
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          <p className="text-grey-300 mr-3 text-3xl">{'>'}</p>
        </button>
        {/* <input
                          className="form-control"
                          type="number"
                          defaultValue={pageIndex + 1}
                          onChange={e => {
                              const page = e.target.value ? Number(e.target.value) - 1 : 0
                              gotoPage(page)
                          }}
                          style={{ width: '100px', height: '20px' }}
                      /> */}

      </ul>
    </div>
  );
}

export const PaginationTableComponentForOrder = ({ route }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Order ID',
        accessor: 'orderId',

      },
      {
        Header: 'From',
        accessor: 'from',
      },

      {
        Header: 'To',
        accessor: 'to',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (

          value === 'Completed' ? (
            <Button variant="primary" className="bg-green-400 text-white rounded-full w-2/4 h-10 disabled:transform-none cursor-default">Completed</Button>
          ) : (
            <Button variant="primary" className="bg-red-500 text-white rounded-full w-2/4 h-10 cursor-default">Cancelled</Button>
          )),
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell:
        ({ value }) => (
          <Link
            key={value}
            href={`${route}${value}`}
          >
            <button className="cursor-pointer">
              <EyeIcon className="text-grey-500 w-8 h-8" />
            </button>
          </Link>
        ),

      },
    ],
    [],
  );

  const data = [
    {
      orderId: '0009784',
      from: 'Ranchi',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Completed',
      action: '0009784',
    },
    {
      orderId: '0009733',
      from: 'Ranchi',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Cancelled',
      action: '0009733',
    },
    {
      orderId: '0009784',
      from: 'Ranchi',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Completed',
      action: '0009784',
    },
    {
      orderId: '0009733',
      from: 'Ranchi',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Cancelled',
      action: '0009733',
    },
    {
      orderId: '0009784',
      from: 'Ranchi',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Completed',
      action: '0009784',
    },
    {
      orderId: '0009733',
      from: 'Ranchi',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Cancelled',
      action: '0009733',
    },
    {
      orderId: '0009784',
      from: 'Ranchi',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Completed',
      action: '0009784',
    },
    {
      orderId: '0009733',
      from: 'Ranchi',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Cancelled',
      action: '0009733',
    },
  ];

  return (
    <Table columns={columns} data={data} />
  );
};
