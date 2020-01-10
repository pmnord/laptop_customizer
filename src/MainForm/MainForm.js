import React, { Component } from 'react';
import Feature from '../Feature/Feature.js';
import slugify from 'slugify';


class MainForm extends Component {

  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  getFeatures = () => Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;

      return (
        <Feature 
          key={featureHash} 
          feature={feature} 
          items={this.props.features[feature]}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      );
    });

    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {this.getFeatures()}  
            </form>
        )
    }

}

export default MainForm;