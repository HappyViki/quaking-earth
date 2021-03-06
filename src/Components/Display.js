import React from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3';
import './Display.css';

class Display extends React.Component {

	 componentDidMount() {
      this.visualize()
   }

	 componentDidUpdate() {
      this.visualize()
   }

	 visualize = () => {

		const data = this.props.features

		const hasChildren = d3.select('svg').select('g')

		if (hasChildren) {
			hasChildren.remove()
		}

		if (data.length > 0) {

			const dataSet = data.slice(0,100)

			console.log("Display:", data);

			const tooltip = d3.select(".tooltip")

			const height = 490
			const zoom = 20

			const rainbow = d3.scaleSequential(d3.interpolateInferno).domain([0,6])

			const svg = d3.select('svg')

			const ripples = svg.append("g")

			ripples.selectAll('circle.ripple')
				.data(dataSet)
				.enter().append('circle')
				.attr('class', 'ripple')
				.attr('cy', height / 2)
				.attr('r', (d, i, n) => {
					const radius = (1 + i) * zoom
					if (i === n.length - 1) {
						svg.attr("width", radius + 10)
					}
					return radius
				})
				.attr('stroke', (d) => rainbow(Math.round(d.mag)))
				.on('mousemove', (d, i, n) => {
					tooltip.style("opacity","1")
						.style("left",d3.event.pageX + 'px')
						.style("top",d3.event.pageY + 'px')
						.html(`${new Date(d.time).toUTCString()}<br/>${d.title}`)
				})
				.on("mouseout", () => {
					tooltip.style("opacity","0")
				})
		}

	 }

	render() {
		return <div className="svg-container"><svg className="svg" /></div>
	}
}

const mapStateToProps = state => {
	return {
		features: state.data.length ? state.data[state.currentPanel].features : {},
	};
};

export default connect(mapStateToProps)(Display)
