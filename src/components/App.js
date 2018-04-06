import React, { Component } from 'react';
import logo from '../images/ITunes_OS_X.svg.png';
import '../css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; //Material UI styles
import AutoComplete from 'material-ui/AutoComplete'; //Material UI Search Bar 
import Album from './Album';

class App extends Component {

  //Initial State
  state = {
    albums: [],
    artistName: [],
    imageUrl: [],
    albumName: [],
  };

 //Provides data to render in the search bar
  handleUpdateInput = (value) => {
    this.setState({
      dataSource:[
        value,
      ],
    });
  };


  //Renders Album JSX element (with albumArtwork, albumName, & artistName)
  handleNewRequest = (content, index) => {
    let selectedAlbum = this.state.albums[index];
    // console.log('this is my selection', content, index);
    if(content ? this.state.artistName : 'ArtistName'){

      console.log('this is my selection', content, index);
      console.log('This is the selected Album', selectedAlbum);
      console.log('This is the imageUrl', this.state.imageUrl[index]);
      // return (

      //   {selectedAlbum}
   
      // )
      // return <Album />
      // return (
      //   <div>
      //     <img src={this.state.imageUrl[index]} alt='Album Cover'/>
      //     <label alt='Album Name'>{this.state.albumName[index]}</label>
      //   </div>
      // )
    }

  }

 //Uses life-cycle method to fetch the given API and update state with returned data 
  componentDidMount(){
    fetch('https://itunes.apple.com/search?term=${ARTIST_NAME}')
    .then(results => results.json())
    .then(data => {
      let albums = data.results.map((album) => {
        return (
          <div key={album.collectionId}>
            <Album
            artistName={album.artistName}
            imageUrl={album.artworkUrl100}
            albumName={album.collectionName}
            />
          </div>
        )
      })

      let artistName = data.results.map((album) => {
        if(album.artistName === 'ArtistName'){
          return 'Unknown Artist'
        }
        return album.artistName
      })

      let imageUrl = data.results.map((album) => {
        return album.artworkUrl100
      })

      let albumName = data.results.map((album) => {
        return album.collectionName
      })

      this.setState({albums: albums,
                     artistName: artistName,
                     imageUrl: imageUrl,
                     albumName: albumName
                    });
      console.log("state", this.state.artistName);
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">iTunes Search Component</h1>
        </header>

        <div className='search-bar'>
          <MuiThemeProvider> 
              <AutoComplete
                hintText="Search Artist..."
                dataSource={this.state.artistName}
                filter={AutoComplete.caseInsensitiveFilter}
                onUpdateInput={this.handleUpdateInput}
                onNewRequest={this.handleNewRequest}
              />
          </ MuiThemeProvider>
      </div>
          {this.state.albums} 
      </div>
    );
  }
}

export default App;
