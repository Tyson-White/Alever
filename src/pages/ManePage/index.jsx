import React from "react";
import Styles from "./ManePage.module.scss";
import Card from "../../components/Card";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Filter from "../../components/Filter";
import { useDispatch, useSelector } from "react-redux";
import { setCards } from "../../redux/slices/cardSlice";
export default function ManePage() {
  const cards = useSelector(state => state.card.cardsList)
  const dispatch = useDispatch()
  React.useEffect(() => {
    axios.get('https://6450f64ce1f6f1bb22a3c634.mockapi.io/posts')
      .then(res => {
        dispatch(setCards(res.data))
      })
  }, [])
  return (
    <>
      <div className={Styles.wrapper}>
        <Filter />
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 6, sm: 2, md: 10 }}
        >
          {cards.map((obj) => (
            <Grid item xs={2}>
              <Card {...obj} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
