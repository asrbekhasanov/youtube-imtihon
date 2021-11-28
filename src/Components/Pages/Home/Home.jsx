import './Home.scss';
import React from 'react';
function Home() {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_API_URL)
			.then((res) => res.json())
			.then((data) => setData([...data]));
	}, []);
	return (
		<>
			<ul className='main__data__list'>
				<form className='form__search' method='post'>
					<input className='form__search__input' type='search' placeholder='Search'/>
				</form>
				{data.length > 0 &&
					data.map((row) => (
						<li className='main__data__item' key={row.id}>
							<img
								className='main__data__image'
								src={row.thumbnailUrl}
								alt={row.title}
								width='250'
								height='150'
							/>

							<h3 className='main__data__heading'>{row.title}</h3>
						</li>
					))}
			</ul>
		</>
	);
}

export default Home;
