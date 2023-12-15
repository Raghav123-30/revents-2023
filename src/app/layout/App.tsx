import "./styles.css";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import Navbar from "./nav/Navbar";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <>
      <Navbar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </>
  );
}

export default App;
