import { BaseSelectApp } from '@base/index';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss';

interface Props {
  className?: string;
}

interface IFormData {
  select: ISelectItem[];
}

interface ISelectItem {
  label: string;
  value: string;
}

const initialState = {
  select: [{ value: '20', label: '20' }],
};

const Pagination: React.FC<Props> = ({ className = '' }) => {
  //отображаемое количество

  const [itemOffset, setItemOffset] = useState(0);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const endOffset = itemOffset + 4;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / 4);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * 4) % items.length;
    setItemOffset(newOffset);
  };

  const [value, setValue] = useState<IFormData>(initialState);

  const setNewValue = (value: ISelectItem | ISelectItem[], prop: string) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  // useEffect(() => {
  //   console.log('value: ', value);
  // }, [value]);

  return (
    <div className={`${s.Pagination} ${className}`}>
      <div className={s.Copyright}>
        <p>All rights reserved © 2023 © BLVC</p>
      </div>

      <div className={s.ShowCounter}>
        <p>Showing results:&nbsp;10&nbsp;of&nbsp;99</p>
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
              d="M6.65983 4.16536L12.4932 9.9987L6.65983 15.832"
              stroke="#1A1A1A"
              strokeOpacity="0.6"
              strokeWidth="1.5"
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
              d="M12.4925 15.8346L6.65918 10.0013L12.4925 4.16797"
              stroke="#1A1A1A"
              strokeOpacity="0.6"
              strokeWidth="1.5"
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

      <div className={s.Select}>
        <div className={s.Select_Label}>
          <span>Show</span>
        </div>

        <BaseSelectApp
          value={value.select}
          options={[
            { value: '5', label: '5' },
            { value: '10', label: '10' },
            { value: '20', label: '20' },
            { value: '50', label: '50' },
          ]}
          onChange={(val: ISelectItem[] | ISelectItem) =>
            setNewValue(val, 'select')
          }
          onClear={() => {}}
          onBlur={() => {}}
          className={s.Select_Value}
        />
      </div>
    </div>
  );
};

export default Pagination;
