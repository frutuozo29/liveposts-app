/** @jsx jsx */

import { jsx } from '@emotion/core'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as postActions from '../../actions/post'

import { main, form, title, botoes, btn_criar, btn_cancelar } from './styles'

const NewPost = ({ history }) => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const isIncluding = useSelector(state => state.posts.isIncluding)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(postActions.setIsIncluding(true))
  }, [isIncluding, dispatch])

  const handlerSubmit = () => {
    dispatch(postActions.createPost(name, description))
    dispatch(postActions.setIsIncluding(false))
    history.push('/')
  }

  return (
    <div data-testid="newpost" css={main}>
      <h3 css={title}>Novo post</h3>
      <form css={form} onSubmit={handlerSubmit}>
        <span>Nome:</span>
        <input
          data-testid="input"
          required
          placeholder="Digite um nome para o post"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        ></input>
        <span>Texto:</span>
        <textarea
          data-testid="textarea"
          rows="10"
          required
          placeholder="Digite um texto para o post"
          value={description}
          onChange={({ target: { value } }) => setDescription(value)}
        ></textarea>
        <div css={botoes}>
          <button css={btn_criar} type="submit">Criar</button>
          <button
            data-testid="btn-cancelar"
            css={btn_cancelar}
            onClick={() => {
              dispatch(postActions.setIsIncluding(false))
              history.push('/')
            }}
          >Cancelar</button>
        </div>
      </form>
    </div>
  )
}

export default NewPost