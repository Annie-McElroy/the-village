import React from 'react';
import {Route, Link, Routes, useNavigate} from 'react-router-dom';

export default function BackMeUp() { 
  return (
		<>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">about</Link>
				</li>
			</ul>
			<Routes>		
				<Route path="/about" element={<About/>} />
				<Route path="/" element={<Home/>} />
			</Routes>
		</>
	);
}

function Home() {
  	return <>		
		<p>Home Page</p>
	</>;
}

function About() {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
	return <>	
		<button onClick={goBack}>Back</button>	
		<p>About Page</p>
	</>;
}