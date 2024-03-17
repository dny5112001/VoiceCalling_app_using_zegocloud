// App.js
import React from 'react';
import { ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import { StyleSheet, View } from 'react-native';
import { ZegoUIKitPrebuiltCall } from '@zegocloud/zego-uikit-prebuilt-call-rn';

export default function VoiceCallPage(props) {
    const userId = String(Math.floor(Math.random()*100000))
    console.log(userId)
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={316783372}
                appSign={"bcda4be3ef83f3b1a93a14b5eda3a7ba41cae43826de42079da46451dffab2c5"}
                userID={`user_${userId}`} // userID can be something like a phone number or the user id on your own user system. 
                userName={"user1"}
                callID={"callID"} // callID can be any unique string. 

                config={{
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { 
                        // Handle the event when the user is the only one in the room
                        // You can navigate to the homepage or perform any other action here
                        console.log("You are the only one in the room");
                    },
                    onHangUp: () => {
                        // Handle the event when the user hangs up the call
                        // You can navigate to the homepage or perform any other action here
                        console.log("Hang up the call");
                    },
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
