import { Fragment } from "react";
import classes from "./Header.module.css";
import Dishes from "../../assets/Dishes.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Restaurant</h1>
        <HeaderCartButton onClick={props.onOpenCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={Dishes} alt="Images"></img>
      </div>
    </Fragment>
  );
};

export default Header;
