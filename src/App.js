import React from 'react'
// import Chart from './Chart'
import Tree from './Tree'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      dataArray0: [30, 35, 45, 55, 70],
      dataArray1: [50, 55, 45, 35, 20, 25, 25, 40],
      dataIndex: 0,
      treeData0: {
                  "name": "Top Level",
                  "children": [
                    { 
                      "name": "Level 2: A",
                      "children": [
                        { "name": "Son of A" },
                        { "name": "Daughter of A" }
                      ]
                    },
                    { 
                      "name": "Level 2: B",
                      "children": [
                        { "name": "Daughter of B" }
                      ]
                    }
                  ]
                },
                treeData1: {
                  "name": "Top Level",
                  "children": [
                    { 
                      "name": "Level 2: A",
                      "children": [
                        { "name": "Son of A" },
                        { "name": "Daughter of A" },
                        { "name": "Another Daughter of A" }
                      ]
                    },
                    { 
                      "name": "Level 2: B",
                      "children": [
                        { "name": "Daughter of B" }
                      ]
                    }
                  ]
                }

    }

    this.changeData = this.changeData.bind(this)
  }



  changeData () {
    this.setState(state => ({
      dataIndex: (state.dataIndex + 1) % 2
    }))
  }

  render () {
    return (
      <div>
        <button onClick={this.changeData}>Change data</button>
        <div>
          {/* <Chart
            data={this.state['dataArray' + this.state.dataIndex]}
            title={'dataset ' + this.state.dataIndex}
          /> */}
          <Tree
            data={this.state['treeData' + this.state.dataIndex]}
            title={'dataset ' + this.state.dataIndex}
          />
        </div>


      </div>
    )
  }
}

export default App
