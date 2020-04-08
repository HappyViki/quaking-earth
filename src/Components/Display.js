import React from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3';

class Display extends React.Component {

	 componentDidMount() {
      this.visualize()
   }

	 componentDidUpdate() {
      this.visualize()
   }

	 visualize = () => {

		const data = this.props.features

		if (data) {

			console.log("visualize",data);

			const tooltip = d3.select("body").append("div").attr("class","tooltip")

			const height = 490
			const zoom = 20

			const rainbow = d3.scaleSequential(d3.interpolateInferno).domain([0,6])

			const svg = d3.select('svg')

			const hasChildren = d3.select('svg').select('g')

			if (hasChildren) {
				hasChildren.remove()
			}

			const ripples = svg.append("g")

			ripples.selectAll('circle.ripple')
				.data(data)
				.enter().append('circle')
				.attr('class', 'ripple')
				.attr('cx', 0)
				.attr('cy', height / 2)
				.attr('r', (d, i) => {
					const duration = i > 0 ? Math.floor( (d.time - data[i-1].time)/1000/60 ) : 0
					return (1 + i + duration) * zoom
				})
				.attr('fill', 'none')
				.attr('stroke', (d) => rainbow(Math.round(d.mag)))
				.attr('stroke-width', 10)
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
		return <svg
			width='100%'
			height='100%'
		/>
	}
}

const mapStateToProps = state => {
	return {
		features: state.data.length ? state.data[state.currentIndex].features : {},
	};
};

export default connect(mapStateToProps)(Display)
