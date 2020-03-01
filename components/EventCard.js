import React, { Component } from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const EventCard = () => {
  return (
    <Card>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={props => <Avatar.Icon {...props} icon="folder" />}
      />
      <Card.Content>
        <Title>Hello Dadio</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover
        source={{
          uri: "https://picsum.photos/700"
        }}
      />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default EventCard;
