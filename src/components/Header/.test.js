import React from 'react'
import { render } from '@testing-library/react'
import Header from '../Header'

describe('Header tests', () => {
  test('Render component', () => {

    const { getByTestId } = render(<Header />)

    expect(getByTestId('header')).toBeInTheDocument(true)
  })
})