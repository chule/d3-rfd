import React from 'react';
//import PropTypes from 'prop-types';
import { withFauxDOM } from 'react-faux-dom';
import * as d3 from 'd3';
import './styleTree.css';
import childrenImg from './img/children.png';
import starImg from './img/star.png';
import reImg from './img/re.png';
import hmImg from './img/hm.png';
import nhImg from './img/nh.png';
//import downIcon from './img/downIcon.png';
import downIcon from './img/downIcon1.png';
import upIcon from './img/upIcon1.png';
import viewProfile from './img/viewProfile.png';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.renderD3 = this.renderD3.bind(this)
  }

  componentDidMount() {
    this.renderD3();
  }

  componentDidUpdate(prevProps, prevState) {
    // do not compare props.chart as it gets updated in updateD3()
    if (this.props.data !== prevProps.data) {
      this.renderD3();
    }
  }

  render() {
    return (
      <div>
        {this.props.chart}
      </div>
    )
  }

  renderD3() {

    var component = this;

    var treeData = this.props.data;

    // This will create a faux div and store its virtual DOM in state.chart
    var faux = this.props.connectFauxDOM('div', 'chart');
    var dataId = null;

    /*
       D3 code below by Alan Smith, http://bl.ocks.org/alansmithy/e984477a741bc56db5a5
       The only changes made for this example are...
       1) feeding D3 the faux node created above
       2) calling this.animateFauxDOM(duration) after each animation kickoff
       3) move data generation and button code to parent component
       4) data and title provided as props by parent component
       5) reattach to faux dom for updates
       6) move rejoining of data and chart updates to updateD3()
    */

    d3.select(faux).select("svg").remove();

    var svgDoc = d3.select(faux).append('svg');

    d3.selection.prototype.moveToFront = function () {
      return this.each(function () {
        this.parentNode.appendChild(this);
      });
    };


    // Set the dimensions and margins of the diagram
    var margin = { top: 30, right: 270, bottom: 120, left: 20 },
      width = 1140 - margin.left - margin.right,
      height = 1200 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = svgDoc
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate("
      + margin.left + "," + margin.top + ")");

    var i = 0,
      duration = 750,
      root;

    // declares a tree layout and assigns the size
    var treemap = d3.tree().size([height, width]);

    // Assigns parent, children, height, depth
    root = d3.hierarchy(treeData, function (d) { return d.children; });
    root.x0 = height / 2;
    root.y0 = 0;

    // Collapse after the second level
    // root.children.forEach(collapse);
    // collapse(root)


    // function visEach(root, node) {

    //   var counter = 0;

    //   console.log(counter)
    //   root.eachAfter(function(d)  {
    //     d3.select(d.node)
    //       .selectAll('path')
    //       .transition()
    //       .delay(counter*200)
    //       .style("fill","red");
    //     counter++;
    //   });
    // }


    update(root);

    // Collapse the node and all it's children
    // function collapse(d) {
    //   if (d.children) {
    //     d._children = d.children
    //     d._children.forEach(collapse)
    //     d.children = null
    //   }
    // }

    function update(source, index) {

      // Assigns the x and y position for the nodes
      var treeData = treemap(root);

      // Compute the new tree layout.
      var nodes = treeData.descendants(),
        links = treeData.descendants().slice(1);

      // Normalize for fixed-depth.
      //nodes.forEach(function(d){ d.y = d.depth * 180});

      // ****************** Nodes section ***************************

      // Update the nodes...
      var node = svg.selectAll('g.node')
        .data(nodes, function (d) { return d.id || (d.id = ++i); });

      // Enter any new modes at the parent's previous position.
      var nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr("transform", function (d) {
          return "translate(" + source.y0 + "," + source.x0 + ")";
        })
      //.on('click', click);

      // Add Circle for the nodes
      nodeEnter.append('path')
        .attr('class', 'node')
        //.attr('r', 1e-6)
        .attr("d", function (d, i) {

          if (!d.parent) {
            return 'm0,88l192.28125,0l27.46875,-44l-27.46875,-44l-192.28125,0l0,88z';
          }

          if (d.parent && d.children) {
            return 'm27.15527,51.875l235.3457,0l27.15527,-25.9375l-27.15527,-25.9375l-235.3457,0l-27.15527,25.9375l27.15527,25.9375z';
          }

          if (!d.children) {
            return 'm24.82031,51.75l239.92969,0l0,-25.875l0,-25.875l-239.92969,0l-24.82031,25.875l24.82031,25.875z';
          }


          //start
          // d="m0,88l192.28125,0l27.46875,-44l-27.46875,-44l-192.28125,0l0,88z" id="svg_1"
          //'M0 32 L48 32 L58 16 L48 0 L0 0 L0 16 Z'
          //middle
          //d="m27.15527,51.875l235.3457,0l27.15527,-25.9375l-27.15527,-25.9375l-235.3457,0l-27.15527,25.9375l27.15527,25.9375z"
          //'M8 32 L56 32 L64 16 L56 0 L8 0 L0 16 Z'
          //end
          //d="m24.82031,51.75l239.92969,0l0,-25.875l0,-25.875l-239.92969,0l-24.82031,25.875l24.82031,25.875z"
          //'M8 32 L64 32 L64 16 L64 0 L8 0 L0 16 Z'
        })
        .attr("transform", function (d) {
          if (!d.parent) {
            return "translate(0,-44)"
          } else {
            return "translate(0,-26)"
          }
        })
        .style("fill", function (d) {
          return "#ffffff"// d._children ? "lightsteelblue" : "#fff";
        });

      // Add labels for the nodes
      var labelGroup = nodeEnter.append("g")
        .attr("transform", "translate(40,-5)");


      labelGroup.each(function (d) {

        //let group = this;

        if (d.data.elementPosition === "start") {
          d3.select(this).append("rect")
            .attr("width", 4)
            .attr("height", 88)
            .attr("transform", "translate(-40,-39)")
            .style("fill", "#ccc")
            .style("pointer-events", "none");

          d3.select(this).append('text')
            .style("fill", "black")
            .style("font-size", 14)
            .style("pointer-events", "none")
            .text(function (d) {
              return d.data.material;
            });

          d3.select(this).append('text')
            .style("fill", "darkgrey")
            .attr("y", 18)
            .style("font-size", 11)
            .style("pointer-events", "none")
            .text(function (d) {
              return d.data.subselectors;
            });

        }

        if (d.data.elementPosition === "middle" || d.data.elementPosition === "end") {

          d3.select(this).append('text')
            .style("fill", "black")
            .style("font-size", 12)
            .style("pointer-events", "none")
            .text(function (d) {
              return d.data.name;
            });

          d3.select(this).append('text')
            .style("fill", "darkgrey")
            .attr("y", 18)
            .style("font-size", 11)
            .style("pointer-events", "none")
            .text(function (d) {
              return d.data.position;
            });

        }

        if (d.data.elementPosition === "middle") {

          let tempData = d.children.reduce(function (obj, value) {

            var tempval = 0;

            if (value.data.star === "yes") {
              tempval = + 1;
            }

            return {
              "stars": obj.stars + tempval,
              "children": obj.children + 1
            };

          }, { "stars": 0, "children": 0 });


          if (tempData.stars > 0) {
            d3.select(this).append("svg:image")
              .attr('x', 200)
              .attr('y', -10)
              .attr('width', 12)
              .attr('height', 12)
              .attr("xlink:href", starImg);

            d3.select(this).append("svg:image")
              .attr('x', 200)
              .attr('y', 8)
              .attr('width', 12)
              .attr('height', 12)
              .style("pointer-events", "none")
              .attr("xlink:href", childrenImg);

            d3.select(this).append("text")
              .attr("transform", "translate(190,0)")
              .style("fill", "darkgrey")
              .style("pointer-events", "none")
              .text(tempData.stars)

            d3.select(this).append("text")
              .attr("transform", "translate(190,19)")
              .style("fill", "darkgrey")
              .style("pointer-events", "none")
              .text(tempData.children)

          }

          if (tempData.stars === 0) {

            d3.select(this).append("svg:image")
              .attr('x', 200)
              .attr('y', 0)
              .attr('width', 12)
              .attr('height', 12)
              .style("pointer-events", "none")
              .attr("xlink:href", childrenImg);

            d3.select(this).append("text")
              .attr("transform", "translate(190,11)")
              .style("fill", "darkgrey")
              .style("pointer-events", "none")
              .text(tempData.children)

          }

        }

        if (d.data.elementPosition === "end") {

          var sum = d.data.data.reduce(function (sum, a) { return +a.value + sum; }, 0);

          var avg = Math.round(sum / d.data.data.length);

          var image;
          if (d.data.value) {
            if (d.data.value === "RE") {
              image = reImg;
            } else if (d.data.value === "HM") {
              image = hmImg;
            } else if (d.data.value === "NH") {
              image = nhImg;
            }
          }


          if (d.data.star === "yes" && d.data.value) {
            d3.select(this).append("svg:image")
              .attr('x', 80)
              .attr('y', -10)
              .attr('width', 12)
              .attr('height', 12)
              .style("pointer-events", "none")
              .attr("xlink:href", starImg);

            d3.select(this).append("svg:image")
              .attr('x', 95)
              .attr('y', -10)
              .attr('width', 18)
              .attr('height', 12)
              .attr("xlink:href", image)
              .on("mouseover", function (d) {
                //console.log("re hm nh");
              });
          }

          if (d.data.star === "no" && d.data.value) {
            d3.select(this).append("svg:image")
              .attr('x', 80)
              .attr('y', -10)
              .attr('width', 18)
              .attr('height', 12)
              .attr("xlink:href", image)
              .on("mouseover", function (d) {
                //console.log("re hm nh");
              });
          }

          var percentageGroup = d3.select(this).append("g").attr("class", "percentageGroup");

          percentageGroup
            .append("text")
            .attr("transform", "translate(210,11)")
            .style("fill", "black")
            .style("text-anchor", "end")
            .style("font-size", 18)
            .style("pointer-events", "none")
            .text(avg);

          percentageGroup
            .append("rect")
            .attr('x', 189)
            .attr('y', 15)
            .attr('width', 22)
            .attr('height', 3)
            .style("pointer-events", "none")
            .attr("fill", "#D9D7DA");


          percentageGroup
            .append("rect")
            .attr('x', 189)
            .attr('y', 15)
            .attr('width', 22 * (avg / 100))
            .attr('height', 3)
            .style("pointer-events", "none")
            .attr("fill", "#4994ED");

          let icon = d3.select(this).append("svg:image")
            .attr('x', 190)
            .attr('y', 0)
            .attr('width', 15)
            .attr('height', 15)
            .attr("class", "downIcon")
            .attr("xlink:href", downIcon)
            .style("opacity", 0)
            .style("cursor", "pointer")
            //.style("pointer-events", "none")
            .on("click", function (d) {
              component.props.animateFauxDOM(800);
              //console.log(d)

              click(d);




              if (dataId === d.id) {
                svg.selectAll(".downIcon").attr("xlink:href", downIcon)
                  .style("opacity", 0);
                d3.select(this).attr("xlink:href", upIcon)
                  .style("opacity", 1);

                svg.selectAll(".percentageGroup")
                  .style("opacity", 1);
                percentageGroup.style("opacity", 0);

                svg.selectAll(".expanded").remove();

                // svg.selectAll(".expanded")
                // .transition()
                // .duration(800)
                // .attr('height', 0)
                // .remove();

                var expanedColors = ["#FC737E", "#4398EE", "#38D2C8", "#B33DD7"];

                var expanded = d3.select(this.parentNode).append("g")
                  .attr("class", "expanded")
                //.style("opacity",0);

                expanded.append("rect")
                  .attr('x', -15)
                  .attr('y', 31)
                  .attr('width', 239)
                  .attr('height', 0)
                  .style("fill", "white")
                  .transition()
                  .duration(400)
                  .attr('height', 150)

                var percentagesExpanded = expanded.selectAll("g")
                  .data(d.data.data)
                  .enter()
                  .append("g")
                  .attr("transform", function (d, i) {
                    return "translate(" + (15 + (i * 53)) + ",50)";
                  });

                percentagesExpanded
                  .append("text")
                  .attr("transform", "translate(21,0)")
                  .style("fill", "black")
                  .style("text-anchor", "end")
                  .style("font-size", 18)
                  .style("pointer-events", "none")
                  .text(function (d) {
                    return d.value;
                  });

                percentagesExpanded
                  .append("rect")
                  .attr('x', 0)
                  .attr('y', 5)
                  .attr('width', 22)
                  .attr('height', 3)
                  .style("pointer-events", "none")
                  .attr("fill", "#D9D7DA");


                percentagesExpanded
                  .append("rect")
                  .attr('x', 0)
                  .attr('y', 5)
                  .attr('width', function (d) {
                    return 22 * (d.value / 100)
                  })
                  .attr('height', 3)
                  .style("pointer-events", "none")
                  .attr("fill", function (d, i) {
                    return expanedColors[i];
                  });

                percentagesExpanded
                  .append("text")
                  .attr("transform", "translate(11,20)")
                  .style("fill", "darkgrey")
                  .style("text-anchor", "middle")
                  .style("font-size", 10)
                  .style("pointer-events", "none")
                  .text(function (d) {
                    return d.name;
                  });

                expanded.append("text")
                  .attr("transform", "translate(100,100)")
                  .style("fill", "darkgrey")
                  .style("text-anchor", "middle")
                  .style("font-size", 11)
                  .style("pointer-events", "none")
                  .text(function (d) {
                    return d.data.education;
                  });

                expanded.append("text")
                  .attr("transform", "translate(100,120)")
                  .style("fill", "darkgrey")
                  .style("text-anchor", "middle")
                  .style("font-size", 11)
                  .style("pointer-events", "none")
                  .text(function (d) {
                    return d.data.info;
                  });

                expanded.append("svg:image")
                  .attr('x', 65)
                  .attr('y', 137)
                  .attr('width', 72)
                  .attr('height', 24)
                  .attr("xlink:href", viewProfile)
                  .style("opacity", 1)
                  .style("cursor", "pointer")
                  .on("click", function (d) {
                    window.open('http://google.com', '_blank');
                  });


              } else {

                svg.selectAll(".percentageGroup")
                  .style("opacity", 1);
                percentageGroup.style("opacity", 0);
                d3.select(this).attr("xlink:href", downIcon);

                // percentagesExpanded
                //   .remove();

                svg.selectAll(".expanded").remove();

              }


            })
            .on("mouseover", function (d) {
              percentageGroup.style("opacity", 0);
              d3.select(this).style("opacity", 1);
            });




          //expanded.moveToFront();

          d3.select(this.parentNode).select("path")
            .on("mouseover", function (d) {
              // console.log(d3.select(this.parentNode).select("g").select(".downIcon"));

              // //d3.select(this.parentNode).select("g").select(".downIcon")
              // icon//.style("pointer-events", "all")
              //   .style("opacity", 1);

              // percentageGroup.style("opacity", 0);

              // console.log(dataId, d.id)

              svg.selectAll(".percentageGroup")
                .style("opacity", 1);

              percentageGroup.style("opacity", 0);

              svg.selectAll(".downIcon")
                .style("opacity", 0);

              icon.style("opacity", 1);

              // if (dataId === d.id) {
              //   // svg.selectAll(".downIcon")
              //   //   .style("opacity", 0);

              //   // icon
              //   //   .style("opacity", 1);

              //   // svg.selectAll(".percentageGroup")
              //   //   .style("opacity", 0);
              //   // percentageGroup.style("opacity", 0);
              // } else {
              //   svg.selectAll(".percentageGroup")
              //     .style("opacity", 1);
              //   percentageGroup.style("opacity", 0);

              //   svg.selectAll(".downIcon")
              //     .style("opacity", 0);

              //   icon.style("opacity", 1);

              //}
              component.props.animateFauxDOM(200);


            })
            .on("mouseout", function (d) {
              //component.props.animateFauxDOM(200);
              //d3.select(this.parentNode).select("g").select(".downIcon")
              // icon//.style("pointer-events", "none")
              //   .style("opacity", 0)

              // //console.log();

              // // d3.select(this.parentNode).select("g").select(".downIcon")
              // //   .attr("xlink:href", downIcon);

              // percentageGroup.style("opacity", 1);
            })
        }

      })






      // UPDATE
      var nodeUpdate = nodeEnter.merge(node);

      // Transition to the proper position for the node
      nodeUpdate.transition()
        .duration(duration)
        .attr("transform", function (d) {
          //console.log(d)
          if (index && index < d.id) {
            return "translate(" + d.y + "," + (d.x + 150) + ")";
          } else {
            return "translate(" + d.y + "," + d.x + ")";
          }

        });

      // Update the node attributes and style
      // nodeUpdate.select('circle.node')
      //   .attr('r', 10)
      //   .style("fill", function (d) {
      //     return d._children ? "lightsteelblue" : "#fff";
      //   })
      //   .attr('cursor', 'pointer');


      //Remove any exiting nodes
      var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) {
          return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

      // On exit reduce the node circles size to 0
      // nodeExit.select('circle')
      //   .attr('r', 1e-6);

      // On exit reduce the opacity of text labels
      // nodeExit.select('text')
      //   .style('fill-opacity', 1e-6);

      // ****************** links section ***************************

      // Update the links...
      var link = svg.selectAll('path.link')
        .data(links, function (d) { return d.id; });

      // Enter any new links at the parent's previous position.
      var linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .attr('d', function (d) {
          var o = { x: source.x0, y: source.y0 }
          return diagonal(o, o)
        });

      // UPDATE
      var linkUpdate = linkEnter.merge(link);

      // Transition back to the parent element position
      linkUpdate.transition()
        .duration(duration)
        .attr('d', function (d) { return diagonal(d, d.parent) });

      // Remove any exiting links
      var linkExit = link.exit().transition()
        .duration(duration)
        .attr('d', function (d) {
          var o = { x: source.x, y: source.y }
          return diagonal(o, o)
        })
        .remove();

      // Store the old positions for transition.
      nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      // Creates a curved (diagonal) path from parent to the child nodes
      function diagonal(s, d) {


        var path;

        if (index && index < s.id) {
          path = `M ${s.y} ${s.x + 150}
                  C ${(s.y + d.y + 285) / 2} ${s.x + 150},
                    ${(s.y + d.y + 285) / 2} ${d.x},
                    ${d.y + 285} ${d.x}`;

        } else {
          if (!d.parent) {
            path = `M ${s.y} ${s.x}
                  C ${(s.y + d.y + 219) / 2} ${s.x},
                    ${(s.y + d.y + 219) / 2} ${d.x},
                    ${d.y + 219} ${d.x}`;
          } else {
            path = `M ${s.y} ${s.x}
                  C ${(s.y + d.y + 285) / 2} ${s.x},
                    ${(s.y + d.y + 285) / 2} ${d.x},
                    ${d.y + 285} ${d.x}`;
          }
        }



        return path;
      }

      // Toggle children on click.
      // function click(d) {
      //   console.log(d)
      //   if (d.children) {
      //       d._children = d.children;
      //       d.children = null;
      //     } else {
      //       d.children = d._children;
      //       d._children = null;
      //     }
      //   update(d);
      // }


      function click(d) {


        // d = d.parent

        // if (d.children) {
        //     d._children = d.children;
        //     d.children = null;
        //   } else {
        //     d.children = d._children;
        //     d._children = null;
        //   }

        //node.eachBefore(function (d) {
        //if (d.data.elementPosition === "end") {
        // d.y0 = d.y;
        // d.y = d.y + 200;ß
        //}
        //})

        //node.parent.children = null;

        //d.children = null;
        if (dataId === d.id) {
          dataId = null;
          update(d);
        } else {
          update(d, d.id);
          dataId = d.id;
        }



        //console.log(dataId,d.id)
      }

      component.props.animateFauxDOM(800);

    }


  }

}

// Chart.defaultProps = {
//   chart: 'loading...'
// }

// Chart.propTypes = {
//   title: PropTypes.string.isRequired,
//   data: PropTypes.arrayOf(PropTypes.number).isRequired
// }

const FauxChart = withFauxDOM(Chart);

export default FauxChart;
