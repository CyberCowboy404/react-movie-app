import { observer } from "mobx-react";
import { PropTypes } from "prop-types";

import "./Loader.scss";

function Loader({ visible = false }) {
  if (!visible) {
    return null;
  }

  return (
    <div className="loader">
      <div className="loader-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

Loader.propTypes = {
  visible: PropTypes.bool,
};

Loader.defaultProps = {
  visible: false,
};

export default observer(Loader);
