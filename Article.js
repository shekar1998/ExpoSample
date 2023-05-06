// @ts-nocheck
import React from 'react';
import { View, StyleSheet, Text, Pressable, Image, Dimensions } from 'react-native';
import moment from 'moment';
import * as WebBrowser from 'expo-web-browser';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ListItem } from 'react-native-elements';
import { Button } from 'react-native-paper';

const list = [
  {
    name: 'Basic Internal Clean',
    avatar_url: 'https://cdn-icons-png.flaticon.com/512/2955/2955734.png',
    subtitle: 'Add On Service',
  },
  {
    name: 'Fiber Polish',
    avatar_url: 'https://cdn-icons-png.flaticon.com/128/10146/10146126.png',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Vacuum Cleaning',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];
const { width, height } = Dimensions.get('window');
const Article = (props) => {
  const goToSource = () => {
    WebBrowser.openBrowserAsync(props.url);
  };

  return (
    <Pressable onPress={goToSource}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://espressocarwash.co.nz/wp-content/uploads/2021/06/516x356-CUSTOMER-FEEDBACK-2.jpg',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsSubContainer}>
            <Text style={styles.HeadingcontentText}>Add On Service</Text>
            {list.map((item, i) => {
              return (
                <View style={styles.ListStyle}>
                  {/* <Image
                    source={{
                      uri: `${item.avatar_url}`,
                    }}
                    style={{
                      width: 35,
                      height: 35,
                      backgroundColor: 'rgba(198, 220, 255, 0.418)',
                      padding: 10,
                      borderRadius: 50,
                    }}
                  /> */}
                  {/* <Text style={styles.detailsWashText}>{item.name}</Text> */}
                  <Button
                    mode='text'
                    buttonColor={'rgba(198, 220, 255, 0.218)'}
                    textColor='#fff'
                    contentStyle={{ backgroundColor: 'rgba(198, 220, 255, 0.118)' }}
                    onPress={() => console.log('Pressed')}
                  >
                    {item.name}
                  </Button>
                </View>
              );
            })}
            {/* <View style={[styles.box]}></View> */}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

{
  /* <Text style={styles.contentText}>
Does your interior need a thorough deep clean? This service includes a full vacuum, clean and conditioning
treatment on all seats as well as carpets and mats. Dashboard, internal trims, door panels, pockets and
plastics as well as all interior glass are included with this deluxe interior service.

Alternative Days external & one intnal clean

Add On Service
  Basic Internal Clean
  Fiber Polish
  Vacuum Cleaning

On Demand Service
  Car Interior Foam clean
  Rubbing & Polishing
  A/C vent Clean
  Creamic Coating
  Teeflon Coating


</Text> */
}

export default Article;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 1,
    height: '90%',
    justifyContent: 'center',
    marginVertical: 20,
  },
  imageContainer: {
    height: '96%',
    width: '33%',
    left: 27,
    zIndex: 12,
    top: -14,
    shadowOpacity: 1,
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 12,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden',
    // padding: 2,
  },
  detailsContainer: {
    height: height / 3.5,
    width: '85%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowOpacity: 1,
    shadowColor: '#000',
    shadowOffset: {
      height: 1,
      width: 5,
    },
    elevation: 12,
    backgroundColor: '#fff',
    right: 45,
    zIndex: 11,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
  },
  ListStyle: {
    width: '75%',
    color: '#fff',
    flexDirection: 'row',
    padding: 5,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  heading: {
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: '#fff',
    marginTop: 20,
    elevation: 12,
  },
  contentText: {
    fontSize: 15,
    color: '#fff',
    width: '72%',
    marginHorizontal: 4,
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginVertical: 40,
    backgroundColor: '#61dafb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsSubContainer: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    zIndex: 11,
    backgroundColor: '#0099ea',
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
  HeadingcontentText: {
    fontWeight: '700',
    fontSize: 21,
    color: '#fff',
    width: '72%',
    marginHorizontal: 4,
    marginTop: 15,
    justifyContent: 'center',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
  detailsWashText: {
    color: '#fff',
    paddingHorizontal: 5,
    textAlignVertical: 'center',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  button: {
    width: '100%',
    height: '100%',
  },
});
