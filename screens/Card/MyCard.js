import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';
import {
  Header,
  TextButton,
  CartQuantityButton,
  CardItem,
} from '../../components';

const MyCard = ({navigation}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const renderHeader = () => {
    return (
      <Header
        title="MY CARDS"
        containerStyle={styles.headerContainer}
        leftComponent={
          <TextButton
            icon={icons.back}
            iconStyle={styles.iconBack}
            buttonContainerStyle={styles.btnBack}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<View style={{width: 40}}></View>}
      />
    );
  };

  const renderMyCards = () => {
    return (
      <View>
        {dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              item={item}
              key={`MyCard-${item.id}`}
              onPress={() => setSelectedCard({...item, key: 'MyCard'})}
              isSelectedItem={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `MyCard-${item.id}`
              }
            />
          );
        })}
      </View>
    );
  };

  const renderAddNewCard = () => {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text style={{...FONTS.h3}}>Add New Card</Text>
        {dummyData.allCards.map((item, index) => {
          return (
            <CardItem
              item={item}
              key={`NewCard-${item.id}`}
              onPress={() => setSelectedCard({...item, key: 'NewCard'})}
              isSelectedItem={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `NewCard-${item.id}`
              }
            />
          );
        })}
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}>
        <TextButton
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedCard == null ? COLORS.gray : COLORS.primary,
          }}
          label={selectedCard?.key == 'NewCard' ? 'Add' : 'Place Your Order'}
          labelStyle={{color: COLORS.white, ...FONTS.body2}}
          disable={selectedCard == null}
          onPress={() => {
            if (selectedCard?.key == 'NewCard') {
              navigation.navigate('AddCard', {selectedCard: selectedCard});
            } else {
              navigation.navigate('Checkout', {selectedCard: selectedCard});
            }
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      {renderHeader()}

      {/* Cards */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
        showsVerticalScrollIndicator={false}>
        {/* My Cards */}
        {renderMyCards()}

        {/* Add New Card */}
        {renderAddNewCard()}
      </ScrollView>

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.white},
  headerContainer: {
    height: 50,
    marginHorizontal: SIZES.padding,
    marginTop: 50,
  },
  btnBack: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.gray2,
  },
  iconBack: {width: 20, height: 20, tintColor: COLORS.gray2},
});

export default MyCard;
