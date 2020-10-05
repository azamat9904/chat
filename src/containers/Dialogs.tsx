import React, { FunctionComponent, useReducer } from "react";

import { Dialogs as BaseDialogs } from "../components/index";
import { message } from "../types/interfaces";

enum actionTypes {
  FILTER_ITEMS = "FILTER_ITEMS",
  SET_ITEMS = "SET_ITEMS",
}

type dialogState = {
  inputValue: string;
  items: message[];
};

const searchReducer = (
  state: dialogState,
  action: { type: actionTypes; payload: dialogState }
) => {
  switch (action.type) {
    case actionTypes.FILTER_ITEMS:
      return {
        items: action.payload.items.filter(
          (item) =>
            item.user.fullname
              .toLowerCase()
              .indexOf(action.payload.inputValue.toLowerCase()) >= 0
        ),
        inputValue: action.payload.inputValue,
      };
    case actionTypes.SET_ITEMS:
      return {
        inputValue: action.payload.inputValue,
        items: action.payload.items,
      };
    default:
      return state;
  }
};

type Props = {
  items: message[];
};

const Dialogs: FunctionComponent<Props> = ({ items }) => {
  const [state, dispatch] = useReducer(searchReducer, {
    inputValue: "",
    items: items,
  });

  const onChangeInput = (value: string) => {
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
      type: actionTypes.FILTER_ITEMS,
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
