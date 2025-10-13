import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BizumScreen from './screens/BizumScreen';

export type RootStackParamList = {
    Bizum: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Bizum" component={BizumScreen} />
        </Stack.Navigator>
    );
}