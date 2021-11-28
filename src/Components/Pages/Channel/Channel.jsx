import './Channel.scss'
import React from 'react';

function About() {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_API_URL)
			.then((res) => res.json())
			.then((data) => setData([...data]));
	}, []);
	return (
		<>
			{/* 
           <iframe
				width='560'
				height='315'
				src='https://www.youtube.com/embed/lCEFwAzd93w?controls=0'
				title='YouTube video player'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen></iframe> */}
			{/* {data.length > 0 && data.map((row) => )} */}
      <img className='template__banner' src="https://via.placeholder.com/1056x200" alt="Template"  width="1056" height="200"/>
		</>
	);
}

export default About;
