// App.js
import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import VoiceCallPage from './VoiceCallPage'; // Assuming VoiceCallPage is your main component
import { NavigationContext } from '@react-navigation/native';
import Audio from './audiocall';

export default function App() {
    return (
        <NavigationContainer>
            <Audio />
            {/* <VoiceCallPage /> */}
        </NavigationContainer>
    );
}
