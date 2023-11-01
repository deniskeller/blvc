import {
  BaseButtonApp,
  BaseInputApp,
  BasePopup,
  BaseSelectApp,
  BaseTextareaApp,
  BaseTitleApp,
} from '@base/index';
import React, { useState, useEffect } from 'react';
import s from './CreateMerchPopup.module.scss';
import toast from 'react-hot-toast';

interface Props {
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2: (value: boolean) => void;
}

interface IFormData {
  name_of_product: string;
  сategory: ISelectItem[];
  color: ISelectItem[];
  size: ISelectItem[];
  product_description: string;
  price: string;
  status: ISelectItem[];
}

interface ISelectItem {
  label: string;
  value: string;
}

const initialState = {
  name_of_product: '',
  сategory: [],
  color: [],
  size: [],
  product_description: '',
  price: '',
  status: [],
};

const CreateMerchPopup: React.FC<Props> = ({ opened, onClick, onClick2 }) => {
  const [value, setValue] = useState<IFormData>(initialState);

  const setNewValue = (
    value: ISelectItem | ISelectItem[] | string,
    prop: keyof IFormData
  ) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  return (
    <BasePopup opened={opened} onClick={onClick} className={s.Popup}>
      <BaseTitleApp className={s.Title}>Create product</BaseTitleApp>

      <form className={s.Form}>
        <ul className={s.Form_Content}>
          <li>
            <BaseInputApp
              name="name_of_product"
              label="Name of product"
              value={value.name_of_product}
              onChange={(val: string) => setNewValue(val, 'name_of_product')}
            />
          </li>

          <li>
            <ul className={s.Row1}>
              <li>
                <BaseSelectApp
                  name="сategory"
                  value={value.сategory}
                  placeholder="Category"
                  options={[
                    { value: 'men', label: 'Men' },
                    { value: 'women', label: 'Women' },
                    { value: 'accessories', label: 'Accessories' },
                  ]}
                  onChange={(val: ISelectItem[] | ISelectItem) =>
                    setNewValue(val, 'сategory')
                  }
                  onClear={(e) => {
                    e.stopPropagation();
                    setNewValue([], 'сategory');
                  }}
                  onBlur={() => {}}
                  withLabel
                  multiple
                  withCounter
                />
              </li>

              <li>
                <BaseSelectApp
                  name="color"
                  value={value.color}
                  placeholder="Color"
                  options={[
                    { value: 'black', label: 'Black' },
                    { value: 'white', label: 'White' },
                    { value: 'yellow', label: 'Yellow' },
                    { value: 'green', label: 'Green' },
                    { value: 'blue', label: 'Blue' },
                    { value: 'red', label: 'Red' },
                    { value: 'pink', label: 'Pink' },
                  ]}
                  onChange={(val: ISelectItem[] | ISelectItem) =>
                    setNewValue(val, 'color')
                  }
                  onClear={(e) => {
                    e.stopPropagation();
                    setNewValue([], 'color');
                  }}
                  onBlur={() => {}}
                  withLabel
                  multiple
                  withCounter
                />
              </li>

              <li>
                <BaseSelectApp
                  name="size"
                  value={value.size}
                  placeholder="Size"
                  options={[
                    { value: 'XS', label: 'XS' },
                    { value: 'S', label: 'S' },
                    { value: 'M', label: 'M' },
                    { value: 'L', label: 'L' },
                    { value: 'XL', label: 'XL' },
                    { value: '2XL', label: '2XL' },
                    { value: '3XL', label: '3XL' },
                  ]}
                  onChange={(val: ISelectItem[] | ISelectItem) =>
                    setNewValue(val, 'size')
                  }
                  onClear={(e) => {
                    e.stopPropagation();
                    setNewValue([], 'size');
                  }}
                  onBlur={() => {}}
                  withLabel
                  multiple
                  withCounter
                />
              </li>
            </ul>
          </li>

          <li>
            <BaseTextareaApp
              maxLength={300}
              name="product_description"
              label="Product description"
              value={value.product_description}
              onChange={(val: string) =>
                setNewValue(val, 'product_description')
              }
            />
          </li>

          <li></li>

          <li>
            <ul className={s.Row2}>
              <li>
                <BaseInputApp
                  name="price"
                  label="Price, €"
                  value={value.price}
                  onChange={(val: string) => setNewValue(val, 'price')}
                />
              </li>

              <li>
                <BaseSelectApp
                  name="status"
                  value={value.status}
                  placeholder="Publication status"
                  options={[
                    { value: 'Active', label: 'Active' },
                    { value: 'Invited', label: 'Invited' },
                    { value: 'Blocked', label: 'Blocked' },
                  ]}
                  onChange={(val: ISelectItem[] | ISelectItem) =>
                    setNewValue(val, 'status')
                  }
                  onClear={(e) => {
                    e.stopPropagation();
                    setNewValue([], 'status');
                  }}
                  onBlur={() => {}}
                  withLabel
                />
              </li>
            </ul>
          </li>
        </ul>

        <div className={s.Form_Buttons}>
          <BaseButtonApp
            type="secondary"
            className={s.Button}
            onClick={(e) => {
              e.preventDefault();
              onClick(false);
            }}
          >
            Cancel
          </BaseButtonApp>

          <BaseButtonApp
            className={s.Button}
            onClick={(e) => {
              e.preventDefault();
              onClick(false);
              setTimeout(() => {
                toast.success('All changes saved', {
                  duration: 3000,
                  className: 'dashboard',
                });
              }, 500);
            }}
          >
            Save
          </BaseButtonApp>
        </div>
      </form>
    </BasePopup>
  );
};

export default CreateMerchPopup;
