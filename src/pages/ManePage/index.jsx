import React from "react";
import Styles from "./ManePage.module.scss";
import Card from "../../components/Card";
import Grid from "@mui/material/Grid"; // Grid version 1
export default function ManePage() {
  return (
    <>
      <div className={Styles.wrapper}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 2, md: 10 }}
        >
          {[...new Array(5)].map((obj) => (
            <Grid item xs={2}>
              <Card />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
