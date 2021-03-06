The `Radio` component is an abstraction around a hidden `input` element
for our custom styling. All props applied to the `Radio` component are
mapped to that `input` element.

### Uncontrolled Usage

```jsx
<form>
  <Radio name="options" value="option-1">
    <Label>Option 1</Label>
    <Hint>Hinty Hint</Hint>
  </Radio>
  <Radio name="options" value="option-2" disabled>
    <Label>Option 2</Label>
    <Hint>Disabled option</Hint>
  </Radio>
  <Radio name="options" value="option-3">
    <Label>Option 3</Label>
    <Hint>Hinty Hint</Hint>
  </Radio>
</form>
```

### Controlled Usage

```jsx
initialState = {
  selectedValue: 'option-1'
};

const CenteredText = styled.div`
  text-align: center;
`;

<Grid columns={2} stretched>
  <div>
    <Radio
      name="controlled-options"
      value="option-1"
      checked={state.selectedValue === 'option-1'}
      onChange={event => setState({ selectedValue: event.target.value })}
    >
      <Label>Option 1</Label>
      <Hint>Hinty Hint</Hint>
    </Radio>
    <Radio
      name="controlled-options"
      value="option-2"
      checked={state.selectedValue === 'option-2'}
      onChange={event => setState({ selectedValue: event.target.value })}
    >
      <Label>Option 2</Label>
      <Hint>Hinty hint</Hint>
    </Radio>
    <Radio
      name="controlled-options"
      value="option-3"
      checked={state.selectedValue === 'option-3'}
      onChange={event => setState({ selectedValue: event.target.value })}
    >
      <Label>Option 3</Label>
      <Hint>Hinty Hint</Hint>
    </Radio>
  </div>
  <CenteredText>Selected value: {state.selectedValue}</CenteredText>
</Grid>;
```
