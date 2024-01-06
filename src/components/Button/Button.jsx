import React from "react";
import css from "./Button.module.css";


export const LoadMoreButton = ({ onClick, isVisible }) => {
  if (!isVisible) {
    return ;
  }

    return (
      <div className={css.buttonWrapper} >
      <button className={css.button} onClick={onClick}>Load more</button></div>
    );
  }


// export class LoadMoreButton extends Component {
//   render() {
//     const { onClick, isVisible } = this.props;

//     if (!isVisible) {
//       return null;
//     }

//     return (
//       <div className={css.buttonWrapper} >
//       <button className={css.button} onClick={onClick}>Load more</button></div>
//     );
//   }
// }