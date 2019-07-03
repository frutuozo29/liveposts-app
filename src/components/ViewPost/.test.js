import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import ViewPost from '../ViewPost'

describe('ViewPost tests', () => {

  const mockStore = configureMockStore([thunk])

  const store = mockStore({
    posts: {
      postSelected: false
    }
  })

  const props = {
    match: {
      params: {
        id: '1'
      }
    },
    history: {
      push: jest.fn()
    }
  }

  test('Render component', () => {

    const { getByTestId } = render(<Provider store={store}><ViewPost {...props} /></Provider>)

    expect(getByTestId('viewpost')).toBeInTheDocument(true)
  })
})
