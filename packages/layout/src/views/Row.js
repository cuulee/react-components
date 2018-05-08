import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import GridStyles from 'bootstrap/dist/css/bootstrap-grid.css';

import { version } from '../../package.json';
const COMPONENT_ID = 'layout.row';

/**
 * Accepts all `<div>` props
 */
const Row = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(GridStyles.row, {
      [GridStyles['no-gutters']]: !props.gutters,
      [GridStyles[`align-items-${props.alignItems}`]]: props.alignItems,
      [GridStyles[`justify-content-${props.justifyContent}`]]: props.justifyContent
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Row.propTypes = {
  /** Enables margin for rows and padding for columns  */
  gutters: PropTypes.bool,
  /** Use flexbox alignment utilities to vertically align content */
  alignItems: PropTypes.oneOf(['start', 'center', 'end']),
  /** Use flexbox justify utilities to justify content */
  justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between'])
};

Row.defaultProps = {
  gutters: true
};

/** @component */
export default Row;
