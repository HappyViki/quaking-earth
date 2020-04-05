import React from 'react'

const Tooltip = ({
	hovering,
	title,
	time
}) => {
	return (
		<>
		{ hovering &&
			<div className="tooltip">
				<div>Title: {title}</div>
				<div>Time: {time}</div>
			</div>
		}
		</>
	)
}

export default Tooltip
