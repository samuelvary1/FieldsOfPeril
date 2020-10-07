import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Card} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {firebase} from '../src/firebase/config';

const handleSubmit = () => {
  alert('This function should handle player input');
};

const NewGameScreen = () => {
  const [value, onChangeText] = React.useState('Enter your command...');
  const [locations, setLocations] = useState([]);
  const newLocations = [];

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('locations')
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          let location = doc.data();
          location = JSON.stringify(location);
          newLocations.push(location);
          console.log(newLocations);
          setLocations(newLocations);
        });
      });
    error => {
      console.log(error);
    };
  }, []);

  const renderEntity = () => {
    return (
      <View>
        <Text>Current location: {locations[0]}</Text>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView>
        <Card>
          <Card.Cover
            source={{
              uri:
                'https://i.pinimg.com/originals/a6/88/3c/a6883c1a9674fcd40a42a011daccc614.jpg',
            }}
          />
          <Card.Content>
            <Text>"You find yourself in an abandoned apartment..."</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
          </Card.Content>
          <Card.Actions>
            <Button title="Submit" onPress={handleSubmit} />
          </Card.Actions>
        </Card>
        <View style={styles.sectionContainer}>
          <Card>
            <Card.Content>
              {locations && (
                <FlatList
                  data={locations}
                  renderItem={renderEntity}
                  keyExtractor={location => location.locationId}
                  removeClippedSubviews={true}
                />
              )}
            </Card.Content>
          </Card>
        </View>
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

export default NewGameScreen;
