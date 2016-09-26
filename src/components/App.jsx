
import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
    constructor(){
        super();

    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    getChildContext(){
        return {
          //muiTheme: getMuiTheme(darkBaseTheme)
        };

    }

    render(){
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Awesome Chat App"/>
                    <div style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        maxWidth: 1200,
                        width: '100%',
                        margin: '30px auto 30px'
                    }}>
                        <ChannelList/>
                        <MessageList/>
                    </div>
                    <MessageBox/>
                </div>
            </MuiThemeProvider>
            );
    }
}

if (module.hot) {
    module.hot.accept();
}

export default App;