import React, { useEffect, useRef, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet, View, Button } from "react-native";
import * as Location from "expo-location";

export default function TaskMap({ navigation, route }) {
  const [userLocation, setUserLocation] = useState(null); // State to store user's current location
  const [markers, setMarkers] = useState([]); // State to store array of markers
console.log("nav: "+route.props)
  useEffect(() => {
    // Fetch user's current location when component mounts
    getLocation();
  }, []);

  useEffect(() => {
    // Generate 10 random markers when userLocation is available
    if (userLocation) {
      const newMarkers = Array.from({ length: 10 }, (_, index) => ({
        latitude: userLocation.latitude + Math.random() * 0.05 - 0.025,
        longitude: userLocation.longitude + Math.random() * 0.05 - 0.025,
        title: `Marker ${index + 1}`,
      }));
      setMarkers(newMarkers);
    }
  }, [userLocation]);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setUserLocation(location.coords); // Update userLocation state with current location coordinates
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        // onPress={handleMapPress} // Add onPress event handler
        initialRegion={{
          latitude: userLocation ? userLocation.latitude : 37.33,
          longitude: userLocation ? userLocation.longitude : -122,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {userLocation && (
          <>
            {/* Render user's location marker */}
            <Marker
              coordinate={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
              }}
              title="Your Location"
              description="You are here"
            />
            {/* Render additional markers */}
            {markers.map((marker, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title={marker.title}
              />
            ))}
          </>
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    zIndex: 2,
  },
  map: {
    // flex: 1,
    width: "100%",
    height: "100%",
  },
});
