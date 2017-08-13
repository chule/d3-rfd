import React from 'react';
//import PropTypes from 'prop-types';
import { withFauxDOM } from 'react-faux-dom';
import * as d3 from 'd3';
import './styleTree.css';

class Chart extends React.Component {
  constructor (props) {
    super(props);
    this.renderD3 = this.renderD3.bind(this)
  }

  componentDidMount () {
    this.renderD3();
  }

  componentDidUpdate (prevProps, prevState) {
    // do not compare props.chart as it gets updated in updateD3()
    if (this.props.data !== prevProps.data) {
      this.renderD3();
    }
  }

  render () {
    return (
      <div>
        {this.props.chart}
      </div>
    )
  }

  renderD3 () {

    var component = this;

    var treeData = this.props.data;

    // This will create a faux div and store its virtual DOM in state.chart
    var faux = this.props.connectFauxDOM('div', 'chart');

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

  
  // Set the dimensions and margins of the diagram
  var margin = {top: 20, right: 90, bottom: 30, left: 90},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
  
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
  root = d3.hierarchy(treeData, function(d) { return d.children; });
  root.x0 = height / 2;
  root.y0 = 0;
  
  // Collapse after the second level
  // root.children.forEach(collapse);
  // collapse(root)

  
  update(root);
  
  // Collapse the node and all it's children
  function collapse(d) {
    if(d.children) {
      d._children = d.children
      d._children.forEach(collapse)
      d.children = null
    }
  }
  
  function update(source) {
    
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
        .data(nodes, function(d) {return d.id || (d.id = ++i); });
  
    // Enter any new modes at the parent's previous position.
    var nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr("transform", function(d) {
          return "translate(" + source.y0 + "," + source.x0 + ")";
      })
      .on('click', click);
  
    // Add Circle for the nodes
    nodeEnter.append('path')
        .attr('class', 'node')
        //.attr('r', 1e-6)
        .attr("d",function (d,i) {

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
        .attr("transform", "translate(0,-15)")
        .style("fill", function(d) {
            return "#ddd"// d._children ? "lightsteelblue" : "#fff";
        });
  
    // Add labels for the nodes
    nodeEnter.append('text')
        .attr("dy", ".35em")
        .attr("x", function(d) {
            return d.children || d._children ? -13 : 13;
        })
        .attr("text-anchor", function(d) {
            return d.children || d._children ? "end" : "start";
        })
        .text(function(d) { return d.data.name; });
  
    // UPDATE
    var nodeUpdate = nodeEnter.merge(node);
  
    // Transition to the proper position for the node
    nodeUpdate.transition()
      .duration(duration)
      .attr("transform", function(d) { 
          return "translate(" + d.y + "," + d.x + ")";
       });
  
    // Update the node attributes and style
    nodeUpdate.select('circle.node')
      .attr('r', 10)
      .style("fill", function(d) {
          return d._children ? "lightsteelblue" : "#fff";
      })
      .attr('cursor', 'pointer');
  
  
    // Remove any exiting nodes
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function(d) {
            return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();
  
    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
      .attr('r', 1e-6);
  
    // On exit reduce the opacity of text labels
    nodeExit.select('text')
      .style('fill-opacity', 1e-6);
  
    // ****************** links section ***************************
  
    // Update the links...
    var link = svg.selectAll('path.link')
        .data(links, function(d) { return d.id; });
  
    // Enter any new links at the parent's previous position.
    var linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .attr('d', function(d){
          var o = {x: source.x0, y: source.y0}
          return diagonal(o, o)
        });
  
    // UPDATE
    var linkUpdate = linkEnter.merge(link);
  
    // Transition back to the parent element position
    linkUpdate.transition()
        .duration(duration)
        .attr('d', function(d){ return diagonal(d, d.parent) });
  
    // Remove any exiting links
    var linkExit = link.exit().transition()
        .duration(duration)
        .attr('d', function(d) {
          var o = {x: source.x, y: source.y}
          return diagonal(o, o)
        })
        .remove();
  
    // Store the old positions for transition.
    nodes.forEach(function(d){
      d.x0 = d.x;
      d.y0 = d.y;
    });
  
    // Creates a curved (diagonal) path from parent to the child nodes
    function diagonal(s, d) {
  
      var path = `M ${s.y} ${s.x}
              C ${(s.y + d.y) / 2} ${s.x},
                ${(s.y + d.y) / 2} ${d.x},
                ${d.y} ${d.x}`
  
      return path
    }
  
    // Toggle children on click.
    function click(d) {
      if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
      update(d);
    }
    component.props.animateFauxDOM(800)

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

const FauxChart = withFauxDOM(Chart)

export default FauxChart
