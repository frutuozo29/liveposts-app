/** @jsx jsx */

import { jsx } from '@emotion/core'

import {
  card, card_title, card_description, card_footer,
  card_actions, read_more, icon_action_up, icon_action_down
} from './styles'

const Card = ({ post, upVote, downVote }) => (
  <div css={card}>
    <h3 css={card_title}>{post.name}</h3>
    <p css={card_description}>{post.description}</p>
    <div css={card_footer}>
      <a css={read_more} href="/#">Leia mais...</a>
      <div css={card_actions}>
        <i
          className="far fa-thumbs-up"
          onClick={upVote}
          css={icon_action_up}
        ></i>
        <h5>{post.votes}</h5>
        <i
          className="far fa-thumbs-down"
          onClick={downVote}
          css={icon_action_down}
        ></i>
      </div>
    </div>
  </div>
)

export default Card