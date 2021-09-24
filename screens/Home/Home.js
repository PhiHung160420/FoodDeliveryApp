import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';
import {HorizontalFoodCard, VerticalFoodCard} from '../../components';
import Section from './Section';
import FilterModal from './FilterModal';

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const [selectedMenuType, setSelectedMenuType] = useState(1);

  const [menuList, setMenuList] = useState([]);

  const [recommends, setRecommends] = useState([]);

  const [populars, setPopulars] = useState([]);

  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleChangeCategory = (categoryId, menuTypeId) => {
    // recommended menu
    let selectedRecommended = dummyData.menu.find(a => a.name == 'Recommended');

    // set the recommend
    setRecommends(
      selectedRecommended?.list.filter(a => a.categories.includes(categoryId)),
    );

    // popular menu
    let selectedPopular = dummyData.menu.find(a => a.name == 'Popular');

    // set popular menu
    setPopulars(
      selectedPopular?.list.filter(a => a.categories.includes(categoryId)),
    );

    // find the menu based on the menuTypeId
    let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId);

    // set the menu on the category
    setMenuList(
      selectedMenu?.list.filter(a => a.categories.includes(categoryId)),
    );
  };

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  const renderSearch = () => {
    return (
      <View style={styles.searchContaner}>
        {/* Icon */}
        <Image source={icons.search} style={styles.iconSearch} />

        {/* Input */}
        <TextInput style={styles.searchInput} placeholder="Search Food ..." />

        {/* Filter Button */}
        <TouchableOpacity onPress={() => setShowFilterModal(true)}>
          <Image source={icons.filter} style={styles.iconSearch} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderMenuType = () => {
    const renderMenuItems = ({item, index}) => {
      return (
        <TouchableOpacity
          style={{
            marginLeft: SIZES.padding,
            marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0,
          }}
          onPress={() => {
            setSelectedMenuType(item.id);
            handleChangeCategory(selectedCategoryId, item.id);
          }}>
          <Text
            style={{
              color:
                selectedMenuType == item.id ? COLORS.primary : COLORS.black,
              ...FONTS.h3,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={renderMenuItems}
      />
    );
  };

  const renderRecommendSection = () => {
    return (
      <Section
        title="Recommended"
        onPress={() => console.log('show all recommended')}>
        <FlatList
          data={recommends}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <HorizontalFoodCard
              containerStyle={[
                styles.horizontalFoodCard,
                {
                  marginRight:
                    index == recommends.length - 1 ? SIZES.padding : 0,
                  marginLeft: index == 0 ? SIZES.padding : 18,
                },
              ]}
              imageStype={styles.imageHorizontalFoodCard}
              item={item}
              onPress={() => console.log('')}
            />
          )}
        />
      </Section>
    );
  };

  const renderPopularSection = () => {
    return (
      <Section title="Popular Near You" onPress={() => console.log('popular')}>
        <FlatList
          data={populars}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <VerticalFoodCard
              containerStyle={{
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == populars.length - 1 ? SIZES.padding : 0,
              }}
              item={item}
              onPress={() => console.log('vertical food card')}
            />
          )}
        />
      </Section>
    );
  };

  const renderFoodCategories = () => {
    const renderFoodCategoriesItem = ({item, index}) => {
      return (
        <TouchableOpacity
          style={[
            styles.foodCategoriesBtn,
            {
              marginLeft: index == 0 ? SIZES.padding : 18,
              marginRight:
                index == dummyData.categories.length - 1 ? SIZES.padding : 0,
              backgroundColor:
                selectedCategoryId == item.id
                  ? COLORS.primary
                  : COLORS.lightGray2,
            },
          ]}
          onPress={() => {
            setSelectedCategoryId(item.id),
              handleChangeCategory(item.id, selectedMenuType);
          }}>
          <Image source={item.icon} style={styles.iconFoodCategories} />
          <Text
            style={[
              styles.titleFoodCategories,
              {
                color:
                  selectedCategoryId == item.id
                    ? COLORS.white
                    : COLORS.darkGray,
                ...FONTS.h3,
              },
            ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderFoodCategoriesItem}
      />
    );
  };

  const renderDeliveryTo = () => {
    return (
      <View style={styles.deliveryTo}>
        <Text style={styles.deliveryTitle}>DELIVERY TO</Text>
        <TouchableOpacity style={styles.deliveryContent}>
          <Text style={{...FONTS.h3}}>{dummyData?.myProfile?.address}</Text>
          <Image source={icons.down_arrow} style={styles.deliveryIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* Search */}
      {renderSearch()}

      {/* Filter */}
      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}

      {/* List */}
      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 220}}
        ListHeaderComponent={
          <View>
            {/* Delivery To */}
            {renderDeliveryTo()}

            {/* Food categories */}
            {renderFoodCategories()}

            {/* Popular */}
            {renderPopularSection()}

            {/* Recommend Section */}
            {renderRecommendSection()}

            {/* Menu Type */}
            {renderMenuType()}
          </View>
        }
        renderItem={({item, index}) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStype={{marginTop: 20, height: 110, width: 110}}
              item={item}
              onPress={() => console.log('')}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContaner: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    marginVertical: SIZES.base,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
  iconSearch: {width: 20, height: 20, tintColor: COLORS.black},
  searchInput: {flex: 1, marginLeft: SIZES.radius, ...FONTS.h3},
  foodCategoriesBtn: {
    flexDirection: 'row',
    height: 55,
    marginTop: SIZES.padding,
    paddingHorizontal: 8,
    borderRadius: SIZES.radius,
  },
  horizontalFoodCard: {
    height: 180,
    width: SIZES.width * 0.85,
    padding: 18,
    paddingHorizontal: SIZES.radius,
    alignItems: 'center',
  },
  imageHorizontalFoodCard: {
    marginTop: 35,
    height: 150,
    width: 150,
  },
  iconFoodCategories: {marginTop: 5, width: 50, height: 50},
  titleFoodCategories: {
    alignSelf: 'center',
    marginRight: SIZES.base,
  },
  deliveryTo: {marginTop: SIZES.padding, marginHorizontal: SIZES.padding},
  deliveryTitle: {color: COLORS.primary, ...FONTS.body3},
  deliveryContent: {
    flexDirection: 'row',
    marginTop: SIZES.base,
    alignItems: 'center',
  },
  deliveryIcon: {marginLeft: SIZES.base, height: 20, width: 20},
});

export default Home;
