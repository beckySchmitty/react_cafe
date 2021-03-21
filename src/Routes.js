import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import { Route, Switch, Redirect } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import AddFoodForm from "./AddFoodForm";
import NotFound from "./NotFound"

const Routes = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [snacks, setSnacks] = useState([]);
    const [drinks, setDrinks] = useState([]);

  
    useEffect(() => {
      async function getSnacks() {
        let snacks = await SnackOrBoozeApi.getSnacks();
        setSnacks(snacks);
        setIsLoading(false);
      }
      getSnacks();
    }, []);


    useEffect(() => {
      async function getDrinks() {
        let drinks = await SnackOrBoozeApi.getDrinks();
        setDrinks(drinks);
        setIsLoading(false);
      }
      getDrinks();
    }, []);

    function addFood(newFood, type) {

      if (type === "snack") {
        setSnacks(snacks => [...snacks, {...newFood, id: newFood.name}])
      }

      if (type === "drink") {
        setDrinks(drinks => [...drinks, {...newFood, id: newFood.name}])
      }
    }

  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }


    return (
        <main>
        <Switch>
          <Route exact path="/">
            <Home snacks={snacks} />
          </Route>
          <Route exact path="/snacks">
            <Menu foods={snacks} start ="/snacks" title="Snacks" />
          </Route>
          <Route exact path="/drinks">
            <Menu foods={drinks} start="/drinks" title="Drinks" />
          </Route>
          <Route exact path="/add">
            <AddFoodForm addFood={addFood} />
          </Route>
          <Route exact path="/snacks/:id">
            <Item items={snacks} cantFind="/snacks" />
          </Route>
          <Route exact path="/drinks/:id">
            <Item items={drinks} cantFind="/drinks" />
          </Route>
          <Route>
            <NotFound />
          </Route>        
          </Switch>
      </main>
    )
}

export default Routes;