import React from 'react'

const Tabs = ({tabs, onDisplayTab, onAddTab}) => {
	return (
		<div className="tabs">
			{tabs && tabs.map((tab, key) =>
				<button key={key} className="tab" onClick={() => onDisplayTab(tab)}>{tab}</button>
			)}
			<button className="tab add_tab" onClick={onAddTab}>+</button>
		</div>
	)
}

export default Tabs
