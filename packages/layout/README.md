# @zendesk/garden-react-layout

Collection of components relating to Layout in the Garden Design System.

Out implementation is a wrapper around the
[Bootstrap v4 Flexbox Grid](http://getbootstrap.com/docs/4.0/layout/overview/).
View their documentation for advanced usage example.

## Installation

```sh
npm install @zendeskgarden/react-layout
```

## Usage

```jsx static
import Grid from '@zendeskgarden/react-layout/Grid';
import Row from '@zendeskgarden/react-layout/Row';
import Col from '@zendeskgarden/react-layout/Col';

<Grid>
  <Row>
    <Col>column 1 of 4</Col>
    <Col>column 2 of 4</Col>
    <Col>column 3 of 4</Col>
    <Col>column 4 of 4</Col>
  </Row>
  <Row>
    <Col size={8}>column 1 of 2</Col>
    <Col size={4}>column 2 of 2</Col>
  </Row>
</Grid>
```
