import React, { Component } from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const EventCard = props => {
  const title = { props };
  return (
    <Card>
      <Card.Title
        title="hello"
        subtitle="Card Subtitle"
        left={props => <Avatar.Icon {...props} icon="folder" />}
      />
      <Card.Content>
        <Title>hello</Title>
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
