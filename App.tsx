/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Provider as PaperProvider,
  useTheme,
  Button,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import theme from './CustomProperties/Theme';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const {colors} = useTheme();
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
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
                <Card.Content>
                  <Title>Welcome to Fields of Peril</Title>
                  <Paragraph>
                    A text based adventure game in the spirit of Zork
                  </Paragraph>
                </Card.Content>
                <Card.Cover
                  source={{
                    uri:
                      'https://cdn.theatlantic.com/assets/media/img/photo/2014/03/believed-to-be-russian-soldiers/r01_RTR3G2M6-1/original.jpg',
                  }}
                />
                <Card.Actions>
                  <Button>New Game</Button>
                  <Button>Continue</Button>
                </Card.Actions>
              </Card>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionDescription}>
                  Choose one of the options above to gear up and get started.
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
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
});

export default App;
