import { render } from '@testing-library/react';

import OptionList from './option-list';

describe('OptionList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OptionList />);
    expect(baseElement).toBeTruthy();
  });
});
