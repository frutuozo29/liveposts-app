import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";

import Card from '../Card'

describe('Card tests', () => {
  var props = {
    post: {
      _id: "5d0aced050e88427a0603abx",
      name: "Primeiro texto livro desse artigo",
      description: "Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes.",
      votes: 49
    },
    upVote: jest.fn(),
    downVote: jest.fn()
  }

  test('Render component', () => {

    const { getByTestId } = render(<Router><Card {...props} /></Router>)

    expect(getByTestId('card')).toBeInTheDocument(true)
  })
})