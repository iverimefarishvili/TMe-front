import React from 'react';
import { View } from 'react-native';
import { Marker, MapView } from 'react-native-maps';

export default function Map(mapData) {
  return (
    <View style={{
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    }}>
        <MapView
            region={this.state.region}
            onRegionChange={this.onRegionChange}
        >
        {mapData.map((marker, index) => (
            <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
            />
        ))}
        </MapView>
    </View>
  );
}
