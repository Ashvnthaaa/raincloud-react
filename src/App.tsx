import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components/header";

export function App() {
	const blogposts = ["blogpost01", "blogpost02", "blogpost03"];
	return (
		<>
			<Header />
			{/* <!--three cols with each title and textbox --> */}
			<section id="rainbow-cols" className="flex flex-row gap-5 py-5 mx-16">
				<div
					id="blue-strip"
					className="w-96 h-auto bg-blue-400 rounded-full mt-40"
				>
					<div className="flex flex-col py-5">
						{blogposts.map((blogpost) => (
							<div
								id="blog-entry-blue-01"
								key={blogpost}
								className="text-white m-8"
							>
								<p id="blog-title-blue-01" className="font-bold text-3xl mb-4">
									Title
								</p>
								<p id="blog-subtitle-blue-01" className="italic text-xl mb-4">
									Subtitle
								</p>
								<img
									src="https://images.unsplash.com/photo-1662919552565-6ff1e6ce5cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
									alt=""
									className="h-80 w-96 my-2"
								/>
								<p id="blog-text-blue-01" className="text-justify text-l mb-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Inventore, soluta voluptate excepturi nesciunt ipsa natus sunt
									ducimus repudiandae aspernatur dicta molestiae voluptas
									dolorem magni, corporis, accusantium cumque officiis autem
									facilis. Lorem ipsum dolor sit amet consectetur, adipisicing
									elit. Nemo enim saepe error quam obcaecati recusandae?
									Tempora, harum cum soluta pariatur corporis fugit fuga ad
									impedit facere eveniet porro quam laborum? Lorem ipsum dolor
									sit amet consectetur, adipisicing elit. Vel dolore maxime
									tempora nulla alias sit, a officia magni inventore, enim
									repellat perspiciatis dolor repudiandae voluptates nesciunt
									explicabo voluptatem labore asperiores.
								</p>
							</div>
						))}
					</div>
					{/* <div id="blog-entry-blue-01" className="m-8">
						<p id="blog-title-blue-01" className="font-bold text-3xl mb-4">
							Title 2
						</p>
						<p id="blog-subtitle-blue-01" className="italic text-xl mb-4">
							Subtitle
						</p>
						<img
							src="https://images.unsplash.com/photo-1662919552565-6ff1e6ce5cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
							alt=""
							className="h-80 w-96 my-2"
						/>
						<p id="blog-text-blue-01" className="text-justify text-l mb-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Inventore, soluta voluptate excepturi nesciunt ipsa natus sunt
							ducimus repudiandae aspernatur dicta molestiae voluptas dolorem
							magni, corporis, accusantium cumque officiis autem facilis. Lorem
							ipsum dolor sit amet consectetur, adipisicing elit. Nemo enim
							saepe error quam obcaecati recusandae? Tempora, harum cum soluta
							pariatur corporis fugit fuga ad impedit facere eveniet porro quam
							laborum? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Vel dolore maxime tempora nulla alias sit, a officia magni
							inventore, enim repellat perspiciatis dolor repudiandae voluptates
							nesciunt explicabo voluptatem labore asperiores.
						</p>
					</div> */}
					<div id="blog-entry-blue-02" className="m-8">
						<p id="blog-title-blue-02" className="font-bold text-3xl mb-4">
							Title
						</p>
						<p id="blog-subtitle-blue-02" className="italic text-xl mb-4">
							Subtitle
						</p>
						<img
							src="https://images.unsplash.com/photo-1662919552565-6ff1e6ce5cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
							alt=""
							className="h-80 w-96 my-2"
						/>
						<p id="blog-text-blue-02" className="text-justify text-l mb-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Inventore, soluta voluptate excepturi nesciunt ipsa natus sunt
							ducimus repudiandae aspernatur dicta molestiae voluptas dolorem
							magni, corporis, accusantium cumque officiis autem facilis. Lorem
							ipsum dolor sit amet consectetur, adipisicing elit. Nemo enim
							saepe error quam obcaecati recusandae? Tempora, harum cum soluta
							pariatur corporis fugit fuga ad impedit facere eveniet porro quam
							laborum? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Vel dolore maxime tempora nulla alias sit, a officia magni
							inventore, enim repellat perspiciatis dolor repudiandae voluptates
							nesciunt explicabo voluptatem labore asperiores.
						</p>
					</div>
				</div>
				<div
					id="yellow-strip"
					className="w-96 h-screen bg-yellow-400 rounded-full mt-20"
				>
					<p id="blog-title-yellow">Title</p>
					<p id="blog-text-yellow">Text</p>
				</div>
				<div
					id="purple-strip"
					className="w-96 h-screen bg-purple-400 rounded-full"
				>
					<p id="blog-title-purple">Title</p>
					<p id="blog-text-purple">Text</p>
				</div>
			</section>
			{/* copyright + legal links */}
			<footer className="w-screen fixed bottom-0 flex flex-row items-center text-white gap-4 p-0 left-0 h-10 bg-blue-800">
				<div>Ⓒ Rainbow Clouds Ltd 2022</div>
				<div>Imprint</div>
				<div>Privacy Policy</div>
				<div>Sitemap</div>
				<div>Contact</div>
			</footer>
		</>
	);
}

export default App;
