import React from 'react'
import './ExploreContainer.css'

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
	return (
		<div className="container">
			<strong>Hello Ionic 5!</strong>
			<p>This looks so awesome!</p>
		</div>
	)
}

export default ExploreContainer
