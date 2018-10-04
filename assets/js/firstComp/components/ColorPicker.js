import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { SketchPicker, SliderPicker, ChromePicker } from 'react-color';


export default class ColorPicker extends Component {
  constructor () {
    super()

    this.state = {
      displayColorPicker1: false,
      displayColorPicker2: false,
    
    }

  }
  //Shows the color picker
      toggleColorPicker = (e) => {
        if(e.target.innerHTML=='Color 1'){
            this.setState({ displayColorPicker1: !this.state.displayColorPicker1 })
        }else if(e.target.innerHTML=='Color 2'){

            this.setState({ displayColorPicker2: !this.state.displayColorPicker2 })
        }
      };
  //closes the color picker
      closeColorPicker = (e) => {
        if(e.target.className=='buttonClose1'){
          this.setState({ displayColorPicker1: false })
        }else if(e.target.className=='buttonClose2'){
            this.setState({ displayColorPicker2: false })
          }
        }
  //After a color is selected, state is updated with the hex color #
      handleChangeCompleteRow1 = (color) => {
        this.props.handleChangeCompleteRow1(color.hex)
      };
  //After a color is selected, state is updated with the hex color #
      handleChangeCompleteRow2 = (color) => {
          this.props.handleChangeCompleteRow2(color.hex)
      };


  render () {
    const popoverLeft = {
      position: 'absolute',
      zIndex: '2',
      left:'0'

    }
    const popoverRight = {
      position: 'absolute',
      zIndex: '2',
      right:'0'
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
    return (<div className="color-picker">
          <div className="group">
             <button onClick={this.toggleColorPicker}>Color 1</button>
             { this.state.displayColorPicker1 ? <div  style={ popoverLeft }>
               <div style={ cover } className="buttonClose1"
               onClick={ this.closeColorPicker }/>
               <SketchPicker
                   color={this.props.globalState.row1}
                onChangeComplete={ this.handleChangeCompleteRow1 }/>
             </div> : null }
           </div>
           <div className="group">
              <button onClick={ this.toggleColorPicker }>Color 2</button>
              { this.state.displayColorPicker2 ? <div style={ popoverRight }>
                <div style={ cover } className="buttonClose2" onClick={ this.closeColorPicker }/>
                <SketchPicker
                color={this.props.globalState.row2}
                 onChangeComplete={ this.handleChangeCompleteRow2 }
               />
              </div> : null }
            </div>
      </div>
    )
  }
}
