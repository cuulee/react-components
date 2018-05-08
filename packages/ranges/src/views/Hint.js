import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';
import RangeStyles from '@zendesk/garden-css-forms/dist/range.css';

import { version } from '../../package.json';
const COMPONENT_ID = 'ranges.hint';

/**
 * Accepts all `<div>` props
 */
const Hint = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(RangeStyles['c-range__hint'], {
      [RangeStyles['c-range__hint--sm']]: props.small,

      // RTL
      [RangeStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Hint.propTypes = {
  small: PropTypes.bool
};

/** @component */
export default Hint;
