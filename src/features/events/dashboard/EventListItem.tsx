import {
  Button,
  Icon,
  Item,
  ItemGroup,
  List,
  Segment,
  SegmentGroup,
} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { AppEvent, Attendee } from "../../../app/types/event";

type Props = {
  event: AppEvent;
};

const EventListItem = ({ event }: Props) => {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image
              size="tiny"
              circular
              src={event.hostPhotoURL}
            ></Item.Image>
            <Item.Content>
              <Item.Header>{event.title}</Item.Header>
              <Item.Description>{event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {event.date}
          <Icon name="marker" />
          {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee: Attendee) => (
            <EventListAttendee
              key={attendee.id}
              attendee={attendee}
            ></EventListAttendee>
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button color="teal" floated="right" content="View" />
      </Segment>
    </SegmentGroup>
  );
};

export default EventListItem;
