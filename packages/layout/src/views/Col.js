import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import GridStyles from 'bootstrap/dist/css/bootstrap-grid.css';

import { version } from '../../package.json';
const COMPONENT_ID = 'layout.col';

const retrieveNumberedClass = (className, number, classes) => {
  if (typeof number === 'boolean') {
    classes.push(GridStyles[className]);
  }

  if (typeof number !== 'undefined') {
    classes.push(GridStyles[`${className}-${number}`]);
  }
};

const retrieveColClassNames = ({
  size,
  xs,
  sm,
  md,
  lg,
  xl,
  offsetXs,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl
} = {}) => {
  const output = [];

  retrieveNumberedClass('col', size, output);
  retrieveNumberedClass('col-xs', xs, output);
  retrieveNumberedClass('col-sm', sm, output);
  retrieveNumberedClass('col-md', md, output);
  retrieveNumberedClass('col-lg', lg, output);
  retrieveNumberedClass('col-xl', xl, output);
  retrieveNumberedClass('offset-xs', offsetXs, output);
  retrieveNumberedClass('offset-sm', offsetSm, output);
  retrieveNumberedClass('offset-md', offsetMd, output);
  retrieveNumberedClass('offset-lg', offsetLg, output);
  retrieveNumberedClass('offset-xl', offsetXl, output);

  if (output.length === 0) {
    output.push('col');
  }

  return output;
};

/**
 * Accepts all `<div>` props
 */
const Col = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(GridStyles.col, ...retrieveColClassNames(props), {
      [GridStyles[`align-self-${props.alignSelf}`]]: props.alignSelf,
      [GridStyles[`justify-content-${props.justifyContent}`]]: props.justifyContent,
      [GridStyles[`order-${props.order}`]]: props.order
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Col.propTypes = {
  /** Sizing for all breakpoints. */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /** Sizing for extra small breakpoints. */
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /** Sizing for small breakpoints. */
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /** Sizing for medium breakpoints. */
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /** Sizing for large breakpoints. */
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /** Sizing for extra large breakpoints. */
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  offsetXs: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  offsetSm: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  offsetMd: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  offsetLg: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  offsetXl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /** Use flexbox alignment utilities to horizontally align */
  alignSelf: PropTypes.oneOf(['start', 'center', 'end']),
  justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between']),
  order: PropTypes.oneOf(['first', 'last', -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
};

/** @component */
export default Col;
