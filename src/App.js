import React from 'react';
// import Chart from './Chart'
// import Tree from './Tree'
import Circles2 from './Circles2';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      dataArray0: [30, 35, 45, 55, 70],
      dataArray1: [50, 55, 45, 35, 20, 25, 25, 40],
      dataIndex: 0,
      treeData0: {
        "name": "Top Level",
        "material": "Basic Materials",
        "subselectors": "All Subselectors",
        "children": [
          {
            "name": "Tim McGough",
            "position": "Point72, PM",
            "children": [
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "yes",
                "value": "RE",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "79"
                  },
                  {
                    "name": "Firm",
                    "value": "96"
                  },
                  {
                    "name": "Edu",
                    "value": "88"
                  },
                  {
                    "name": "Conn",
                    "value": "98"
                  }
                ]
              }
            ]
          },
          {
            "name": "Jane Waldorf",
            "position": "Point72, Analyst",
            "children": [
              {
                "name": "Eric Jameson",
                "position": "Goldman Sasch, Analyst",
                "star": "yes",
                "value": "HM",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "92"
                  },
                  {
                    "name": "Firm",
                    "value": "97"
                  },
                  {
                    "name": "Edu",
                    "value": "95"
                  },
                  {
                    "name": "Conn",
                    "value": "99"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "NH",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "80"
                  },
                  {
                    "name": "Firm",
                    "value": "60"
                  },
                  {
                    "name": "Edu",
                    "value": "55"
                  },
                  {
                    "name": "Conn",
                    "value": "95"
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
                "data": [
                  {
                    "name": "Style",
                    "value": "77"
                  },
                  {
                    "name": "Firm",
                    "value": "84"
                  },
                  {
                    "name": "Edu",
                    "value": "92"
                  },
                  {
                    "name": "Conn",
                    "value": "99"
                  }
                ]
              }
            ]
          },
          {
            "name": "Jane Waldorf",
            "position": "Point72, Analyst",
            "children": [
              {
                "name": "Eric Jameson",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "HM",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "82"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "82"
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
                "value": "NH",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "96"
                  },
                  {
                    "name": "Firm",
                    "value": "96"
                  },
                  {
                    "name": "Edu",
                    "value": "96"
                  },
                  {
                    "name": "Conn",
                    "value": "77"
                  }
                ]
              }
            ]
          },
          {
            "name": "Jane Waldorf",
            "position": "Point72, Analyst",
            "children": [
              {
                "name": "Eric Jameson",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "HM",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "91"
                  },
                  {
                    "name": "Firm",
                    "value": "92"
                  },
                  {
                    "name": "Edu",
                    "value": "92"
                  },
                  {
                    "name": "Conn",
                    "value": "89"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "NH",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "99"
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
                    "value": "99"
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
                    "value": "78"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "84"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "99"
                  },
                  {
                    "name": "Conn",
                    "value": "90"
                  }
                ]
              }
            ]
          },
          {
            "name": "Jane Waldorf",
            "position": "Point72, Analyst",
            "children": [
              {
                "name": "Eric Jameson",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "HM",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "91"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "82"
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
                "value": "NH",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "80"
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
                    "value": "88"
                  }
                ]
              }
            ]
          }
        ]
      },
      treeData1: {
        "name": "Top Level",
        "material": "Basic Materials",
        "subselectors": "All Subselectors",
        "children": [
          {
            "name": "Tim McGough",
            "position": "Point72, PM",
            "children": [
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "yes",
                "value": "RE",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "79"
                  },
                  {
                    "name": "Firm",
                    "value": "96"
                  },
                  {
                    "name": "Edu",
                    "value": "88"
                  },
                  {
                    "name": "Conn",
                    "value": "98"
                  }
                ]
              },
              {
                "name": "Eric Jameson",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "HM",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "82"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "82"
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
            "children": [
              {
                "name": "Eric Jameson",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "HM",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "82"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "82"
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
                "value": "NH",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "96"
                  },
                  {
                    "name": "Firm",
                    "value": "96"
                  },
                  {
                    "name": "Edu",
                    "value": "96"
                  },
                  {
                    "name": "Conn",
                    "value": "77"
                  }
                ]
              }
            ]
          },
          {
            "name": "Jane Waldorf",
            "position": "Point72, Analyst",
            "children": [
              {
                "name": "Eric Jameson",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "HM",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "91"
                  },
                  {
                    "name": "Firm",
                    "value": "92"
                  },
                  {
                    "name": "Edu",
                    "value": "92"
                  },
                  {
                    "name": "Conn",
                    "value": "89"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "NH",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "99"
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
                    "value": "99"
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
                    "value": "78"
                  }
                ]
              },
              {
                "name": "Jane Waldorf",
                "position": "Goldman Sasch, Analyst",
                "star": "no",
                "value": "",
                "education": "University of Washington (2008)",
                "info": "12 Years on Buy Side",
                "data": [
                  {
                    "name": "Style",
                    "value": "84"
                  },
                  {
                    "name": "Firm",
                    "value": "82"
                  },
                  {
                    "name": "Edu",
                    "value": "99"
                  },
                  {
                    "name": "Conn",
                    "value": "90"
                  }
                ]
              }
            ]
          }
        ]
      },
      circlesData: {
        "name": "flare",
        "children": [
          {
            "name": "Goldman Sachs",
            "children": [
              {
                "name": "FAF Small-Mid Cap Core",
                "children": [
                  {
                    "name": "Finance Advising", "children": [
                      {
                        "name": "Finance Advising",
                        "size": 1,
                        "data": [
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },
                          {
                            "name": "Tim Carrington",
                            "position": "PM"
                          },  
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },   
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },   
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          }, 
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },   
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          },   
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          }, 
                          {
                            "name": "Jane Waldorf",
                            "position": "Analyst"
                          }                          
                        ]
                      },
                      { "name": "CommunityStructure", "size": 1 },
                      { "name": "HierarchicalCluster", "size": 1 },
                      { "name": "MergeEdge", "size": 1 }
                    ]
                  },
                  { "name": "CommunityStructure", "size": 1 },
                  { "name": "HierarchicalCluster", "size": 1 },
                  { "name": "MergeEdge", "size": 1 }
                ]
              },
              {
                "name": "FAF Small-Mid Cap Core",
                "children": [
                  { "name": "BetweennessCentrality", "size": 1 },
                  { "name": "LinkDistance", "size": 1 },
                  { "name": "MaxFlowMinCut", "size": 1 },
                  { "name": "ShortestPaths", "size": 1 },
                  { "name": "SpanningTree", "size": 1 }
                ]
              },
              {
                "name": "FAF Small-Mid Cap Core",
                "children": [
                  { "name": "AspectRatioBanker", "size": 1 }
                ]
              },
              {
                "name": "Sector Name",
                "children": [
                  { "name": "AspectRatioBanker", "size": 1 }
                ]
              },
              {
                "name": "Sector Name",
                "children": [
                  { "name": "AspectRatioBanker", "size": 1 }
                ]
              },
              {
                "name": "Sector Name",
                "children": [
                  { "name": "AspectRatioBanker", "size": 1 }
                ]
              },
              {
                "name": "Sector Name",
                "children": [
                  { "name": "AspectRatioBanker", "size": 1 }
                ]
              }
            ]
          },
          {
            "name": "Cameron George & Associates",
            "children": [
              { "name": "Easing", "size": 1 },
              { "name": "FunctionSequence", "size": 1 },
              {
                "name": "interpolate",
                "children": [
                  { "name": "ArrayInterpolator", "size": 1 },
                  { "name": "ColorInterpolator", "size": 1 },
                  { "name": "DateInterpolator", "size": 1 },
                  { "name": "Interpolator", "size": 1 },
                  { "name": "MatrixInterpolator", "size": 1 },
                  { "name": "NumberInterpolator", "size": 1 },
                  { "name": "ObjectInterpolator", "size": 1 },
                  { "name": "PointInterpolator", "size": 1 },
                  { "name": "RectangleInterpolator", "size": 1 }
                ]
              },
              { "name": "ISchedulable", "size": 1 },
              { "name": "Parallel", "size": 1 },
              { "name": "Pause", "size": 1 },
              { "name": "Scheduler", "size": 1 },
              { "name": "Sequence", "size": 1 },
              { "name": "Transition", "size": 1 },
              { "name": "Transitioner", "size": 1 },
              { "name": "TransitionEvent", "size": 1 },
              { "name": "Tween", "size": 1 }
            ]
          },
          {
            "name": "Lakeland Boyer, LP",
            "children": [
              {
                "name": "converters",
                "children": [
                  { "name": "Converters", "size": 1 },
                  { "name": "DelimitedTextConverter", "size": 1 },
                  { "name": "GraphMLConverter", "size": 1 },
                  { "name": "IDataConverter", "size": 1 },
                  { "name": "JSONConverter", "size": 1 }
                ]
              },
              { "name": "DataField", "size": 1 },
              { "name": "DataSchema", "size": 1 },
              { "name": "DataSet", "size": 1 },
              { "name": "DataSource", "size": 1 },
              { "name": "DataTable", "size": 1 },
              { "name": "DataUtil", "size": 1 }
            ]
          },
          {
            "name": "Robert May and Sons",
            "children": [
              { "name": "DirtySprite", "size": 1 },
              { "name": "LineSprite", "size": 1 },
              { "name": "RectSprite", "size": 1 },
              { "name": "TextSprite", "size": 1 }
            ]
          },
          {
            "name": "Duncan Hrst Capital",
            "children": [
              { "name": "FlareVis", "size": 1 }
            ]
          },
          {
            "name": "Citadel",
            "children": [
              { "name": "DragForce", "size": 1 },
              { "name": "GravityForce", "size": 1 },
              { "name": "IForce", "size": 1 },
              { "name": "NBodyForce", "size": 1 },
              { "name": "Particle", "size": 1 },
              { "name": "Simulation", "size": 1 },
              { "name": "Spring", "size": 1 },
              { "name": "SpringForce", "size": 1 }
            ]
          },
          {
            "name": "Ralph jameson & Sons",
            "children": [
              { "name": "AggregateExpression", "size": 1 },
              { "name": "And", "size": 1 },
              { "name": "Arithmetic", "size": 1 },
              { "name": "Average", "size": 1 },
              { "name": "BinaryExpression", "size": 1 },
              { "name": "Comparison", "size": 1 },
              { "name": "CompositeExpression", "size": 1 },
              { "name": "Count", "size": 1 },
              { "name": "DateUtil", "size": 1 },
              { "name": "Distinct", "size": 1 },
              { "name": "Expression", "size": 1 },
              { "name": "ExpressionIterator", "size": 1 },
              { "name": "Fn", "size": 1 },
              { "name": "If", "size": 1 },
              { "name": "IsA", "size": 1 },
              { "name": "Literal", "size": 1 },
              { "name": "Match", "size": 1 },
              { "name": "Maximum", "size": 1 },
              {
                "name": "methods",
                "children": [
                  { "name": "add", "size": 1 },
                  { "name": "and", "size": 1 },
                  { "name": "average", "size": 1 },
                  { "name": "count", "size": 1 },
                  { "name": "distinct", "size": 1 },
                  { "name": "div", "size": 1 },
                  { "name": "eq", "size": 1 },
                  { "name": "fn", "size": 1 },
                  { "name": "gt", "size": 1 },
                  { "name": "gte", "size": 1 },
                  { "name": "iff", "size": 1 },
                  { "name": "isa", "size": 1 },
                  { "name": "lt", "size": 1 },
                  { "name": "lte", "size": 1 },
                  { "name": "max", "size": 1 },
                  { "name": "min", "size": 1 },
                  { "name": "mod", "size": 1 },
                  { "name": "mul", "size": 1 },
                  { "name": "neq", "size": 1 },
                  { "name": "not", "size": 1 },
                  { "name": "or", "size": 1 },
                  { "name": "orderby", "size": 1 },
                  { "name": "range", "size": 1 },
                  { "name": "select", "size": 1 },
                  { "name": "stddev", "size": 1 },
                  { "name": "sub", "size": 1 },
                  { "name": "sum", "size": 1 },
                  { "name": "update", "size": 1 },
                  { "name": "variance", "size": 1 },
                  { "name": "where", "size": 1 },
                  { "name": "xor", "size": 1 },
                  { "name": "_", "size": 1 }
                ]
              },
              { "name": "Minimum", "size": 1 },
              { "name": "Not", "size": 1 },
              { "name": "Or", "size": 1 },
              { "name": "Query", "size": 1 },
              { "name": "Range", "size": 1 },
              { "name": "StringUtil", "size": 1 },
              { "name": "Sum", "size": 1 },
              { "name": "Variable", "size": 1 },
              { "name": "Variance", "size": 1 },
              { "name": "Xor", "size": 1 }
            ]
          },
          {
            "name": "UGB Landers",
            "children": [
              { "name": "IScaleMap", "size": 1 },
              { "name": "LinearScale", "size": 1 },
              { "name": "LogScale", "size": 1 },
              { "name": "OrdinalScale", "size": 1 },
              { "name": "QuantileScale", "size": 1 },
              { "name": "QuantitativeScale", "size": 1 },
              { "name": "RootScale", "size": 1 },
              { "name": "Scale", "size": 1 },
              { "name": "ScaleType", "size": 1 },
              { "name": "TimeScale", "size": 1 }
            ]
          }
        ]
      }

    }

    this.changeData = this.changeData.bind(this)
  }



  changeData() {
    this.setState(state => ({
      dataIndex: (state.dataIndex + 1) % 2
    }))
  }

  render() {
    return (
      <div style={{ "backgroundColor": "#F6F7F9" }}>
        <button onClick={this.changeData}>Change data</button>
        <div>
          {/* <Chart
            data={this.state['dataArray' + this.state.dataIndex]}
            title={'dataset ' + this.state.dataIndex}
          /> */}
          {/* <Tree
            data={this.state['treeData' + this.state.dataIndex]}
            title={'dataset ' + this.state.dataIndex}
          /> */}

          <Circles2
            data={this.state.circlesData}
            title={'dataset ' + this.state.dataIndex}
          />
        </div>


      </div>
    )
  }
}

export default App
