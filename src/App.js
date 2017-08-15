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
                  "elementPosition": "start",
                  "material": "Basic Materials",
                  "subselectors": "All Subselectors",
                  "children": [
                    { 
                      "name": "Tim McGough",
                      "elementPosition": "middle",
                      "position": "Point72, PM",
                      "children": [
                        { 
                          "name": "Jane Waldorf",
                          "position": "Goldman Sasch, Analyst",
                          "star": "yes",
                          "value": "RE",
                          "education": "University of Washington (2008)",
                          "info": "12 Years on Buy Side",
                          "elementPosition": "end",
                          "data": [
                            {
                              "name": "Style",
                              "value": "96"
                            },
                            {
                              "name": "Firm",
                              "value": "82"
                            },
                            {
                              "name": "Edu",
                              "value": "92"
                            },
                            {
                              "name": "Conn",
                              "value": "97"
                            }
                          ]
                        }
                      ]
                    },
                    { 
                      "name": "Jane Waldorf",
                      "elementPosition": "middle",
                      "position": "Point72, Analyst",
                      "children": [
                        { 
                          "name": "Eric Jameson",
                          "position": "Goldman Sasch, Analyst",
                          "star": "yes",
                          "value": "RE",
                          "education": "University of Washington (2008)",
                          "info": "12 Years on Buy Side",
                          "elementPosition": "end",
                          "data": [
                            {
                              "name": "Style",
                              "value": "96"
                            },
                            {
                              "name": "Firm",
                              "value": "82"
                            },
                            {
                              "name": "Edu",
                              "value": "92"
                            },
                            {
                              "name": "Conn",
                              "value": "97"
                            }
                          ]
                        },
                        { 
                          "name": "Jane Waldorf",
                          "position": "Goldman Sasch, Analyst",
                          "star": "no",
                          "value": "RE",
                          "education": "University of Washington (2008)",
                          "info": "12 Years on Buy Side",
                          "elementPosition": "end",
                          "data": [
                            {
                              "name": "Style",
                              "value": "96"
                            },
                            {
                              "name": "Firm",
                              "value": "82"
                            },
                            {
                              "name": "Edu",
                              "value": "92"
                            },
                            {
                              "name": "Conn",
                              "value": "97"
                            }
                          ]
                        },
                        { 
                          "name": "Jane Waldorf",
                          "position": "Goldman Sasch, Analyst",
                          "star": "no",
                          "value": "RE",
                          "education": "University of Washington (2008)",
                          "info": "12 Years on Buy Side",
                          "elementPosition": "end",
                          "data": [
                            {
                              "name": "Style",
                              "value": "96"
                            },
                            {
                              "name": "Firm",
                              "value": "82"
                            },
                            {
                              "name": "Edu",
                              "value": "92"
                            },
                            {
                              "name": "Conn",
                              "value": "97"
                            }
                          ]
                        }
                      ]
                    },
                    { 
                      "name": "Jane Waldorf",
                      "elementPosition": "middle",
                      "position": "Point72, Analyst",
                      "children": [
                        { 
                          "name": "Eric Jameson",
                          "position": "Goldman Sasch, Analyst",
                          "star": "no",
                          "value": "RE",
                          "education": "University of Washington (2008)",
                          "info": "12 Years on Buy Side",
                          "elementPosition": "end",
                          "data": [
                            {
                              "name": "Style",
                              "value": "96"
                            },
                            {
                              "name": "Firm",
                              "value": "82"
                            },
                            {
                              "name": "Edu",
                              "value": "92"
                            },
                            {
                              "name": "Conn",
                              "value": "97"
                            }
                          ]
                        },
                        { 
                          "name": "Jane Waldorf",
                          "position": "Goldman Sasch, Analyst",
                          "star": "no",
                          "value": "RE",
                          "education": "University of Washington (2008)",
                          "info": "12 Years on Buy Side",
                          "elementPosition": "end",
                          "data": [
                            {
                              "name": "Style",
                              "value": "96"
                            },
                            {
                              "name": "Firm",
                              "value": "82"
                            },
                            {
                              "name": "Edu",
                              "value": "92"
                            },
                            {
                              "name": "Conn",
                              "value": "97"
                            }
                          ]
                        }
                      ]
                    },
                    { 
                      "name": "Jane Waldorf",
                      "position": "Point72, Analyst",
                      "elementPosition": "middle",
                      "children": [
                        { 
                          "name": "Eric Jameson",
                          "position": "Goldman Sasch, Analyst",
                          "star": "no",
                          "value": "RE",
                          "education": "University of Washington (2008)",
                          "info": "12 Years on Buy Side",
                          "elementPosition": "end",
                          "data": [
                            {
                              "name": "Style",
                              "value": "96"
                            },
                            {
                              "name": "Firm",
                              "value": "82"
                            },
                            {
                              "name": "Edu",
                              "value": "92"
                            },
                            {
                              "name": "Conn",
                              "value": "97"
                            }
                          ]
                        },
                        { 
                          "name": "Jane Waldorf",
                          "position": "Goldman Sasch, Analyst",
                          "star": "no",
                          "value": "RE",
                          "education": "University of Washington (2008)",
                          "info": "12 Years on Buy Side",
                          "elementPosition": "end",
                          "data": [
                            {
                              "name": "Style",
                              "value": "96"
                            },
                            {
                              "name": "Firm",
                              "value": "82"
                            },
                            {
                              "name": "Edu",
                              "value": "92"
                            },
                            {
                              "name": "Conn",
                              "value": "97"
                            }
                          ]
                        },
                        { 
                          "name": "Jane Waldorf",
                          "position": "Goldman Sasch, Analyst",
                          "star": "no",
                          "value": "RE",
                          "education": "University of Washington (2008)",
                          "info": "12 Years on Buy Side",
                          "elementPosition": "end",
                          "data": [
                            {
                              "name": "Style",
                              "value": "96"
                            },
                            {
                              "name": "Firm",
                              "value": "82"
                            },
                            {
                              "name": "Edu",
                              "value": "92"
                            },
                            {
                              "name": "Conn",
                              "value": "97"
                            }
                          ]
                        },
                        { 
                          "name": "Jane Waldorf",
                          "position": "Goldman Sasch, Analyst",
                          "star": "no",
                          "value": "RE",
                          "education": "University of Washington (2008)",
                          "info": "12 Years on Buy Side",
                          "elementPosition": "end",
                          "data": [
                            {
                              "name": "Style",
                              "value": "96"
                            },
                            {
                              "name": "Firm",
                              "value": "82"
                            },
                            {
                              "name": "Edu",
                              "value": "92"
                            },
                            {
                              "name": "Conn",
                              "value": "97"
                            }
                          ]
                        }
                      ]
                    },
                    { 
                      "name": "Jane Waldorf",
                      "position": "Point72, Analyst",
                      "elementPosition": "middle",
                      "children": [
                        { 
                          "name": "Eric Jameson",
                          "position": "Goldman Sasch, Analyst",
                          "star": "no",
                          "value": "RE",
                          "education": "University of Washington (2008)",
                          "info": "12 Years on Buy Side",
                          "elementPosition": "end",
                          "data": [
                            {
                              "name": "Style",
                              "value": "96"
                            },
                            {
                              "name": "Firm",
                              "value": "82"
                            },
                            {
                              "name": "Edu",
                              "value": "92"
                            },
                            {
                              "name": "Conn",
                              "value": "97"
                            }
                          ]
                        },
                        { 
                          "name": "Jane Waldorf",
                          "position": "Goldman Sasch, Analyst",
                          "star": "no",
                          "value": "RE",
                          "education": "University of Washington (2008)",
                          "info": "12 Years on Buy Side",
                          "elementPosition": "end",
                          "data": [
                            {
                              "name": "Style",
                              "value": "96"
                            },
                            {
                              "name": "Firm",
                              "value": "82"
                            },
                            {
                              "name": "Edu",
                              "value": "92"
                            },
                            {
                              "name": "Conn",
                              "value": "97"
                            }
                          ]
                        }
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
      <div style={{"backgroundColor":"#F6F7F9"}}>
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
