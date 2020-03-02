import React, { Component } from "react";

import { BottomNavigation, Text } from "react-native-paper";

import EventCard from "./EventCard";

const HomeRoute = () => <EventCard title="Home" />;

const FavoritesRoute = () => <EventCard title="Favorites" />;

const ProfileRoute = () => <EventCard title="Profile" />;

class NavBar extends Component {
  state = {
    index: 0,
    routes: [
      { key: "home", title: "Home", icon: "home" },
      { key: "favorites", title: "Favorites", icon: "favorites" },
      { key: "profile", title: "Profile", icon: "profile" }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    favorites: FavoritesRoute,
    profile: ProfileRoute
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

export default NavBar;
