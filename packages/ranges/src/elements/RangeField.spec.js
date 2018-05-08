import React from 'react';
import { mount } from 'enzyme';

import RangeField from './RangeField';
import Range from './Range';
import Label from '../views/Label';
import Hint from '../views/Hint';
import Message from '../views/Message';

describe('RangeField', () => {
  const RANGE_FIELD_ID = 'test';
  let wrapper;

  const basicExample = () => (
    <RangeField id={RANGE_FIELD_ID}>
      <Label>Label</Label>
      <Hint>Hint</Hint>
      <Range />
      <Message>Message</Message>
      <div data-test-id="extra">extra information</div>
    </RangeField>
  );

  beforeEach(() => {
    // Disabled due to styled-components theming
    console.warn = jest.fn(); // eslint-disable-line no-console
    wrapper = mount(basicExample());
  });

  it('applies container props to Label', () => {
    expect(wrapper.find(Label)).toHaveProp('id', `${RANGE_FIELD_ID}--label`);
  });

  it('applies container props to Hint', () => {
    expect(wrapper.find(Hint)).toHaveProp('id', `${RANGE_FIELD_ID}--hint`);
  });

  it('applies container props to Message', () => {
    expect(wrapper.find(Message)).toHaveProp('id', `${RANGE_FIELD_ID}--message`);
  });

  it('applies input props to Range', () => {
    expect(wrapper.find(Range)).toHaveProp('id', `${RANGE_FIELD_ID}--input`);
  });

  it('applies no props to any other element', () => {
    expect(Object.keys(wrapper.find('[data-test-id="extra"]').props())).toHaveLength(2);
  });
});
