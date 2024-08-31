import { render } from '@testing-library/react';

import Words from './words';

describe('Words', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Words />);
    expect(baseElement).toBeTruthy();
  });
});
