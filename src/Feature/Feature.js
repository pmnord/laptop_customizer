import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureItem from '../FeatureItem/FeatureItem.js';

class Feature extends Component {

    items = this.props.items.map(item => {
        const itemHash = slugify(JSON.stringify(item.name));
        return (
          <FeatureItem 
                key={itemHash} 
                id={itemHash} 
                name={item.name} 
                cost={item.cost} 
                feature={this.props.feature}
                selected={this.props.selected}
                updateFeature={this.props.updateFeature}
            />
        );
      });

    render() {
        return (
            <fieldset className="feature">
                <legend className="feature__name">
                  <h3>{this.props.feature}</h3>
                </legend>
                {this.items}
            </fieldset>
        )
    }
}

export default Feature;