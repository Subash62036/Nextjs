import React from 'react';
import {
  EyeIcon,
} from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import { Button } from 'components';
import { useTable, usePagination } from 'react-table';
import Link from 'next/link';
import { ROUTES } from 'config';

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
      </ul>
    </div>
  );
}

export const PaginationTableComponentForCaptain = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',

      },
      {
        Header: 'Captain Name',
        accessor: 'captainName',
      },

      {
        Header: 'Mobile Number',
        accessor: 'phone',
      },
      {
        Header: 'Joining date',
        accessor: 'dateJoined',
      },
      {
        Header: 'Total completed rides',
        accessor: 'totalRide',
      },
      {
        Header: 'Rating',
        accessor: 'rating',
        Cell: ({ value }) => (
          <span className="flex">
            {value}
            <StarIcon className="text-primary-400 w-5 h-5" />
          </span>
        ),
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (

          value === 'Approved' ? (
            <Button variant="primary" className="bg-green-400 text-white rounded-full w-full disabled:transform-none cursor-default">APPROVED</Button>
          ) : (
            <Button variant="primary" className="bg-primary-500 text-white rounded-full w-full cursor-default">PENDING</Button>
          )
        ),
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell:
          ({ value }) => (
            <Link
              key={value}
              href={ROUTES.CAPTAIN_DETAILS}
            >
              <EyeIcon className="text-grey-500 w-8 h-8" />
            </Link>
          ),
      },

    ],
    [],
  );

  const data = [
    {
      id: '0009784',
      captainName: 'Rober Fox',
      phone: '9876543210',
      dateJoined: '30 Oct 2021',
      totalRide: '30',
      rating: '4.5',
      action: '0009784',
      status: 'Approved',
    },
    {
      id: '0009784',
      captainName: 'Rober Fox',
      phone: '9876543210',
      dateJoined: '30 Oct 2021',
      totalRide: '30',
      rating: '4.5',
      action: '0009784',
      status: 'Pending',
    },
    {
      id: '0009784',
      captainName: 'Rober Fox',
      phone: '9876543210',
      dateJoined: '30 Oct 2021',
      totalRide: '30',
      rating: '4.5',
      action: '0009784',
      status: 'Approved',
    },
    {
      id: '0009784',
      captainName: 'Rober Fox',
      phone: '9876543210',
      dateJoined: '30 Oct 2021',
      totalRide: '30',
      rating: '4.5',
      action: '0009784',
      status: 'Pending',
    },
    {
      id: '0009784',
      captainName: 'Rober Fox',
      phone: '9876543210',
      dateJoined: '30 Oct 2021',
      totalRide: '30',
      rating: '4.5',
      action: '0009784',
      status: 'Approved',
    },

  ];

  return (
    <Table columns={columns} data={data} />
  );
};
