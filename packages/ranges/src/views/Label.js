import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';
import RangeStyles from '@zendesk/garden-css-forms/dist/range.css';

import { version } from '../../package.json';
const COMPONENT_ID = 'ranges.label';

/**
 * Accepts all `<label>` props
 */
const Label = styled.label.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(RangeStyles['c-range__label'], {
      [RangeStyles['c-range__label--regular']]: props.regular,
      [RangeStyles['c-range__label--sm']]: props.small,

      // RTL
      [RangeStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Label.propTypes = {
  regular: PropTypes.bool,
  small: PropTypes.bool
};

/** @component */
export default Label;
