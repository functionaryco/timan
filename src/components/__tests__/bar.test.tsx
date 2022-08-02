import React from 'react';
import { render } from 'test-utils';
import Bar from '../Bar';

describe('Bar', () => {
    it('should render without crashing', () => {
        const { container } = render(<Bar division={0} hour={0} arr={[1, 2, 3]} nofs={12} />);
        expect(container).toBeInTheDocument();
    });
});

