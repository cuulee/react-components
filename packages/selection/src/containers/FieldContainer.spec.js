/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { mount } from 'enzyme';

import FieldContainer from './FieldContainer';

describe('FieldContainer', () => {
  const CONTAINER_ID = 'test';
  let wrapper;

  const basicExample = () => (
    <FieldContainer id={CONTAINER_ID}>
      {({ getLabelProps, getInputProps, getHintProps, getMessageProps }) => (
        <div>
          <label {...getLabelProps({ 'data-test-id': 'label' })}>Label</label>
          <div {...getHintProps({ 'data-test-id': 'hint' })}>Hint</div>
          <input {...getInputProps({ 'data-test-id': 'input' })} />
          <div {...getMessageProps({ 'data-test-id': 'message' })}>Message</div>
        </div>
      )}
    </FieldContainer>
  );

  beforeEach(() => {
    // Disabled due to styled-components theming
    console.warn = jest.fn(); // eslint-disable-line no-console
    wrapper = mount(basicExample());
  });

  const findLabel = enzymeWrapper => enzymeWrapper.find('[data-test-id="label"]');
  const findInput = enzymeWrapper => enzymeWrapper.find('[data-test-id="input"]');
  const findHint = enzymeWrapper => enzymeWrapper.find('[data-test-id="hint"]');
  const findMessage = enzymeWrapper => enzymeWrapper.find('[data-test-id="message"]');

  describe('getLabelProps', () => {
    it('applies correct accessibility role', () => {
      const label = findLabel(wrapper);

      expect(label).toHaveProp('id', `${CONTAINER_ID}--label`);
      expect(label).toHaveProp('htmlFor', `${CONTAINER_ID}--input`);
    });
  });

  describe('getInputProps', () => {
    it('applies correct accessibility role', () => {
      const input = findInput(wrapper);

      expect(input).toHaveProp('id', `${CONTAINER_ID}--input`);
      expect(input).toHaveProp('aria-labelledby', `${CONTAINER_ID}--label`);
      expect(input).toHaveProp(
        'aria-describedby',
        `${CONTAINER_ID}--hint ${CONTAINER_ID}--message`
      );
    });
  });

  describe('getHintProps', () => {
    it('applies correct accessibility role', () => {
      expect(findHint(wrapper)).toHaveProp('id', `${CONTAINER_ID}--hint`);
    });
  });

  describe('getMessageProps', () => {
    it('applies correct accessibility role', () => {
      expect(findMessage(wrapper)).toHaveProp('id', `${CONTAINER_ID}--message`);
    });
  });
});
