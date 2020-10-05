import React from 'react';
import {Alert, Button, SafeAreaView, Text, TextInput} from 'react-native';
import {Card} from 'react-native-paper';

const handleSubmit = () => {
  alert('This function should handle player input');
};

const NewGameScreen = () => {
  const [value, onChangeText] = React.useState('Enter your command...');

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
      </SafeAreaView>
    </>
  );
};

export default NewGameScreen;
