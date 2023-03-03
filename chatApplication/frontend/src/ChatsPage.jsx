import React from 'react';

import {
    PrettyChatWindow
} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {

   
return <div style={{height: "100vh"}}>
<PrettyChatWindow
projectId="41c4e2e6-1368-47e0-88d4-efb6e8a7ccbd"
username={props.user.username}
secret={props.user.secret}
style={{ height: '100vh' }}
/>

</div>
}

export default ChatsPage