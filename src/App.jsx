import { Box } from "@mui/material";
import "./App.css";
import { BG } from "./components/BG/BG";
import { Button } from "./components/Button/Button";
import { Heading } from "./components/Typography/Heading";
import { Text } from "./components/Typography/Text";

function App() {
  return (
    <Box className="App">
      <BG type="blue">
        <Heading text="Hello, world!" />
        <Text text="some text" />
        <Button text="Some disabled button" disabled={true} />
        <Button text="Some button" />
      </BG>
    </Box>
  );
}

export default App;
