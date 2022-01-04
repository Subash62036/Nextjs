import React, {
  useEffect, useState, useReducer, useMemo,
} from 'react';
import { useTable, usePagination } from 'react-table';
import { Button, LoadingIndicator } from 'components';
import Link from 'next/link';
import {
  EyeIcon,
} from '@heroicons/react/outline';
import {
  useGetAllCustomerRides,
} from 'hooks';
import { useRouter } from 'next/router';

const initialState = {
  queryPageIndex: 0,
  queryPageSize: 10,
  totalCount: null,
};

const PAGE_CHANGED = 'PAGE_CHANGED';
const PAGE_SIZE_CHANGED = 'PAGE_SIZE_CHANGED';
const TOTAL_COUNT_CHANGED = 'TOTAL_COUNT_CHANGED';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case PAGE_CHANGED:
      return {
        ...state,
        queryPageIndex: payload,
      };
    case PAGE_SIZE_CHANGED:
      return {
        ...state,
        queryPageSize: payload,
      };
    case TOTAL_COUNT_CHANGED:
      return {
        ...state,
        totalCount: payload,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export const PaginationTableComponentForCustomerRides = ({ route }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Order ID',
        accessor: 'id',

      },
      {
        Header: 'From',
        accessor: 'fromAddress',
      },

      {
        Header: 'To',
        accessor: 'toAddress',
      },
      {
        Header: 'Date',
        accessor: 'createdAt',
      },
      {
        Header: 'Status',
        accessor: 'bookingStatus',
        Cell: ({ value }) => (

          value === 'CREATED' ? (
            <Button variant="primary" className="bg-green-400 text-white rounded-full text-sm w-3/4 h-8 disabled:transform-none cursor-default">{value}</Button>
          ) : (
            <Button variant="primary" className="bg-red-500 text-white rounded-full text-sm w-3/4 h-8 cursor-default">{value}</Button>
          )),
      },
      {
        Header: 'Action',
        Cell:
        ({ row }) => (

          <Link
            key={row.original.id}
            href={`${route}${row.original.id}`}
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
  const { query } = useRouter();
  const [{
    queryPageIndex,
    queryPageSize, totalCount,
  }, dispatch] = useReducer(reducer, initialState);
  const { data } = useGetAllCustomerRides(query.detail, queryPageIndex, queryPageSize);

  const totalPages = data && data.totalPages;
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (data) {
      setIsFetched(true);
    }
  }, [data]);

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
      data: isFetched ? data.data : [],
      initialState: {
        pageIndex: queryPageIndex,
        pageSize: queryPageSize,
      },
      manualPagination: true,
      pageCount: isFetched ? totalPages : null,
    },
    usePagination,
  );

  useEffect(() => {
    dispatch({ type: PAGE_CHANGED, payload: pageIndex });
  }, [pageIndex]);

  useEffect(() => {
    dispatch({ type: PAGE_SIZE_CHANGED, payload: pageSize });
    gotoPage(0);
  }, [pageSize, gotoPage]);

  return (
    <>
      {
        !isFetched
          ? <LoadingIndicator className="h-20 w-20 text-center" />
          : (
            <>
              <div>
                <table className="mt-4 min-w-full leading-normal" {...getTableProps()}>
                  <thead>
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th className="py-3 border-b-2 border-gray-200 text-left text-xs text-gray-500 tracking-wider" {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => <td className="py-1 border-b-2 border-gray-200 text-left text-xs text-black tracking-wider" {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
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
            </>
          )
      }
    </>
  );
};
