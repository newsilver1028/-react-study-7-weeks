import { useSelector, useDispatch } from 'react-redux';
import { ReactElement } from "react"

import { cartReducer } from '../Reducers/cartReducer';
import { RootState } from '../Reducers';
import { Data, FoodData, Discounts, Items, initialState } from '../Reducers/cartReducer';
import { CartFoodProps } from "./CartList"

export default function CartFood(props: CartFoodProps): ReactElement {
  const {name, price, quantitiy } = props;

  const dispatch = useDispatch();
  const { cartData } = useSelector((store: RootState) => store.cartReducer);

  const onIncrease = (target: string): void => {
    dispatch(cartReducer.actions.INCREASE(target));
    dispatch(cartReducer.actions.UPDATE());
  } 

  const onDecrease = (target: string): void => {
    dispatch(cartReducer.actions.DECREASE(target));
    dispatch(cartReducer.actions.UPDATE());
  }

  const onDelete = (target: string): void => {
    dispatch(cartReducer.actions.DELETE(target));
    dispatch(cartReducer.actions.UPDATE());
  }

  console.log(cartData)

  return (
    <>
    <div id={name}>{name}</div>
    <div id={name}>{price}</div>
    <div onClick={() => onDelete(name)}>X</div>
    <button type="button" onClick={() => onDecrease(name)}>-</button>
    <span>{quantitiy}</span>
    <button type="button" onClick={() => onIncrease(name)}>+</button>
    </>
  )
}