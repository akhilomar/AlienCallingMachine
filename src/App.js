import React,{Component} from 'react';
import './App.css';
import DrumPad from './drumpad';

const data = [
  { id: 'Ghuurqol', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/q_KWyYNtU.mp3' },
  { id: 'Uczek', letter: 'W', src: 'https://www.myinstants.com/media/sounds/w_4WPlOQ5.mp3' },
  { id: 'Cair\'ods', letter: 'E', src: 'https://www.myinstants.com/media/sounds/c_jNuXsFa.mp3' },
  { id: 'Thrauns', letter: 'A', src: 'https://www.myinstants.com/media/sounds/a_wqQWATd.mp3' },
  { id: 'Aelan', letter: 'S', src: 'https://www.myinstants.com/media/sounds/e_rhlMBwk.mp3' },
  { id: 'Manger', letter: 'D', src: 'https://www.myinstants.com/media/sounds/f_kMG591C.mp3' },
  { id: 'Visol', letter: 'Z', src: 'https://www.myinstants.com/media/sounds/z_VFf6aN8.mp3' },
  { id: 'Kolphins', letter: 'X', src: 'https://www.myinstants.com/media/sounds/x_J6FWq5F.mp3' },
  { id: 'Ghamins', letter: 'C', src: 'https://www.myinstants.com/media/sounds/c_Xi6274T.mp3'  },
]


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      display:'Click Key To Play'
    }
  }

handleDisplay=display=>this.setState({display});

  render(){
    return(
      <div id="drum-machine"> 
        <div id="display">{this.state.display}</div>
        <div id="drum-pads">
        {data.map(d=>(
          <DrumPad id={d.id} letter={d.letter} src={d.src} handleDisplay={this.handleDisplay}
           />
        ))}
        </div>
       <p><strong>KOI MIL GAYA (Alien Calling Key Note) : </strong>WQDZWQSAWQDZAEQ</p>
      </div>

    )
  }

}

export default App;
