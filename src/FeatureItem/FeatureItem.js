import React, { Component } from 'react';

class FeatureItem extends Component {
  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  render() {
      return(
        <div className="feature__item">
          <input
            type="radio"
            id={this.props.id}
            className="feature__option"
            name={this.props.name}
            checked={this.props.name === this.props.selected[this.props.feature].name}
            onClick={() => this.props.updateFeature(this.props.feature, { name: this.props.name, cost: this.props.cost })}
          />
          <label htmlFor={this.props.id} className="feature__label">
            {this.props.name} ({this.USCurrencyFormat.format(this.props.cost)})
          </label>
      </div>
      )
  }
}

export default FeatureItem;