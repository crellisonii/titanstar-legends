import './Card.scss';

import Header from '../header/Header';

export interface CardProps {

}

const Card: React.FunctionComponent<CardProps> = () => {

  return (
    <div className="card">
      <div className="card__header">
        <Header />
      </div>
    </div>
  );
}

export default Card;