import React from 'react';
import Card from 'material-ui/Card';

class MessageBox extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card style={{
                maxWidth: 1200,
                width: '100%',
                margin: '30px auto',
                padding: '30'
            }}>
                <textarea style={{
                    width: '100%',
                    borderColor: '#D0D0D0',
                    resize: 'none',
                    borderRadius: 3,
                    minHeight: 50,
                    color: '#555',
                    fontsize: 14,
                    outline: 'auto 0px'
                }}></textarea>
            </Card>
        );
    }
}

export default MessageBox;