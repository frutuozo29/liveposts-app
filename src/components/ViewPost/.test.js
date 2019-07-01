import React from 'react'
import { render } from '@testing-library/react'
import ViewPost from '../ViewPost'

describe('ViewPost tests', () => {

  test('Render component', () => {

    const { getByTestId } = render(<ViewPost />)

    expect(getByTestId('viewpost')).toBeInTheDocument(true)
  })
})
