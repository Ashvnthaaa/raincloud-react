import { useState } from "react";

export function Header() {
	return (
		<header className="flex items-center justify-between bg-yellow-700 h-auto mx-16">
			<div className="h-10 w-12">
				<a href="index.html">
					<img src="raincloud-logo.png" alt="cloud icon" />
				</a>
			</div>
			<div className="h-9 w-9">
				<img src="rainbowcloud-burger menu.png" alt="three coloured lines" />
			</div>
		</header>
	);
}
