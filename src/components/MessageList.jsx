import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx';
import Card from 'material-ui/Card'
import List from 'material-ui/List'

class MessageList extends React.Component {
    constructor(){
        super();
        this.state = {
            messages: [
                'Hi how are you going mate?',
                'Good thanks, hows life?'
            ]
        };
    }

    render(){
        var messageNodes = this.state.messages.map((message) => {
            return (
                <Message message={message} />
            );
        });

        return (
            <Card style={{
                flexGrow: 2,
                marginLeft: 30
            }}>
                <List>
                    {messageNodes}
                </List>
            </Card>
        );

    }
}

export default MessageList;