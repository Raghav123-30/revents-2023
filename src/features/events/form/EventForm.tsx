import { Button, Form, Header, Segment } from "semantic-ui-react";

const EventForm = () => {
  return (
    <Segment clearing>
      <Header content="Create event" />
      <Form>
        <Form.Field>
          <input type="text" placeholder="Event title"></input>
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Category"></input>
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Description"></input>
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="City"></input>
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Venue"></input>
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Date"></input>
        </Form.Field>
        <Button
          type="submit"
          floated="right"
          positive
          content="Submit"
        ></Button>
        <Button floated="right" content="Cancel"></Button>
      </Form>
    </Segment>
  );
};

export default EventForm;
