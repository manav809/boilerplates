import { Button, Container, Fab, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#f6ccff",
}));
// Styling Components: Create a new component that has styling on it
//const newComponent = styled(OldComponent) =>
function App() {
  return (
    <Container>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} sx={{ alignItems: "end" }}>
          <Typography variant="h1">Hello</Typography>
          <Typography variant="h2">Hello</Typography>
          <Typography variant="subtitle1">Hello</Typography>
          <Typography variant="subtitle2">Hello</Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Contained primary button</Button>
          <Button variant="contained" color="secondary">
            Secondary Button
          </Button>
          <Button variant="outlined" color="primary" disableRipple>
            Contained outlined button
          </Button>
          <StyledButton variant="outlined" color="info">
            Styled button
          </StyledButton>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Fab color="primary">
            <AddIcon />
          </Fab>
          <Fab color="primary" size="medium">
            <AddIcon />
          </Fab>
          <Fab color="primary" size="small">
            <AddIcon />
          </Fab>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
