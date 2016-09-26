import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

class Message extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ListItem leftAvatar={<Avatar src="https://lh3.googleusercontent.com/-60D9pCoPuMU/AAAAAAAAAAI/AAAAAAAAAwE/AXQ5WiG4Cn4/s120-p-rw-no/photo.jpg"/>}>
                {this.props.message}
            </ListItem>
        );
    }
}

export default Message;