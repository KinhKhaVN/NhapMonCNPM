import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>();

  const MAX = 1e4;

  return (
    <View style = {styles.container}>
      <Text style = {styles.thienLy}>Nhập tên Đom Đóm</Text>
      <TextInput style = {styles.input} 
        autoCapitalize = {"characters"}
        onChangeText = {(name) => setName(name)}
        multiline
      />

      <Text>Đom Đóm: {name}</Text>

      <Text style = {styles.thienLy}> 
        Thiên Lý ới!!!
        Meo Meo = {count} lần
      </Text>

      <View>
        <Button color = "red" title = "Meo Meo" onPress = {() => setCount(count + 1)} />
        <Button color = "green" title = "Hồng nhan" onPress = {() => setCount(count + 5)} />
        <Button color = "blue" title = "Bạc phận" onPress = {() => setCount(count + 10)} />
        <Button color = "pink" title = "Sóng gió" onPress = {() => setCount(count + MAX)} />
        <Button color = "orange" title = "Reset Meo Meo" onPress={() => setCount(0)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thienLy: {
    fontSize: 60,
    fontWeight: "600",
  },
  input: {
    borderColor: "green",
    borderWidth: 1,
    width: 200,
    padding: 15
  }
});
