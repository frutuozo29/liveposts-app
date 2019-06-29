import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import NewPost from '../NewPost'

describe('NewPost tests', () => {

  const mockStore = configureMockStore([thunk])

  var store = mockStore({
    posts: {
      isIncluding: false
    }
  })

  const props = {
    history: {
      push: jest.fn()
    }
  }

  test('Render component', () => {

    const { getByTestId } = render(<Provider store={store}><NewPost /></Provider>)

    expect(getByTestId('newpost')).toBeInTheDocument(true)
  })

  test('Name change', () => {
    const { getByTestId } = render(<Provider store={store}><NewPost {...props} /></Provider>)
    const input = getByTestId('input')
    fireEvent.change(input, { target: { value: 1 } })
    expect(input.value).toEqual('1')
  })

  test('Description change', () => {
    const { getByTestId } = render(<Provider store={store}><NewPost {...props} /></Provider>)
    const textarea = getByTestId('textarea')
    fireEvent.change(textarea, { target: { value: 1 } })
    expect(textarea.value).toEqual('1')
  })

  test('Click Cancel', () => {
    const { getByTestId } = render(<Provider store={store}><NewPost {...props} /></Provider>)
    const button = getByTestId('btn-cancelar')
    fireEvent.click(button)
    expect(button).toBeInTheDocument(true)
  })
})