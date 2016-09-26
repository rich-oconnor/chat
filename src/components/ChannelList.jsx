import React from 'react';
import ReactDOM from 'react-dom';
import Channel from './Channel.jsx';
import Card from 'material-ui/Card'
import List from 'material-ui/List'

class ChannelList extends React.Component {
    constructor(){
        super();
        this.state = {
            channels: [
                'Dogs',
                'Cats'
            ]
        };
    }

    render(){
        var channelNodes = this.state.channels.map((channel) => {
            return (
                <Channel channel={channel} />
            );
        });

        return (
            <Card style={{
                flexGrow: 1
            }}>
                <List>
                    {channelNodes}
                </List>
            </Card>
        );

    }
}

export default ChannelList;