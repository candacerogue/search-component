import React, { Component } from 'react';
import '../css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; //Material UI styles
import Paper from 'material-ui/Paper'; //Material UI Paper component



export default class Album extends Component {
    render() {
        const style = {
          root: {
              //Here I would like to style the Album div as Material UI grid & maybe full-width
          },

          paper: {  
            height: 200,
            width: 200,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
          },
        
        label: {
            margin: 10
        }
    }
          
    return(
        <div className="Album">
                <MuiThemeProvider>
                    <Paper style={style.paper} zDepth={5} rounded={false}>
                        <img src={this.props.imageUrl} alt='Album Cover'/>
                    </Paper>
                    <br/>
                    <br/>
                    <label style={style.label} alt='Album Name'>{this.props.albumName}</label>
                    <br/>
                    <label style={style.label} alt='Artist Name'>{this.props.artistName}</label>
                </ MuiThemeProvider>
        </div>
    )
    }
}
