import { Typography } from "@mui/material";
import SandwichHTML from "./SandwichHTML";

export default function Conclusion() {
  return (
    <SandwichHTML>
      <div style={{ padding: '15px' }}>
        <Typography variant="h5">Thanks for visting my site!</Typography>
        <Typography>The source code can be found <a href="https://github.com/MichaelMortlockChapman/MichaelMortlockChapman.github.io" rel="noreferrer" target="_blank">here</a>.</Typography>
        <Typography>3D model "Sandwich assembly" (https://skfb.ly/ozG7Q) by Harry Charalambous is licensed under Creative Commons Attribution, retrieved from https://sketchfab.com/.</Typography>
      </div>
    </SandwichHTML>
  )
}