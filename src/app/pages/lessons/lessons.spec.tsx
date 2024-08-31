import { render } from '@testing-library/react';

import Lessons from './lessons';

describe('Lessons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lessons />);
    expect(baseElement).toBeTruthy();
  });
});
