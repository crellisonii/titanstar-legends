import './PointsCounter.scss';

export interface PointsCounterProps {
  maxPoints: number;
  spentPoints: number;
}

const PointsCounter: React.FC<PointsCounterProps> = ({ maxPoints, spentPoints }) => {
  return (
    <div className="counter">
      <h2 className="counter__text">
        { spentPoints } / { maxPoints }
      </h2>
      <h2 className="counter__label">
        Points Spent
      </h2>
    </div>
  );
}

export default PointsCounter;