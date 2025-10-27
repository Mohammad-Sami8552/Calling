import React from "react";
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";


const RoomPage = () => {
    const {roomId} = useParams();
    const myMeeting = async(element) => {
        const appID = 1358082771;
        const serverSecret = "3901bbd15341a5ef2ae3d07a7f5d9adb" ;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Mohammad Sami");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
          container : element,
          sharedLinks : [
            {
                name : "Copy Link",
                url : `https://calling-theta.vercel.app/room/${roomId}`
            }
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall
          },
          showScreenSharingButton : true
        });

    }
    return <div>
        <div ref ={myMeeting}/>
    </div>
};
export default RoomPage;