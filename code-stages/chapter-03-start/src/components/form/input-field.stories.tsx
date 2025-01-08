import { Meta, Story } from '@storybook/react';
import {
  InputField,
  InputFieldProps,
} from './input-field';
import React from 'react';

const meta: Meta = {
  title: 'Components/InputField',
  component: InputField,
};

export default meta;

const Template: Story<InputFieldProps> = (props) => (
  <InputField {...props} />
);

export const Default = Template.bind({});

Default.args = {
  label: 'Name goes here',
};

export const WithError = Template.bind({});

WithError.args = {
  label: 'With Error',
  error: { message: 'Required Field' },
};
