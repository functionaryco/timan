import React from 'react';
import { render } from 'test-utils';
import Time from '../Time';

describe('Time', () => {
    it('should render without crashing', () => {
        const { container } = render(<Time time={0} hour={0} min={0} />);
        expect(container).toBeInTheDocument();
    });
});
