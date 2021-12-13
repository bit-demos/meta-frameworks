import React from 'react';
import { render } from '@testing-library/react';
import { BasicGatsbyLink } from './gatsby-link.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicGatsbyLink />);
  const rendered = getByText('My link');
  expect(rendered).toBeTruthy();
});
