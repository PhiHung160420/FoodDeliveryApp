import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {COLORS, data, FONTS, icons, SIZES, screenNames} from 'constants';
import {HorizontalFoodCard, VerticalFoodCard, TextIconButton, TextButton} from 'components/common';
import Section from './Section';
import FilterModal from './FilterModal';
import {SearchInput} from 'components/common';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const HomeComponent = (props) => {
  const {
    selectedCategoryId,
    selectedMenuType,
    menuList,
    recommends,
    populars,
    showFilterModal,
    setSelectedCategoryId,
    setSelectedMenuType,
    handleChangeCategory,
    setShowFilterModal,
  } = props;

  const navigation = useNavigation();

  const listHeaderComponent = () => {
    return (
      <View>
        {/* Delivery to */}
        <View style={styles.deliveryTo}>
          <Text style={styles.deliveryTitle}>DELIVERY TO</Text>
          <TouchableOpacity style={styles.deliveryContent}>
            <Text style={{...FONTS.h3}}>{data?.myProfile?.address}</Text>
            <Image source={icons.down_arrow} style={styles.deliveryIcon} />
          </TouchableOpacity>
        </View>

        {/* Food Category */}
        <FlatList
          data={data.categories}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TextIconButton
              key={index}
              index={index}
              icon={item.icon}
              label={item.name}
              containerStyle={[styles.categoryButton, {
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == data.categories.length - 1 ? SIZES.padding : 0,
                backgroundColor: selectedCategoryId == item.id ? COLORS.primary : COLORS.lightGray2,
              }]}
              isSelected={selectedCategoryId == item.id}
              onPress={() => {
                setSelectedCategoryId(item.id),
                handleChangeCategory(item.id, selectedMenuType);
              }}
            />
          )}
        />

        {/* Popular Near You */}
        <Section title="Popular Near You" onPress={() => {}}>
          <FlatList
            data={populars}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <VerticalFoodCard
                key={index}
                item={item}
                containerStyle={[styles.popularVerticalCard, {
                  marginLeft: index == 0 ? SIZES.padding : 18,
                  marginRight: index == populars.length - 1 ? SIZES.padding : 0,
                }]}
                onPress={() => navigation.navigate(screenNames.FoodDetail, item)}
              />
            )}
          />
        </Section>

        {/* Recommended */}
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
                key={index}
                item={item}
                containerStyle={[styles.recommendCard, {
                  marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                  marginLeft: index == 0 ? SIZES.padding : 18,
                }]}
                imageStype={styles.imageHorizontalFoodCard}
                onPress={() => navigation.navigate(screenNames.FoodDetail, item)}
              />
            )}
          />
        </Section>

        {/* Menu Type */}
        <FlatList
          horizontal
          data={data.menu}
          keyExtractor={item => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menuTypeList}
          renderItem={({item, index}) => (
            <TextButton
              key={index} 
              label={item.name}
              isSelected={selectedMenuType == item.id}
              buttonContainerStyle={{
                marginLeft: SIZES.padding,
                marginRight: index == data.menu.length - 1 ? SIZES.padding : 0,
              }}
              onPress={() => {
                setSelectedMenuType(item.id);
                handleChangeCategory(selectedCategoryId, item.id);
              }}
            />
          )}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* Search */}
      <SearchInput setShowFilterModal={() => setShowFilterModal(true)}/>

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
        contentContainerStyle={styles.mainflatlistContainer}
        ListHeaderComponent={listHeaderComponent()}
        renderItem={({item, index}) => {
          return (
            <HorizontalFoodCard
              key={index}
              item={item}
              containerStyle={styles.mainCard}
              imageStype={styles.mainCardImage}
              onPress={() => navigation.navigate(screenNames.FoodDetail, item)}
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
  iconSearch: {
    width: 20,
    height: 20,
    tintColor: COLORS.black,
  },
  searchInput: {
    flex: 1,
    marginLeft: SIZES.radius,
    ...FONTS.h3,
  },
  foodCategoriesBtn: {
    flexDirection: 'row',
    height: 55,
    marginTop: SIZES.padding,
    paddingHorizontal: 8,
    borderRadius: SIZES.radius,
  },
  imageHorizontalFoodCard: {
    marginTop: 35,
    height: 150,
    width: 150,
  },
  recommendCard: {
    height: 180,
    paddingHorizontal: SIZES.radius,
    alignItems: 'center',
  },
  iconFoodCategories: {
    marginTop: 5, 
    width: 50, 
    height: 50
  },
  titleFoodCategories: {
    alignSelf: 'center',
    marginRight: SIZES.base,
  },
  deliveryTo: {
    marginTop: SIZES.padding, 
    marginHorizontal: SIZES.padding
  },
  deliveryTitle: {
    color: COLORS.primary, 
    ...FONTS.body3
  },
  deliveryContent: {
    flexDirection: 'row',
    marginTop: SIZES.base,
    alignItems: 'center',
  },
  deliveryIcon: {
    marginLeft: SIZES.base, 
    height: 20, 
    width: 20
  },
  popularVerticalCard: {
    width: 200,
    padding: SIZES.radius,
    alignItems: 'center',
  },
  menuTypeList: {
    marginTop: 30,
    marginBottom: 20,
  },
  mainCard: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.radius,
  },
  mainCardImage: {
    marginTop: 20, 
    height: 110, 
    width: 110
  },
  categoryButton: {
    marginTop: 20
  },
  mainflatlistContainer: {
    paddingBottom: 220
  }
});

export default HomeComponent;
