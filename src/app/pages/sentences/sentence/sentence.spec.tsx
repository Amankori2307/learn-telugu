import { render } from '@testing-library/react';

import Sentence from './sentence';

describe('Sentence', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Sentence />);
    expect(baseElement).toBeTruthy();
  });
});
