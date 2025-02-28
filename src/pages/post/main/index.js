import React, { useState, useEffect } from 'react';
import { MdDateRange } from 'react-icons/md';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { } from '../../../functions/post'
import {
	AiOutlineComment,
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
	AiFillYoutube,
	AiFillFacebook,
	AiFillTwitterSquare
} from 'react-icons/ai';
import './style.scss';
import { Input, Button } from 'antd';
const MainBlogPosts = ({ right, height, width, fontSize, imgSrc, desc, title }) => {
	return (
		<div className="mn-blg-pst" style={{ padding: '2px' }}>
			<img right={right} width={width} height={height} src={imgSrc} alt="source" />
			<div className="nsd-hr-img  ml-2" style={{ transform: 'translateY(-120%)' }}>
				<div>
					<h2 style={{ color: 'white', fontSize: fontSize }}>{title}</h2>
					<span style={{ color: 'white' }}>
						By : Someone <MdDateRange /> March 12,2017 <AiOutlineComment /> 4
					</span>
				</div>
			</div>
		</div>
	);
};

const FeaturedBlog = ({ imgSrc, title, desc }) => {
	return (
		<div className="">
			<div className="ftd-crd">
				<img width="100%" src={imgSrc} alt=" source" />
			</div>
			<div style={{ marginTop: '3px' }}>
				<h6>{title}</h6>
			</div>
			<p style={{ fontSize: '10px', color: 'gray' }} dangerouslySetInnerHTML={{ __html: desc }} />

			<br />
			<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
				<h6 style={{ fontWeight: 'bolder', fontSize: '10px' }}>
					Steve Jobs &nbsp; &nbsp;<span style={{ fontWeight: 'lighter', fontSize: '10px' }}>
						{' '}
						August 17,2018
					</span>
				</h6>
				<hr />
			</div>
		</div>
	);
};

const LatestBlog = () => {
	return (
		<div className="">
			<div className="featured-card">
				<img
					width="200px"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
				<div className="featured-card-overly">
					<h6>Develop & design</h6>
				</div>
			</div>
			<div style={{ marginTop: '26px' }}>
				<h6 style={{ fontSize: '10px' }}>Here is heading About the blog that is related to their topics</h6>
			</div>
			<div style={{ display: 'flex' }}>
				<p style={{ fontWeight: 'bolder', fontSize: '10px' }}>
					Steve Jobs <span style={{ fontWeight: 'lighter', fontSize: '10px' }}>August 17,2018</span>
				</p>
			</div>
		</div>
	);
};

const DesignHouse = () => {
	return (
		<div className="m-0">
			<div className="featured-card">
				<img
					width="100%"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
				<div className="featured-card-overly">
					<p style={{ fontSize: '10px' }}>Develop & design</p>
				</div>
			</div>
			<div style={{ padding: '5px' }}>
				<h6>Here is heading About the blog that is related to their topics</h6>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<p style={{ fontWeight: 'lighter', fontSize: '10px' }}>
					Steve Jobs &nbsp;&nbsp;&nbsp;<span style={{ fontWeight: 'lighter', fontSize: '10px' }}>
						August 17,2018
					</span>
				</p>
			</div>
		</div>
	);
};

const MostPopular = () => {
	return (
		<div className="most-popular mt-3 mb-1">
			<div>
				<img
					id="mostpopularimg"
					width="100px"
					height="80px"
					src="https://images.unsplash.com/photo-1611338522368-3fccf11b4afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
					alt=" source"
				/>
			</div>
			<div>
				<p style={{ fontSize: '12px', margin: '0' }}>
					Here is heading about the post blog that is related to their blog
				</p>
				<br />
				<br />
				<span>August222,2020</span>
			</div>
		</div>
	);
};
const DentalPopular = ({ imgSrc, title, desc }) => {
	return (
		<div className="most-popular mt-3 mb-1">
			<div>
				<img id="mostpopularimg" width="100px" height="80px" src={imgSrc} alt=" source" />
			</div>
			<div>
				<p style={{ fontSize: '12px', margin: '0' }}>{title}</p>
				<br />
				<br />
				<span>August 22,2020</span>
			</div>
		</div>
	);
};

const SocialConnection = ({ Icon, sb, message }) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
			<div>
				{Icon}
				<span style={{ marginLeft: '15px', fontWeight: 'bolder' }} />
			</div>
			<div style={{ marginTop: '20px', fontWeight: 'bold' }}>{message}</div>
		</div>
	);
};

function Main() {
	const [ search, setSearch ] = useState('');
	// const [ value, setValue ] = useState('');
	const [ posts, setPosts ] = useState([]);
	const [ dental, setDental ] = useState([]);
	const [ technology, setTechnology ] = useState([]);
	const [ education, setEducation ] = useState([]);
	const handleSearch = (value) => {
		axios.get(`${process.env.REACT_APP_API}/post/search/${value}`).then((res) => {
			setPosts(res.data);
		});
	};
	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API}/postslist`).then((res) => {
			if (res.data) {
				console.log("useEffect",res.data)
				const dentalNews = res.data.filter((i) => i.postcategory.slug === 'dental-news');
				const techno = res.data.filter((i) => i.postcategory.slug === 'technology');
				const edu = res.data.filter((i) => i.postcategory.slug === 'education');
				setEducation(edu);
				setTechnology(techno);
				setDental(dentalNews);
			}
		});
	}, []);
	// console.log("dental", dental);
	// console.log("education", education);
	// console.log("technology",technology);
	return (
		<div className="container-fluid mt-5" style={{ width: '999px' }}>
			<div className="row">
				<div className="col-12">
					<div style={{ display: 'flex' }}>
						<Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Blog" />
						<Button disabled="true" onClick={handleSearch(search)}>
							Search
						</Button>
					</div>
				</div>
				<div className="col-12">
					<div style={{ padding: '3px 10px' }}>
						{search.length === 0 ? (
							''
						) : posts === null ? (
							<div>Not found</div>
						) : (
							posts.map((post) => {
								if (!post) {
									return <div>Blog Not found</div>;
								}
								return (
									<div style={{ fontSize: '20px' }}>
										<Link to={`/posts/${post.slug}`} key={post.slug}>
											{post.title}
										</Link>
										<br />
									</div>
								);
							})
						)}
						{/* {posts ===null ?<div>Not found</div> : posts.map((post) => {
							if (!post) {
								return(<div>Blog Not found</div>)
							}
							return (
								<div>
								<Link to={`/posts/${post.slug}`} key={post.slug}>
									{post.title}
								</Link>
								<br />
								</div>
							);
						})} */}
					</div>
				</div>
				<div
					className="col-sm-12 col-md-6 col-lg-6 position-relative"
					style={{ transform: 'translateX(-4px)' }}
				>
					<Link to={`/post/${dental.map((i) => i.slug).reverse().slice(0, 1)}`}>
						<MainBlogPosts
							width="499px"
							height="332.5px"
							fontSize="22px"
							imgSrc={dental.map((i) => i.images[0].url).reverse().slice(0, 1)}
							desc={dental.map((i) => i.description).reverse().slice(0, 1)}
							title={dental.map((i) => i.title).reverse().slice(0, 1)}
						/>
					</Link>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-6">
					<div className="row">
						<div className="col-sm-12 col-md-12 col-lg-12">
							<Link to={`/post/${technology.map((i) => i.slug).reverse().slice(0, 1)}`}>
								<MainBlogPosts
									width="100%"
									height="180px"
									fontSize="20px"
									imgSrc={technology.map((i) => i.images[0].url).reverse().slice(0, 1)}
									desc={technology.map((i) => i.description).reverse().slice(0, 1)}
									title={technology.map((i) => i.title).reverse().slice(0, 1)}
								/>
							</Link>
						</div>
						<div className="col-sm-12 col-md-12 col-lg-12 position-absolute" style={{ top: '182.5px' }}>
							<div className="row position-relative">
								<div className="col-sm-12 col-md-6 col-lg-6">
									<Link to={`/post/${education.map((i) => i.slug).reverse().slice(0, 1)}`}>
										<MainBlogPosts
											width="107%"
											fontSize="12px"
											height="150px"
											imgSrc={education.map((i) => i.images[0].url).reverse().slice(0, 1)}
											desc={education.map((i) => i.description).reverse().slice(0, 1)}
											title={education.map((i) => i.title).reverse().slice(0, 1)}
										/>
									</Link>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6" style={{ transform: 'translateX(-15px)' }}>
									<Link to={`/post/${education.map((i) => i.slug).reverse().slice(1, 2)}`}>
										<MainBlogPosts
											marginRight="5px"
											width="107%"
											fontSize="12px"
											height="150px"
											imgSrc={education.map((i) => i.images[0].url).reverse().slice(1, 2)}
											desc={education.map((i) => i.description).reverse().slice(1, 2)}
											title={education.map((i) => i.title).reverse().slice(1, 2)}
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-5" id="fsectitle" style={{ transform: 'translateY(-110px)' }}>
				<div className="col-sm-12 col-md-8 col-lg-8 d-inline">
					<div className="black-heading d-inline-block">
						<span style={{ backgroundColor: '#fcad03' }}>Don't Miss</span>
						<p className="d-inline">All</p>
					</div>
					<hr
						style={{
							border: '2px solid #fcad03',
							backgroundColor: '#fcad03',
							padding: '0px',
							margin: '0px'
						}}
					/>
					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-6 mt-3">
							<Link to={`/post/${dental.map((i) => i.slug).reverse().slice(1, 2)}`}>
								<FeaturedBlog
									height="300px"
									imgSrc={dental.map((i) => i.images[0].url).reverse().slice(1, 2)}
									desc={dental.map((i) => i.description).reverse().slice(1, 2)}
									title={dental.map((i) => i.title).reverse().slice(1, 2)}
								/>
							</Link>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-6">
							{dental
								.map((i) => {
									return (
										<Link to={`/post/${i.slug}`} key={i.slug}>
											{' '}
											<DentalPopular imgSrc={i.images[0].url} title={i.title} desc={i.desc} />
										</Link>
									);
								})
								.reverse()
								.slice(2, 6)}
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-md-4 col-lg-4">
					<div className="black-heading">
						<span>STAY CONNECTED</span>
					</div>
					<hr
						style={{ border: '2px solid black', backgroundColor: 'black', padding: '0px', margin: '0px' }}
					/>
					<SocialConnection Icon={<AiFillFacebook size={44} color="#3b5998" />} />
					<SocialConnection Icon={<AiFillYoutube size={44} color="#FF0000" />} />
					<hr />

					<div className="col-sm-12 col-md-6 col-lg-12">
						{[ 0, 1, 2, 3 ].map((item) => {
							return <MostPopular />;
						})}
					</div>
				</div>
			</div>
			<div className="row mt-1" id="ssectitle" style={{ transform: 'translateY(-290px)' }}>
				<div className="col-sm-12 col-md-8 col-lg-8">
					<div className="black-heading">
						<span style={{ backgroundColor: 'green' }}>Don't Miss</span>
						<p>All</p>
					</div>
					<hr
						style={{
							border: '2px solid green',
							backgroundColor: 'green',
							padding: '0px',
							margin: '0px'
						}}
					/>

					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-6 mt-3">
							<FeaturedBlog height="300px" />
							<hr />
							{[ 0, 1 ].map((i) => <MostPopular />)}
						</div>
						<div className="col-sm-12 col-md-6 col-lg-6 mt-3">
							<FeaturedBlog height="300px" />
							<hr />
							{[ 0, 1 ].map((i) => <MostPopular />)}
						</div>

						<div className="col-sm-12 col-md-12 col-lg-12 mt-5" id="tsectitle">
							<div className="black-heading">
								<span style={{ backgroundColor: 'grey' }}>House Design</span>
								<p>All</p>
							</div>
							<hr
								style={{
									border: '2px solid grey',
									backgroundColor: 'grey',
									padding: '0px',
									margin: '0px'
								}}
							/>
							<div className="row mt-3 mb-0">
								<div className="col-sm-12 col-md-4 col-lg-4">
									<DesignHouse />
								</div>
								<div className="col-sm-12 col-md-4 col-lg-4">
									<DesignHouse />
								</div>
								<div className="col-sm-12 col-md-4 col-lg-4">
									<DesignHouse />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
