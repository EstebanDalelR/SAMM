import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './css/DrumsStyle.css';

class Drums extends Component {
  render() {
    return (
      <div className="drums">
        {this.RenderPointer()}
        {this.RenderPads(this.props.drums.pattern)}
      </div>
    );
  }
  RenderPointer()
  {
    var pnt = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    return pnt.map((v) => {
      return <div key={v} className={"pointer " + (v==this.props.beat?"active":"")}></div>
    });
  }

  RenderPads(pattern) {
    return pattern.map((v,i) => {
      return v.map((hit, j) => {
        return <div key={i+':'+j}
          className={"pad "+(hit==='x'?"active":"")}
          onClick={() => this.UpdatePattern(i, j)}></div>;
      });
    });
  }

  UpdatePattern(i, j) {
    let oldHit = this.props.drums.pattern[i][j];
    let newHit = oldHit==='x' ? '-':'x';
    this.props.update(newHit, i, j);
  }
}

Drums.propTypes = {
  drums: PropTypes.object.isRequired,
  beat: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired
};
export default Drums;
