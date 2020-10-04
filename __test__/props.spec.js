import {mount} from '@vue/test-utils'

import Component from '../src/component.js';

describe('Flatpickr props', () => {

  // Store for future usage
  const props = {
    modelValue: '2017-10-04',
    config: {
      dateFormat: 'Y-m-d'
    }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component, {
      propsData: props
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('accepts config via prop', () => {
    expect(wrapper.props('config')).toEqual(props.config);
    expect(wrapper.vm.fp.config).toHaveProperty('dateFormat', props.config.dateFormat);
  });

  test('accepts value via prop', () => {
    expect(wrapper.props('modelValue')).toBe(props.modelValue);
  });

  test('validates v-model', () => {
    let vModel = wrapper.vm.$options.props.modelValue;

    expect(vModel.validator(false)).toBe(false);
    expect(vModel.validator(undefined)).toBe(false);

    expect(vModel.validator(new Date())).toBe(true);
    expect(vModel.validator(null)).toBe(true);
    expect(vModel.validator('2017-12-12')).toBe(true);
    expect(vModel.validator(['2017-12-12'])).toBe(true);
    expect(vModel.validator(+new Date())).toBe(true);
  });

});
