import React, { useState } from 'react';
import s from './EditVehicle.module.scss';
import { useRouter } from 'next/router';
import { StepBack, UploadVehiclePhoto } from 'components/dashboard/content';
import { BaseButtonApp, BaseInputApp, BaseSelectApp } from '@base/index';
import {
  ConfirmPopup,
  EditVehiclePhotoPopup,
} from 'components/dashboard/modals';
import toast from 'react-hot-toast';

interface IFormData {
  name: string;
  availability_status: ISelectItem[];
  publication_status: ISelectItem[];
  company_name_location: string;
  price: string;
  price_vat: string;
  first_registration: string;
  mileage: string;
  performance: string;
  engine_type: ISelectItem[];
  transmission_type: ISelectItem[];
  next_tuv_hu: string;
  color: string;
  urban_consumption: string;
  consumption_outsid_town: string;
  combined_consumption: string;
  co2_emissions: string;
  emission_class: ISelectItem[];
  energy_efficiency_class: ISelectItem[];
}

interface ISelectItem {
  label: string;
  value: string;
}

const initialState = {
  name: 'Porsche Panamera',
  availability_status: [{ value: 'Available', label: 'Available' }],
  publication_status: [{ value: 'Published', label: 'Published' }],
  company_name_location: 'ABC Group, London',
  price: '112,900',
  price_vat: '90,320',
  first_registration: '08/2022',
  mileage: '12 000 km',
  performance: '463 kW/630 PS',
  engine_type: [{ value: 'Petrol', label: 'Petrol' }],
  transmission_type: [{ value: 'Automatic', label: 'Automatic' }],
  next_tuv_hu: '06/2026',
  color: 'Designo night black magno',
  urban_consumption: '8.7 l/100 km *',
  consumption_outsid_town: '6,5 l/ 100 km *',
  combined_consumption: '7,2 l/ 100 km *',
  co2_emissions: '172 g/km (komb.) *',
  emission_class: [{ value: 'Euro 1', label: 'Euro 1' }],
  energy_efficiency_class: [{ value: 'A+++', label: 'A+++' }],
};

const EditVehicle: React.FC = () => {
  const router = useRouter();

  //СТЕЙТЫ ПОЛЕЙ
  const [value, setValue] = useState<IFormData>(initialState);
  const setNewValue = (
    value: ISelectItem | ISelectItem[] | string,
    prop: keyof IFormData
  ) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  // ПОДТВЕРЖДЕНИЕ УХОДА СО СТРАНИЦЫ
  const [openedConfirmLeavePagePopup, setOpenedConfirmLeavePagePopup] =
    useState(false);

  // ПОДТВЕРЖДЕНИЕ ПУБЛИКАЦИИ
  const [openedConfirmPublishProduct, setOpenedConfirmPublishProduct] =
    useState(false);

  // ПОДТВЕРЖДЕНИЕ СОХРАНЕНИЯ
  const [openedConfirmSaveProduct, setOpenedConfirmSaveProduct] =
    useState(false);

  // ПОДТВЕРЖДЕНИЕ УДАЛЕНИЯ ПРОДУКТА
  const [openedConfirmDeleteVehicles, setOpenedConfirmDeleteVehicles] =
    useState(false);

  // обработка покидания страницы
  const confirmLeavePageHandler = () => {
    setOpenedConfirmLeavePagePopup(false);
    router.back();
  };

  // РЕДАКТИРОВАНИЕ ФОТОК
  const [openedEditVehiclePhotoPopup, setOpenedEditVehiclePhotoPopup] =
    useState(false);

  return (
    <>
      <section className={s.EditVehicle}>
        <StepBack
          onClick={() => setOpenedConfirmLeavePagePopup(true)}
          className={s.Back}
        />

        <form className={s.Body}>
          <div className={s.Inputs}>
            <div className={s.Inputs_Title}>
              <h1>Edit vehicle</h1>
            </div>

            <div className={s.Inputs_Content}>
              <div className={s.Block}>
                <BaseInputApp
                  name="name"
                  label="Name"
                  value={value.name}
                  onChange={(val: string) => setNewValue(val, 'name')}
                />

                <BaseSelectApp
                  name="availability_status"
                  value={value.availability_status}
                  placeholder="Availability status"
                  options={[
                    { value: 'Available', label: 'Available' },
                    { value: 'Unavailable', label: 'Unavailable' },
                  ]}
                  onChange={(val: ISelectItem[] | ISelectItem) =>
                    setNewValue(val, 'availability_status')
                  }
                  onClear={(e) => {
                    e.stopPropagation();
                    setNewValue([], 'availability_status');
                  }}
                  onBlur={() => {}}
                  withLabel
                />
                <BaseSelectApp
                  name="publication_status"
                  value={value.publication_status}
                  placeholder="Publication status"
                  options={[
                    { value: 'Published', label: 'Published' },
                    { value: 'Hidden', label: 'Hidden' },
                  ]}
                  onChange={(val: ISelectItem[] | ISelectItem) =>
                    setNewValue(val, 'publication_status')
                  }
                  onClear={(e) => {
                    e.stopPropagation();
                    setNewValue([], 'publication_status');
                  }}
                  onBlur={() => {}}
                  withLabel
                />

                <BaseInputApp
                  name="company_name_location"
                  label="Company Name/Location"
                  value={value.company_name_location}
                  onChange={(val: string) =>
                    setNewValue(val, 'company_name_location')
                  }
                />

                <BaseInputApp
                  name="price"
                  label="Price, €/Kc"
                  value={value.price}
                  onChange={(val: string) => setNewValue(val, 'price')}
                />

                <BaseInputApp
                  name="price_vat"
                  label="Price with VAT, €/Kc"
                  value={value.price_vat}
                  onChange={(val: string) => setNewValue(val, 'price_vat')}
                />
              </div>

              <div>
                <div className={s.Subtitle}>
                  <p>Vehicle data</p>
                </div>

                <div className={s.Block}>
                  <BaseInputApp
                    name="first_registration"
                    label="First registration"
                    value={value.first_registration}
                    onChange={(val: string) =>
                      setNewValue(val, 'first_registration')
                    }
                  />

                  <BaseInputApp
                    name="mileage"
                    label="Mileage (km)"
                    value={value.mileage}
                    onChange={(val: string) => setNewValue(val, 'mileage')}
                  />

                  <BaseInputApp
                    name="performance"
                    label="Performance (000 hp/00 kW)"
                    value={value.performance}
                    onChange={(val: string) => setNewValue(val, 'performance')}
                  />

                  <BaseSelectApp
                    name="engine_type"
                    value={value.engine_type}
                    placeholder="Engine type"
                    options={[
                      { value: 'Petrol', label: 'Petrol' },
                      { value: 'Electric', label: 'Electric' },
                      { value: 'Diesel', label: 'Diesel' },
                    ]}
                    onChange={(val: ISelectItem[] | ISelectItem) =>
                      setNewValue(val, 'engine_type')
                    }
                    onClear={(e) => {
                      e.stopPropagation();
                      setNewValue([], 'engine_type');
                    }}
                    onBlur={() => {}}
                    withLabel
                  />
                  <BaseSelectApp
                    name="transmission_type"
                    value={value.transmission_type}
                    placeholder="Transmission type"
                    options={[
                      { value: 'Automatic', label: 'Automatic' },
                      { value: 'Manual', label: 'Manual' },
                      { value: 'Semi-automatic', label: 'Semi-automatic' },
                    ]}
                    onChange={(val: ISelectItem[] | ISelectItem) =>
                      setNewValue(val, 'transmission_type')
                    }
                    onClear={(e) => {
                      e.stopPropagation();
                      setNewValue([], 'transmission_type');
                    }}
                    onBlur={() => {}}
                    withLabel
                  />

                  <BaseInputApp
                    name="next_tuv_hu"
                    label="Next TÜV/HU"
                    value={value.next_tuv_hu}
                    onChange={(val: string) => setNewValue(val, 'next_tuv_hu')}
                  />

                  <BaseInputApp
                    name="color"
                    label="Color"
                    value={value.color}
                    onChange={(val: string) => setNewValue(val, 'color')}
                  />
                </div>
              </div>

              <div>
                <div className={s.Subtitle}>
                  <p>Consumption data</p>
                </div>

                <div className={s.Block}>
                  <BaseInputApp
                    name="urban_consumption"
                    label="Urban consumption (00 l/100 km *)"
                    value={value.urban_consumption}
                    onChange={(val: string) =>
                      setNewValue(val, 'urban_consumption')
                    }
                  />

                  <BaseInputApp
                    name="consumption_outsid_town"
                    label="Consumption outside town (00 l/100 km *)"
                    value={value.consumption_outsid_town}
                    onChange={(val: string) =>
                      setNewValue(val, 'consumption_outsid_town')
                    }
                  />

                  <BaseInputApp
                    name="combined_consumption"
                    label="Combined consumption (00 l/100 km *)"
                    value={value.combined_consumption}
                    onChange={(val: string) =>
                      setNewValue(val, 'combined_consumption')
                    }
                  />

                  <BaseInputApp
                    name="co2_emissions"
                    label="Co2 emissions (000 g/km (comb.) *)"
                    value={value.co2_emissions}
                    onChange={(val: string) =>
                      setNewValue(val, 'co2_emissions')
                    }
                  />

                  <BaseSelectApp
                    name="emission_class"
                    value={value.emission_class}
                    placeholder="Emission class"
                    options={[
                      { value: 'Euro 1', label: 'Euro 1' },
                      { value: 'Euro 6', label: 'Euro 6' },
                    ]}
                    onChange={(val: ISelectItem[] | ISelectItem) =>
                      setNewValue(val, 'emission_class')
                    }
                    onClear={(e) => {
                      e.stopPropagation();
                      setNewValue([], 'emission_class');
                    }}
                    onBlur={() => {}}
                    withLabel
                  />
                  <BaseSelectApp
                    name="energy_efficiency_class"
                    value={value.energy_efficiency_class}
                    placeholder="Energy efficiency class"
                    options={[
                      { value: 'A+++', label: 'A+++' },
                      { value: 'A++', label: 'A++' },
                      { value: 'A+', label: 'A+' },
                      { value: 'A', label: 'A' },
                      { value: 'B', label: 'B' },
                      { value: 'C', label: 'C' },
                      { value: 'D', label: 'D' },
                      { value: 'E', label: 'E' },
                      { value: 'F', label: 'F' },
                      { value: 'G', label: 'G' },
                    ]}
                    onChange={(val: ISelectItem[] | ISelectItem) =>
                      setNewValue(val, 'energy_efficiency_class')
                    }
                    onClear={(e) => {
                      e.stopPropagation();
                      setNewValue([], 'energy_efficiency_class');
                    }}
                    onBlur={() => {}}
                    withLabel
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={s.Image}>
            <div className={s.Image_Navbar}>
              <div
                className={s.Save}
                onClick={() => setOpenedConfirmSaveProduct(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_11340_33798)">
                    <path
                      d="M12.5 1.5C12.5 2.61 11.4 4.271 10.288 5.666C8.856 7.462 7.147 9.031 5.186 10.229C3.717 11.126 1.933 11.987 0.5 11.987M12.5 22.5C12.5 21.39 11.4 19.729 10.288 18.334C8.856 16.538 7.147 14.969 5.186 13.771C3.717 12.874 1.933 12.013 0.5 12.013M0.5 12H24.5"
                      stroke="#1A1A1A"
                      strokeOpacity="0.8"
                      strokeWidth="1.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11340_33798">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div
                className={s.Publish}
                onClick={() => setOpenedConfirmPublishProduct(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_11340_33798)">
                    <path
                      d="M12.5 1.5C12.5 2.61 11.4 4.271 10.288 5.666C8.856 7.462 7.147 9.031 5.186 10.229C3.717 11.126 1.933 11.987 0.5 11.987M12.5 22.5C12.5 21.39 11.4 19.729 10.288 18.334C8.856 16.538 7.147 14.969 5.186 13.771C3.717 12.874 1.933 12.013 0.5 12.013M0.5 12H24.5"
                      stroke="#1A1A1A"
                      strokeOpacity="0.8"
                      strokeWidth="1.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11340_33798">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div className={s.Image_Title}>
              <p>Vehicle photo</p>
            </div>

            <div className={s.Image_Subtitle}>
              <p>max 10 photos - JPG, PNG, PDF up to 10 MB</p>
            </div>

            <UploadVehiclePhoto
              className={s.Image_Upload}
              multiple={true}
              onClick={() => setOpenedEditVehiclePhotoPopup(true)}
            />

            <div className={s.Image_Tooltip}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                className={s.Icon}
              >
                <circle cx="12.5" cy="12" r="9" stroke="#91110E" />
                <path
                  d="M13 7.5C13 7.77614 12.7761 8 12.5 8C12.2239 8 12 7.77614 12 7.5C12 7.22386 12.2239 7 12.5 7C12.7761 7 13 7.22386 13 7.5Z"
                  fill="#91110E"
                  stroke="#91110E"
                />
                <path d="M12.5 17V10" stroke="#91110E" />
              </svg>

              <p>
                If you publish the vehicle, it will be seen by all site visitors
                with current publication date Also publication date will be
                updated, if you republish it from Archive
              </p>
            </div>
          </div>
        </form>

        <BaseButtonApp
          type="empty"
          onClick={() => setOpenedConfirmDeleteVehicles(true)}
        >
          Delete vehicle
        </BaseButtonApp>
      </section>

      {/* ПОДТВЕРЖДЕНИЕ УХОДА СО СТРАНИЦЫ */}
      <ConfirmPopup
        title="Are you sure you want to leave this page?"
        subtitle="If you close the window before the vehicle is published, all data will be deleted."
        opened={openedConfirmLeavePagePopup}
        onClick={setOpenedConfirmLeavePagePopup}
        onClick2={confirmLeavePageHandler}
      />

      {/* ПОДТВЕРЖДЕНИЕ ПУБЛИКАЦИИ */}
      <ConfirmPopup
        title="Do you want to publish this vehicle?"
        success_btn_title="Publish"
        opened={openedConfirmPublishProduct}
        onClick={setOpenedConfirmPublishProduct}
        onClick2={(e) => {
          e.preventDefault();
          setOpenedConfirmPublishProduct(false);
          setTimeout(() => {
            toast.success('Vehicle has been successfully published', {
              duration: 3000,
              className: 'dashboard',
            });
          }, 500);
        }}
      />

      {/* ПОДТВЕРЖДЕНИЕ СОХРАНЕНИЯ */}
      <ConfirmPopup
        title="Do you want to save this vehicle?"
        success_btn_title="Save"
        opened={openedConfirmSaveProduct}
        onClick={setOpenedConfirmSaveProduct}
        onClick2={(e) => {
          e.preventDefault();
          setOpenedConfirmSaveProduct(false);
          setTimeout(() => {
            toast.success('Vehicle has been saved as a draft', {
              duration: 3000,
              className: 'dashboard',
            });
          }, 500);
        }}
      />

      {/* ПОДТВЕРЖДЕНИЕ УДАЛЕНИЯ ПРОДУКТА */}
      <ConfirmPopup
        title="Do you want to delete this vehicle?"
        success_btn_title="Delete"
        opened={openedConfirmDeleteVehicles}
        onClick={setOpenedConfirmDeleteVehicles}
        onClick2={(e) => {
          e.preventDefault();
          setOpenedConfirmDeleteVehicles(false);
          setTimeout(() => {
            toast.success('Vehicle has been deleted', {
              duration: 3000,
              className: 'dashboard',
            });
          }, 500);
        }}
      />

      {/* РЕДАКТИРОВАНИЕ ФОТОК */}
      <EditVehiclePhotoPopup
        opened={openedEditVehiclePhotoPopup}
        onClick={setOpenedEditVehiclePhotoPopup}
        onClick2={() => {
          setOpenedEditVehiclePhotoPopup(false);
          setTimeout(() => {
            toast.success('All changes saved', {
              duration: 3000,
              className: 'dashboard',
            });
          }, 500);
        }}
      />
    </>
  );
};

export default EditVehicle;
