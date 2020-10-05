import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {Card, useTheme} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const handlePress = () => {
  // eslint-disable-next-line no-alert
  alert('You tapped the button!');
};

declare const global: {HermesInternal: null | {}};

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <Card>
              <Card.Cover
                source={{
                  uri:
                    'https://cdn.theatlantic.com/assets/media/img/photo/2014/03/believed-to-be-russian-soldiers/r01_RTR3G2M6-1/original.jpg',
                }}
              />
            </Card>
            <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <Button onPress={handlePress} title="New Game" />
              </View>
              <View style={styles.buttonContainer}>
                <Button onPress={handlePress} title="Continue" />
              </View>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>
                Choose one of the options above to gear up and get started.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
