import React from "react";
import Styles from "./ManePage.module.scss";
import Card from "../../components/Card";
import Grid from "@mui/material/Grid";
import Cards from "../../assets/cards.json";
import Filter from "../../components/Filter";
export default function ManePage() {
  return (
    <>
      <div className={Styles.wrapper}>
        <Filter />
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 6, sm: 2, md: 10 }}
        >
          {Cards.map((obj) => (
            <Grid item xs={2}>
              <Card {...obj} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
