// App.js
import React from 'react';
import { ONE_ON_ONE_VIDEO_CALL_CONFIG,GROUP_VOICE_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import { StyleSheet, View } from 'react-native';
import { ZegoUIKitPrebuiltCall } from '@zegocloud/zego-uikit-prebuilt-call-rn';

export default function Audio(props) {
    const userId = String(Math.floor(Math.random()*100000))
    console.log(userId)
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={Your_appI}
                appSign={"your_app_sign"}
                userID={`user_${userId}`} // userID can be something like a phone number or the user id on your own user system. 
                userName={"user1"}
                callID={"callID"} // callID can be any unique string. 

                config={{
                    ...GROUP_VOICE_CALL_CONFIG,
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
