import { BaseSelectApp } from '@base/index';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss';

interface Props {
  className?: string;
}

const Pagination: React.FC<Props> = ({ className = '' }) => {
  //отображаемое количество
  const [value, setValue] = useState('20');

  const [itemOffset, setItemOffset] = useState(0);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const endOffset = itemOffset + 4;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / 4);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * 4) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={`${s.Pagination} ${className}`}>
      <div className={s.Pagination_Label}>
        <span>Показано результатов:&nbsp;</span>
        <span>10 из 20</span>
      </div>

      <ReactPaginate
        nextLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            className="prev-btn"
          >
            <path
              d="M7.5 4.16699L13.3333 10.0003L7.5 15.8337"
              stroke="#B4B5BC"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={3}
        pageCount={5}
        previousLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            className="next-btn"
          >
            <path
              d="M12.5003 15.8337L6.66699 10.0003L12.5003 4.16699"
              stroke="#B4B5BC"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />

      <div className={s.Pagination_Select}>
        <div className={s.Pagination_Select_Label}>
          <span>Показывать по</span>
        </div>

        {/* <BaseSelectApp
          defaultValue={value}
          options={[
            { value: '5', label: '5' },
            { value: '10', label: '10' },
            { value: '20', label: '20' },
            { value: '50', label: '50' },
          ]}
          onChange={(val: string) => setValue(val)}
          className={s.Pagination_Select_Value}
        /> */}
      </div>
    </div>
  );
};

export default Pagination;
