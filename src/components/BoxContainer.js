import React from 'react';
import './stylesheets/_BoxContainer.scss';
import Box from './Box';

class BoxContainer extends React.Component{
  constructor(props) {
    super(props);
    this.numOfColors = this.props.colorsArr.length;
    const stateColorsArr = Array((this.numOfColors * 2)-10).fill().map(this.getRandomColor.bind(this));
    this.state = {
      stateColorsArr,
      prevElement: {
        el1: '',
        el2: ''
      }
    }
    this.handleClick = this.handleClick.bind(this);
  }

  static defaultProps = {
    colorsArr: [
      'black', 'green', 'blue', 'red', 'yellow', 'bisque', 'pink', 'brown', 'DodgerBlue', '#6A1B9A', '#D1C4E9',
      '#4DD0E1',
    ]
  }

  getRandomColor() {
    const randomNum = Math.floor(Math.random() * this.numOfColors);
    return this.props.colorsArr[randomNum];
  }

  handleClick(e) {
    const nel1 = e.target;
    const nel2 = e.target.previousSibling;
    const pel1 = this.state.prevElement.el1;
    const pel2 = this.state.prevElement.el2;
    nel1.style.transform = 'rotateY(180deg)';
    nel2.style.transform = 'rotateY(180deg)';

    if(pel1 !== '' && pel2 !== '') {
      if(nel2.style.backgroundColor !== pel2.style.backgroundColor) {

        nel2.addEventListener('transitionend', () =>  {
          nel1.style.removeProperty('transform');
          nel2.style.removeProperty('transform');
          pel1.style.removeProperty('transform');
          pel2.style.removeProperty('transform');

          this.setState({
            prevElement: {
              el1: '',
              el2: ''
            }
          });
        });
      }else {
        this.setState({
          prevElement: {
            el1: '',
            el2: ''
          }
        });
      }
    }else {
      this.setState({
        prevElement: {
          el1: nel1,
          el2: nel2
        }
      });
    }
  }

  render() {
    const boxes = this.state.stateColorsArr.map((color, i) => (
      <Box key={i} color={color} handleClick = {this.handleClick}/>
    ));
    return(
      <div className="box-container">
        {boxes}
      </div>
    );
  }
}

export default BoxContainer;