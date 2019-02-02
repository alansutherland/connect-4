import React from "react";
import { connect } from "react-redux";
import { slotSelected } from '../actions/board'
import styled from "styled-components";

class Slot extends React.Component {

  constructor(props) {
    super(props);
  }

  onSlotClicked(){
    this.props.sendSelected(this.props.x)
  }

  render() {
    const {x, y, b} = this.props
    let slot = 'slot'

    if(b.board[x][y] !== undefined){ 
      if(b.board[x][y] === 'red'){
        slot += ' red';
      } else {
        slot += ' yellow';
      }
    }
    return (
      <SlotComponent className={slot} onClick={() => this.onSlotClicked()}>
        <div className='circle'></div>
      </SlotComponent>
    );
  }
}

const stateToProps = state => {
  return {
    b: state.board
  } 
}

const dispatchToProps = dispatch => {
  return {
    sendSelected: col => dispatch(slotSelected(col))
  } 
}

export default connect(stateToProps, dispatchToProps)(Slot);

////////////////////////// CSS //////////////////////////
const SlotComponent = styled.div`
  background-color: dodgerblue;
  display: inline-block;
  vertical-align: top;
  padding: 10px;
  .circle{
    background: #fff;
    /* background: ${props => (props.owner === 'R' ? "#ff354b" : props.owner === 'Y' ? '#fffe00' : "#fff")}; */
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 10px;
    transition: .2s ease-in-out;
    position: relative;
    display: flex;
    align-items: center;
    &:hover{cursor: pointer}
    &:after{
      content: '';
      width: 50px;
      height: 50px;
      position: absolute;
      left: 0; right: 0;
      margin: auto;
      transition: .1s ease-in-out;
    }
  }
  &.red .circle{ 
    background: #ff354b;
    box-shadow: 3px 3px 10px #b30619 inset, -3px -3px 10px #b30619 inset;
    &:after{
      display: initial;
      background: #b30619;
      -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    }
  }
  &.yellow .circle{
    background: #fffe00;
    box-shadow: 3px 3px 10px #c7c70d inset, -3px -3px 10px #c7c70d inset;
    &:after{
      display: initial;
      background: #c7c70d;
      -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    }
  }
`;