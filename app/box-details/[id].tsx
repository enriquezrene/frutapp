import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Text, View } from 'react-native';

import { CajaItem } from '@/src/app/box/components/caja-item';
import { useCaja } from '@/src/app/box/hooks/use-caja';
import React from 'react';
import { Caja } from '@/src/app/box/types/caja';

export default function BoxDetails() {
  const { id } = useLocalSearchParams();
  const { caja, loading, error } = useCaja(Number(id));

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <CajaItem
        caja={caja as Caja}
      />
    </View>
  );
}