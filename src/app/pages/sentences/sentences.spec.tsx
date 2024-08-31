import { render } from '@testing-library/react';

import Sentences from './sentences';

describe('Sentences', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Sentences />);
    expect(baseElement).toBeTruthy();
  });
});
