import { render } from '@testing-library/react';

import AddLesson from './add-lesson';

describe('AddLesson', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddLesson />);
    expect(baseElement).toBeTruthy();
  });
});
