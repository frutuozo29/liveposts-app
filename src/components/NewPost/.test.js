import React from 'react'
import { render } from '@testing-library/react'
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

  test('Render component', () => {

    const { getByTestId } = render(<Provider store={store}><NewPost /></Provider>)

    expect(getByTestId('newpost')).toBeInTheDocument(true)
  })
})