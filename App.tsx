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
                <Card.Title title="Card Title" subtitle="Card Subtitle" />
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
              <View style={styles.sectionContainer}>
                <Text style={{color: colors.primary}}>
                  Welcome to Fields Of Peril
                </Text>
                <Text style={styles.sectionDescription}>
                  The game that will shiver you to your marrow.
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
