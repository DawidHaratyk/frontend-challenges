import React, { memo } from "react";
import PropTypes from "prop-types";

function RecursiveComponent({ components, currentIndex }) {
  const CurrentComponent = components[currentIndex];

  return (
    currentIndex < components.length && (
      <CurrentComponent>
        <RecursiveComponent
          components={components}
          currentIndex={currentIndex + 1}
        />
      </CurrentComponent>
    )
  );
}

RecursiveComponent.propTypes = {
  components: PropTypes.arrayOf(PropTypes.elementType).isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default memo(RecursiveComponent);
