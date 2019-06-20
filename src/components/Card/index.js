/** @jsx jsx */

import { jsx } from '@emotion/core'

import {
  card, card_title, card_description, card_footer,
  card_actions, read_more, icon_action_up, icon_action_down
} from './styles'

const Card = () => (
  <div css={card}>
    <h3 css={card_title}>Um topico qualquer para post</h3>
    <p css={card_description}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e
      de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja
      de
      tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem
      Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,
          permanecendo essencialmente inalterado.</p>
    <div css={card_footer}>
      <a css={read_more} href="#">Leia mais...</a>
      <div css={card_actions}>
        <i className="far fa-thumbs-up" css={icon_action_up}></i>
        <h5>150</h5>
        <i className="far fa-thumbs-down" css={icon_action_down}></i>
      </div>
    </div>
  </div>
)

export default Card