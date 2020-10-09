import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import {Card} from 'react-native-paper';

import {firebase} from '../../src/firebase/config';
import styles from './styles';
import {
  goNorth,
  goSouth,
  goEast,
  goWest,
} from '../../CustomProperties/inputController';

const handleSubmit = (inputPhrase: string) => {
  console.log(inputPhrase);
};

const NewGameScreen = () => {
  const [value, onChangeText] = useState('Enter your custom command...');
  const [locations, setLocations] = useState([]);
  // on starting a new game the player should always start in the apartment living room
  const [currentLocationId, setCurrentLocationId] = useState(1);
  const newLocations = [];

  const goSouth = currentLocationId => {
    currentLocation = locations.find(
      location => location.locationId == currentLocationId,
    );
    if (currentLocation.locationIdSouth) {
      console.log(currentLocation);
      setCurrentLocationId(currentLocation.locationIdSouth);
    }
  };

  const goNorth = currentLocationId => {
    currentLocation = locations.find(
      location => location.locationId == currentLocationId,
    );
    if (currentLocation.locationIdNorth) {
      console.log(currentLocation);
      setCurrentLocationId(currentLocation.locationIdNorth);
    }
  };

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('locations')
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          let location = doc.data();
          newLocations.push(location);
          setLocations(newLocations);
        });
      });
    (error: any) => {
      console.log(error);
    };
  }, []);

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
            <Text>
              Current location:{' '}
              {locations.length === 2
                ? locations.find(
                    location => location.locationId == currentLocationId,
                  ).name
                : 'Apartment Living Room'}
            </Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={text => onChangeText(text)}
              onSubmitEditing={event => handleSubmit(event.nativeEvent.text)}
              value={value}
            />
          </Card.Content>
          <Card.Actions>
            {/* break this out into a control panel component */}
            <Button
              title="Go North"
              onPress={() => goNorth(currentLocationId)}
            />
            <Button
              title="Go South"
              onPress={() => goSouth(currentLocationId)}
            />
            <Button title="Go East" onPress={() => goEast()} />
            <Button title="Go West" onPress={() => goWest()} />
          </Card.Actions>
        </Card>
        <View style={styles.sectionContainer}>
          <Card>
            <Card.Content>
              {locations && (
                <FlatList
                  data={locations}
                  renderItem={({item}) => <Text>{item.name}</Text>}
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

export default NewGameScreen;
