import React, { PropTypes } from 'react';
import { Component } from '../../libs';

export class Row extends Component {
  render() {
    return (
      <div className={this.computedClassName('el-row', this.props.justify !== 'start' && `is-justify-${this.props.justify}`, this.props.align !== 'top' && `is-align-${this.props.align}`, this.props.type === 'flex' && 'el-row--flex')} style={this.getStyle()}>
        {
          React.Children.map(this.props.children, element => {
            return React.cloneElement(element, {
              gutter: this.props.gutter
            })
          })
        }
      </div>
    )
  }

  getStyle() {
    var style = {};

    if (this.props.gutter) {
      style.marginLeft = `-${this.props.gutter / 2}px`;
      style.marginRight = style.marginLeft;
    }

    return style;
  }
}

Row.propTypes = {
  gutter: PropTypes.number,
  type: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string
}

Row.defaultProps = {
  justify: 'start',
  align: 'top'
};

export class Col extends Component {
  render() {
    return (
      <div className={this.computedClassName('el-col', `el-col-${this.props.span}`, this.props.offset && `el-col-offset-${this.props.offset}`, this.props.pull && `el-col-pull-${this.props.pull}`, this.props.push && `el-col-push-${this.props.push}`)} style={this.getStyle()}>
        {this.props.children}
      </div>
    )
  }

  getStyle() {
    var style = {};

    if (this.props.gutter) {
      style.paddingLeft = `${this.props.gutter / 2}px`;
      style.paddingRight = style.paddingLeft;
    }

    return style;
  }
}

Col.propTypes = {
  gutter: PropTypes.number,
  span: PropTypes.number.isRequired,
  offset: PropTypes.number,
  pull: PropTypes.number,
  push: PropTypes.number
}

export default {
  Row,
  Col
}
