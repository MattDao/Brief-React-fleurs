import _ from 'lodash';
import React, { useState } from 'react';
import { Plante } from '../pages/Home';

interface filterSideBarProps {
  listElementPlant: Plante[];
  onChangeCategoriesCheck: { (checkCategories: string[]): void };
}

const SideBar = ({
  listElementPlant,
  onChangeCategoriesCheck,
}: filterSideBarProps) => {
  const categories = _.uniq(listElementPlant.map((plante) => plante.category));
  const [checkCategories, setCheckCategories] = useState<string[]>([]);

  function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    let tab: string[] = [];
    if (e.currentTarget.checked) {
      tab = [...checkCategories, e.currentTarget.value];
    } else {
      tab = [...checkCategories.filter((x) => x !== e.currentTarget.value)];
    }
    setCheckCategories(tab);
    onChangeCategoriesCheck(tab);
  }

  return (
    <div className='custom-side-bar flex-shrink-0 bg-white border-end'>
      <div className='p-3 border-bottom'>
        <span className='fs-5 fw-semibold'>Filtres</span>
      </div>
      <ul className='list-unstyled ps-0'>
        <div className='p-3'>
          <p className='mb-1 fs-5 fw-semibold'>Catégories</p>
          {categories.map((cat, i) => (
            <div className='form-check' key={i}>
              <input
                className='form-check-input'
                type='checkbox'
                value={cat}
                id={cat}
                onChange={handleCheck}
              />
              <label className='form-check-label' htmlFor={cat}>
                {' '}
                {cat}
              </label>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
