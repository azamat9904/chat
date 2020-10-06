import React, { FunctionComponent, useState, useEffect } from "react";
import { connect } from "react-redux";

import { Dialogs as BaseDialogs } from "../components/index";
import { message } from "../types/interfaces";
import dialogActions from "../redux/dialog/actions";
import { appState } from "../redux/store";

type Props = {
  items: message[];
  getDialogs: () => void;
  setCurrentDialog: (id: string) => void;
};

const Dialogs: FunctionComponent<Props> = ({
  items,
  getDialogs,
  setCurrentDialog,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState<message[]>(items);

  useEffect(() => {
    getDialogs();
  }, [getDialogs]);

  useEffect(() => {
    setFiltered(items);
  }, [items]);

  const onChangeInput = (value: string) => {
    if (!value.trim()) {
      setFiltered(items);
      setInputValue(value);
      return;
    }

    const f = items.filter(
      (item) =>
        item.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
    );

    setFiltered(f);
    setInputValue(value);
  };

  return (
    <BaseDialogs
      items={filtered}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialog}
    />
  );
};

const mapStateToProps = (state: appState) => {
  return {
    items: state.dialogState.messages,
  };
};

const mapDispatchToProps = {
  getDialogs: dialogActions.fetchDialogs,
  setCurrentDialog: dialogActions.setCurrentDialog,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
