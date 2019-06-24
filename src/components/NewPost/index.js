/** @jsx jsx */

import { jsx } from '@emotion/core'

import { main, form, title, botoes, btn_criar, btn_cancelar } from './styles'

const NewPost = () => {
  return (
    <div css={main}>
      <h3 css={title}>Novo post</h3>
      <form css={form}>
        <span>Nome:</span>
        <input placeholder="Digite um nome para o post"></input>
        <span>Texto:</span>
        <textarea cols="4" placeholder="Digite um texto para o post"></textarea>
        <div css={botoes}>
          <button css={btn_criar}>Criar</button>
          <button css={btn_cancelar}>Cancelar</button>
        </div>
      </form>
    </div>
  )
}

export default NewPost