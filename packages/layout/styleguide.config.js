/**
 * Package specific styleguide configuration
 * https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
 */

module.exports = {
  sections: [
    {
      name: '',
      content: '../../packages/layout/README.md'
    },
    {
      name: 'Views',
      components: [
        '../../packages/layout/src/views/Grid.js',
        '../../packages/layout/src/views/Row.js',
        '../../packages/layout/src/views/Col.js'
      ]
    }
  ]
};
