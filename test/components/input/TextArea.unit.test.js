import React from 'react';
import TextArea from "../../../src/components/input/TextArea";

test('TextArea should match snapshot', (done) => {
    const mockOnChange = jest.fn();
    const value = 'some-text-value';
    const wrapper = shallow(<TextArea
            onChange={mockOnChange}
            label={'some-text-label'}
            value={value} />);

    expect(wrapper).toMatchSnapshot();

    done();
});

test('TextArea should return current text value on blur', (done) => {
    const mockOnChange = jest.fn();
    const value = 'some-text-value';
    const wrapper = shallow(<TextArea
        onChange={mockOnChange}
        label={'some-text-label'}
        value={value}/>);

    const textarea = wrapper.find('textarea');
    textarea.simulate('click');
    textarea.simulate('change', { target: { value: 'new-text-input' }});
    textarea.simulate('blur');

    expect(mockOnChange).toHaveBeenCalledWith('new-text-input');

    done();
});