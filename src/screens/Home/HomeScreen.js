import React, {useEffect, useState} from 'react';
import { HomeComponent } from 'components';
import {data} from 'constants';

const HomeScreen = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [populars, setPopulars] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleChangeCategory = (categoryId, menuTypeId) => {
    // recommended menu
    let selectedRecommended = data.menu.find(el => el.name == 'Recommended');

    // set the recommend
    setRecommends(
      selectedRecommended?.list.filter(el => el.categories.includes(categoryId)),
    );

    // popular menu
    let selectedPopular = data.menu.find(el => el.name == 'Popular');

    // set popular menu
    setPopulars(
      selectedPopular?.list.filter(el => el.categories.includes(categoryId)),
    );

    // find the menu based on the menuTypeId
    let selectedMenu = data.menu.find(el => el.id == menuTypeId);

    // set the menu on the category
    setMenuList(
      selectedMenu?.list.filter(el => el.categories.includes(categoryId)),
    );
  };

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  return (
    <HomeComponent 
      selectedCategoryId={selectedCategoryId}
      selectedMenuType={selectedMenuType}
      menuList={menuList}
      recommends={recommends}
      populars={populars}
      showFilterModal={showFilterModal}
      setSelectedCategoryId={setSelectedCategoryId}
      setSelectedMenuType={setSelectedMenuType}
      handleChangeCategory={handleChangeCategory}
      setShowFilterModal={setShowFilterModal}
    />
  );
};

export default HomeScreen;
