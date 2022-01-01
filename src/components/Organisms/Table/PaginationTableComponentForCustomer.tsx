import React, { useEffect, useState } from 'react';
import {
  EyeIcon,
} from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import { LoadingIndicator } from 'components';

import { useTable, usePagination } from 'react-table';
import Link from 'next/link';
import { ROUTES } from 'config';
import {
  useGetAllCustomersQuery,
} from 'hooks';

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

export const PaginationTableComponentForCustomer = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',

      },
      {
        Header: 'Customer Name',
        accessor: 'customerName',
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
        Header: 'Action',
        Cell:
          ({ row }) => (
            <Link
              key={row.original.id}
              href={`${ROUTES.CUSTOMER_DETAILS}${row.original.id}`}
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

  const { data } = useGetAllCustomersQuery();
  const response = data && data.data;

  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (data) {
      setIsFetched(true);
    }
  }, [data]);

  return (

    <>
      {
      !isFetched
        ? <LoadingIndicator className="h-20 w-20 text-center" />
        : (
          <>
            { response && <Table columns={columns} data={response} /> }

          </>
        )
    }
    </>
  );
};
