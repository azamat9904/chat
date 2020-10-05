import React, { FunctionComponent, useReducer } from "react";
import { Dialogs as BaseDialogs } from "../components/index";
import { dialog } from "../types/interfaces";

enum actionTypes {
  FILTER_VALUES = "FILTER_VALUES",
  SET_ITEMS = "SET_ITEMS",
}

type dialogState = {
  inputValue: string;
  items: dialog[];
};

const searchReducer = (
  state: dialogState,
  action: { type: actionTypes; payload: dialogState }
) => {
  switch (action.type) {
    case actionTypes.FILTER_VALUES:
      return {
        items: action.payload.items.filter(
          (item) => item.user.fullname.indexOf(action.payload.inputValue) >= 0
        ),
        inputValue: action.payload.inputValue,
      };
    case actionTypes.SET_ITEMS:
      console.log(action.payload);
      return {
        inputValue: action.payload.inputValue,
        items: action.payload.items,
      };
    default:
      return state;
  }
};

type Props = {
  items: dialog[];
};

const Dialogs: FunctionComponent<Props> = ({ items }) => {
  const [state, dispatch] = useReducer(searchReducer, {
    inputValue: "",
    items: items,
  });

  const onChangeInput = (value: string) => {
    console.log(state.items);
    if (!value.trim()) {
      dispatch({
        type: actionTypes.SET_ITEMS,
        payload: {
          inputValue: "",
          items: items,
        },
      });
    }
    dispatch({
      type: actionTypes.FILTER_VALUES,
      payload: { inputValue: value, items: items },
    });
  };

  return (
    <BaseDialogs
      items={state.items}
      onSearch={onChangeInput}
      inputValue={state.inputValue}
    />
  );
};

export default Dialogs;
