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

			const height = 490
			const zoom = 30

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
				.attr('r', (d, i) => (1 + i) * zoom)
				.attr('fill', 'none')
				.attr('stroke', (d) => rainbow(Math.round(d.mag)))
				.attr('stroke-width', d => Math.round(d.mag*d.mag))
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
	console.log(state);
	return {
		features: state.data[state.currentIndex].features,
	};
};

export default connect(mapStateToProps)(Display)
