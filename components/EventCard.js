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
          uri:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutupandtakemymoney.com%2Ftrump-orange-face-meme-fence-spray-paint%2F&psig=AOvVaw2YXGLe2mkvE23iz8eAVGC1&ust=1583119818603000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjo5YWr-OcCFQAAAAAdAAAAABAD"
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
