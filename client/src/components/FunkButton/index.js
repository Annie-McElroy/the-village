import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function FunkButton({ onClick, value }) {
  return (
    <Button variant="contained" onClick={onClick}>
      {value}
    </Button>
  );
}
