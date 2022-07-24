import React from 'react';
import PropTypes from 'prop-types';

export default class Container extends React.Component {
  render() {
    const { render } = this.props;

    return render({
      ...this,
      ...this.props,
      ...this.state,
    });
  }
}

Container.propTypes = {
  render: PropTypes.func.isRequired,
};
