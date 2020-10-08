import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Card} from 'react-native-paper';

import {firebase} from '../../src/firebase/config';
import styles from './styles';

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
    (error: any) => {
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

export default NewGameScreen;
