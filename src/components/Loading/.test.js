import React from 'react'
import { render } from '@testing-library/react'
import Loading from '../Loading'

describe('Loading tests', () => {

  test('Render component', () => {
    const { getByTestId } = render(<Loading />)
    expect(getByTestId('loading')).toBeInTheDocument(true)
  })
})