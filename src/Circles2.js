import React, { Component } from 'react';
import * as d3 from 'd3';
import './styleCircles.css';

class Chart extends Component {

    constructor(props) {
        super(props);
        this.draw = this.draw.bind(this);
        this.saveContainer = this.saveContainer.bind(this);
    }

    componentDidMount() {

        this.svg = d3.select(this.container)
            .append('svg')
            .attr('width', 1140)
            .attr('height', 1140);

        this.margin = 50;
        this.diameter = 1140;
        this.g = this.svg.append("g").attr("transform", "translate(" + this.diameter / 2 + "," + this.diameter / 2 + ")");

        this.color = d3.scaleLinear()
            .domain([-1, 5])
            .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
            .interpolate(d3.interpolateHcl);

        this.pack = d3.pack()
            .size([this.diameter - this.margin, this.diameter - this.margin])
            .padding(2);

        var defs = this.svg.append("defs");

        var filter = defs.append("filter")
            .attr("id", "drop-shadow")
            .attr("width", "130%")
            .attr("height", "130%");

        filter.append("feGaussianBlur")
            .attr("in", "SourceAlpha")
            .attr("stdDeviation", 3);


        filter.append("feOffset")
            .attr("dx", 1)
            .attr("dy", 1)
            .attr("result", "offsetBlur");

        var feComponentTransfer = filter.append("feComponentTransfer");
        feComponentTransfer.append("feFuncA")
            .attr("type", "linear")
            .attr("slope", 0.2);

        var feMerge = filter.append("feMerge");
        feMerge.append("feMergeNode");
        feMerge.append("feMergeNode")
            .attr("in", "SourceGraphic");

        this.draw(this.props);

    }

    // shouldComponentUpdate(nextProps) {
    //     return !isEqual(this.props, nextProps);
    // }

    componentWillUpdate(nextProps) {
        this.draw(nextProps);
    }

    draw(props) {

        let component = this;

        let data = props.data;

        let colors = {
            fund: "#1DD8CF",
            sector: "#BABFC2",
            subsector: "#E5E9EB",
            team: "#D97FEB",
            people: "#FFA8AF"
        }

        var root = d3.hierarchy(data)
            .sum(function (d) { return d.size; })
            .sort(function (a, b) { return b.value - a.value; });

        var focus = root,
            nodes = this.pack(root).descendants(),
            view;


        var circle = this.g.selectAll("circle")
            .data(nodes)
            .enter().append("circle")
            .attr("class", function (d) {
                return d.parent ? d.children ? "node" : "node node--leaf" : "node--root";
            })
            .style("fill", function (d) {
                if (!d.parent) {
                    return "none";
                } else {
                    return d.children ? "white" : null;
                }
            })
            .style("stroke", function (d) {
                
                let stroke;
                
                if (d.depth < 2) {
                    stroke = null;
                } else if (colors[d.data.type]) {
                    stroke = colors[d.data.type];
                }

                d.oldStroke = stroke;
                return stroke;
            })
            // .style("stroke-width", function (d) {
            //     return d.depth >= 2 ? 2 : null;
            // })
            .style("filter", function (d) {
                return d.depth === 1 ? "url(#drop-shadow)" : null;
            })
            .on("mouseover", function (d) {
                if (d.depth > 0) {
                    d3.select(this).style("stroke","#3798ED");
                }
            })
            .on("mouseout", function (d) {
                d3.select(this).style("stroke",d.oldStroke);
            })            
            .on("click", function (d) {
                if (focus !== d) {
                    d3.event.stopPropagation();
                    zoom(d);
                };

            });

        //var text = 
        this.g.selectAll("text")
            .data(nodes)
            .enter().append("text")
            .attr("class", "label")
            .style("font-size", 12)
            .style("font-family", "sans-serif")
            .style("font-weight", "bold")
            //.style("fill", "darkgrey")
            .style("text-anchor", "middle")
            .style("fill-opacity", function (d) { return d.parent === root ? 1 : 0; })
            .style("display", function (d) { return d.parent === root ? "inline" : "none"; })
            .text(function (d) { return d.data.name; });


        var node = this.g.selectAll("circle,text");

        this.svg
            .on("click", function () { zoom(root); });

        zoomTo([root.x, root.y, root.r * 2 + this.margin]);

        function zoom(d) {
            //var focus0 = focus; 

            var focus = d;
            //console.log(focus.depth);

            var transition = d3.transition()
                .duration(750)
                .tween("zoom", function (d) {
                    var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + component.margin]);
                    return function (t) { zoomTo(i(t), focus.depth); };
                });

            transition.selectAll("text")
                .filter(function (d) { return d.parent === focus || this.style.display === "inline"; })
                .style("fill-opacity", function (d) { return d.parent === focus ? 1 : 0; })
                .on("start", function (d) { if (d.parent === focus) this.style.display = "inline"; })
                .on("end", function (d) { if (d.parent !== focus) this.style.display = "none"; });
        }

        function zoomTo(v, focusDepth) {

            var k = component.diameter / v[2]; view = v;
            node.attr("transform", function (d) {
                //console.log(d)
                return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
            });
            circle
                .attr("r", function (d) {
                    return d.r * k;
                })
                .style("display", function (d) {
                    //console.log(d.depth,focusDepth)
                    if (!focusDepth) {
                        return d.depth > 2 ? "none" : "inline";
                    } else {
                        return d.depth > focusDepth + 1 ? "none" : "inline";
                    }
                })
                .style("pointer-events", function (d) {
                    //console.log(d.depth,focusDepth)
                    if (!focusDepth) {
                        return d.depth > 2 ? "none" : "all";
                    } else {
                        return d.depth > focusDepth + 1 ? "none" : "all";
                    }
                })
        }
    };

    saveContainer(container) {
        this.container = container;
    }

    render() {
        return (
            <div ref={this.saveContainer} />
        );
    }

}

export default Chart;