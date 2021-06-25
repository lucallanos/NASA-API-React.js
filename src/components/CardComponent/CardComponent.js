import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardComponent = (props) => (
  <Card>
    <Image src={props.data.url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.data.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.data.date}</span>
      </Card.Meta>
      <Card.Description>
        {props.data.explanation}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CardComponent