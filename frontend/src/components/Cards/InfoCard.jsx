import React from 'react';
import './InfoCard.css';

const InfoCard = ({
  title,
  description,
  icon,
  value,
  trend,
  color = 'primary',
  className = '',
  onClick,
  children
}) => {
  const getTrendIcon = (trend) => {
    if (trend > 0) return '📈';
    if (trend < 0) return '📉';
    return '➡️';
  };

  const getTrendColor = (trend) => {
    if (trend > 0) return 'success';
    if (trend < 0) return 'error';
    return 'muted';
  };

  return (
    <div 
      className={`info-card info-card-${color} ${onClick ? 'clickable' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="card-header">
        <div className="card-icon">
          {icon}
        </div>
        {trend !== undefined && (
          <div className={`trend trend-${getTrendColor(trend)}`}>
            <span className="trend-icon">{getTrendIcon(trend)}</span>
            <span className="trend-value">{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {value && <div className="card-value">{value}</div>}
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
