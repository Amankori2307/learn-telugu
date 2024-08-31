import { render } from '@testing-library/react';

import Lesson from './lesson';

describe('Lesson', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lesson />);
    expect(baseElement).toBeTruthy();
  });
});
