import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = term => {
    unsplash
      .get("/search/photos", {
        params: { query: term }
      })
      .then(res => this.setState({ images: res.data.results }));
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
