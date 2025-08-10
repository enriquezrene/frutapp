import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { BoxItem } from './box/box-item';
import { Box } from './box/types/box';

export default function BoxDetails() {
  const { box } = useLocalSearchParams();
  const boxData = JSON.parse(box as string) as Box;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <BoxItem 
        box={boxData}
      />
    </View>
  );
}