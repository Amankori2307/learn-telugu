import { render } from '@testing-library/react';

import AddSentence from './add-sentence';

describe('AddSentence', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddSentence />);
    expect(baseElement).toBeTruthy();
  });
});
