import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import App from '../App'

describe('App tests', () => {

  const mockStore = configureMockStore([thunk])

  var store = mockStore({
    hasSocket: false,
    posts: {
      items: [],
      count: 0,
      isLoading: false,
      hasError: false,
      isPosting: false,
      hasPostError: false
    }
  })

  test('Render component', () => {
    const { getByTestId } = render(<Provider store={store}><Router><App /></Router></Provider>)

    expect(getByTestId('app')).toBeInTheDocument(true)
  })
})