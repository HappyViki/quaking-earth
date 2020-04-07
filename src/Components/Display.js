import React from 'react'
import * as d3 from "d3";

class Display extends React.Component {
	constructor(props){
      super(props)
   }

	 componentDidMount() {
      this.visualize()
   }

	 componentDidUpdate() {
      this.visualize()
   }

	 visualize() {

	 	const node = this.node

		const magnaData = this.props.data.reverse()

		if (magnaData) {
			const height = 490
			const width = 1079
			const zoom = 30

			const rainbow = d3.scaleSequential(d3.interpolateInferno).domain([0,6])

			const x = d3.scaleBand()
										.domain(magnaData)
										.range([0,39])
										.paddingInner(0.5)

			const xAxis = d3.axisBottom(x)

			const line = d3.line()
												.x(height/2)
												.y((d,i) => i * zoom)

			const svg = d3.select('svg')

			const ripples = svg.append("g")

			ripples.selectAll('circle.ripple')
				.data(magnaData)
				.enter().append('circle')
				.attr('class', 'ripple')
				.attr('cx', 0)
				.attr('cy', height / 2)
				.attr('r', (d, i) => (1 + i) * zoom)
				.attr('fill', 'none')
				.attr('stroke', (d) => rainbow(Math.round(d.properties.mag)))
				.attr('stroke-width', d => Math.round(d.properties.mag*d.properties.mag))
		}

	 }

	render() {
		return <svg
			ref={node => this.node = node}
			width='100%'
			height='100%'
		/>
	}
}

export default Display
