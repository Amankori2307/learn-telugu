import { render } from '@testing-library/react';

import AddWord from './add-word';

describe('AddWord', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddWord />);
    expect(baseElement).toBeTruthy();
  });
});
