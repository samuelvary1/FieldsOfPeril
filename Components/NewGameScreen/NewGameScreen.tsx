import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
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
  const newLocations = [];

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('locations')
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          let location = doc.data();
          // location = JSON.stringify(location);
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
            <Text>"You find yourself in an abandoned apartment..."</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={text => onChangeText(text)}
              onSubmitEditing={(event) => handleSubmit(event.nativeEvent.text)}
              value={value}
            />
          </Card.Content>
          <Card.Actions>
            <Button title="Go North" onPress={() => goNorth()} />
            <Button title="Go South" onPress={() => goSouth()} />
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
