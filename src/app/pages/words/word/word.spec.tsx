import { render } from '@testing-library/react';

import Word from './word';

describe('Word', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Word />);
    expect(baseElement).toBeTruthy();
  });
});
