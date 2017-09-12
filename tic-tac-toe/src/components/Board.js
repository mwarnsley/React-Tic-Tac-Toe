import React from 'react';
import {map} from 'lodash';

import {Row, Col} from 'react-bootstrap';
import Button from './Button';
import O from './O';
import X from './X';

const Board = ({squares}) => {
  return (
    <Row>
      {map(squares, (s, i) => {
        let btnText = '';
        if (s.label === 'x') {
          btnText = <X />;
        } else if (s.label === 'o') {
          btnText = <O />;
        }
        return (
          <Col key={i} xs={4} sm={4} md={4} className="no-padding">
            <Button
              disabled={s.disabled}
              classes={'square'}
              value={s._id}
              type="button"
              btnText={btnText}
              onClick={props.squareSelect}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default Board;
