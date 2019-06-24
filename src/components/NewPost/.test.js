import React from 'react'
import { render } from '@testing-library/react'
import NewPost from '../NewPost'

describe('NewPost tests', () => {
  test('Render component', () => {

    const { getByTestId } = render(<NewPost />)

    expect(getByTestId('newpost')).toBeInTheDocument(true)
  })
})