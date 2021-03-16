import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent, } from '@testing-library/react';
import TestAsync from '../components/TestAsync'

afterEach(cleanup);

it('increments counter after 0.5s', async () => {
         const { getByTestId, findByText } = render(<TestAsync />);

         fireEvent.click(getByTestId('button-up'))
         // const counter = await waitForElement(() => getByText('1')) //Depreciated
         const counter = await findByText('1')

         expect(counter).toHaveTextContent('1')
});