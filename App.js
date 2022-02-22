import { StyleSheet } from 'react-native';
import { MyPager } from './MyPager';

const images = [
  'https://m.media-amazon.com/images/I/81JulKoOyLL._SL1500_.jpg',
  'https://m.media-amazon.com/images/I/81DJbe2OaSL._SL1346_.jpg',
  'https://m.media-amazon.com/images/I/81ycygHeWaS._SL1500_.jpg',
  'https://m.media-amazon.com/images/I/81QoNRp5+WL._SL1353_.jpg',
];

export default function App() {
  return <MyPager images={images} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
