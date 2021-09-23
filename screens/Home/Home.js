import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';
import {HorizontalFoodCard} from '../../components';

const Section = ({title, onPress, children}) => {
  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}>
        <Text style={{flex: 1, ...FONTS.h3}}>{title}</Text>

        <TouchableOpacity onPress={onPress}>
          <Text style={{color: COLORS.primary, ...FONTS.body3}}>Show All</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {children}
    </View>
  );
};

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const [selectedMenuType, setSelectedMenuType] = useState(1);

  const [menuList, setMenuList] = useState([]);

  const [recommends, setRecommends] = useState([]);

  console.log(recommends);

  const handleChangeCategory = (categoryId, menuTypeId) => {
    // recommended menu
    let selectedRecommended = dummyData.menu.find(a => a.name == 'Recommended');

    // set the recommend
    setRecommends(
      selectedRecommended?.list.filter(a => a.categories.includes(categoryId)),
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
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          marginVertical: SIZES.base,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}>
        {/* Icon */}
        <Image
          source={icons.search}
          style={{width: 20, height: 20, tintColor: COLORS.black}}
        />

        {/* Input */}
        <TextInput
          style={{flex: 1, marginLeft: SIZES.radius, ...FONTS.h3}}
          placeholder="Search Food ..."
        />

        {/* Filter Button */}
        <TouchableOpacity>
          <Image
            source={icons.filter}
            style={{height: 20, width: 20, tintColor: COLORS.black}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderMenuType = () => {
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
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                marginLeft: SIZES.padding,
                marginRight:
                  index == dummyData.menu.length - 1 ? SIZES.padding : 0,
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
        }}
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
              containerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18,
                padding: 18,
                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                paddingHorizontal: SIZES.radius,
                alignItems: 'center',
              }}
              imageStype={{
                marginTop: 35,
                height: 150,
                width: 150,
              }}
              item={item}
              onPress={() => console.log('')}
            />
          )}
        />
      </Section>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* Search */}
      {renderSearch()}

      {/* List */}
      <FlatList
        data={menuList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 220}}
        ListHeaderComponent={
          <View>
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

export default Home;
