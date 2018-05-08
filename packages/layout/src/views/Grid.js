import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';
import { zdColorBlue100, zdColorBlue300 } from '@zendeskgarden/css-variables';
import GridStyles from 'bootstrap/dist/css/bootstrap-grid.css';

import Col from './Col';
import { version } from '../../package.json';
const COMPONENT_ID = 'layout.grid';

const getColumnStyling = ({ debug }) => {
  if (debug) {
    return `
      border: 1px solid ${zdColorBlue300};
      background-color: ${zdColorBlue100};
    `;
  }

  return '';
};

/**
 * Implemented with the [Bootstrap v4 Flexbox Grid](http://getbootstrap.com/docs/4.0/layout/overview/).
 * Accepts all `<div>` props.
 */
const Grid = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames({
      // Container types
      [GridStyles['container-fluid']]: props.fluid,
      [GridStyles.container]: !props.fluid
    })
})`
  direction: ${props => (isRtl(props) ? 'rtl' : 'ltr')};

  ${Col} {
    ${props => getColumnStyling(props)};
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Grid.propTypes = {
  /** Enables fluid-width grid layout  */
  fluid: PropTypes.bool,
  /** Show debug styling within component */
  debug: PropTypes.bool
};

Grid.defaultProps = {
  fluid: true
};

/** @component */
export default Grid;
