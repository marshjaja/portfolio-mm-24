export default function Home() {
	const images = [
		"./public/assets/images/port-img-1-sm.jpg",
		"./public/assets/images/port-img-2-sm.jpg",
		"./public/assets/images/port-img-10-sm.jpg",
		"./public/assets/images/port-img-6-sm.jpg",
		"./public/assets/images/port-img-5-sm.jpg",
		"./public/assets/images/port-img-4-sm.jpg",
		"./public/assets/images/port-img-7-sm.jpg",
		"./public/assets/images/port-img-8-sm.jpg",
		"./public/assets/images/port-img-9-sm.jpg",
		"./public/assets/images/port-img-3-sm.jpg",
	];
	return (
		<>
			<div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4 p-2 sm:p-0">
				{images.map((src, index) => (
					<div key={index} className="mb-4 break-inside-avoid">
						<img
							src={src}
							className="w-full object-cover rounded-bl-none  rounded-tr-none rounded-tl-3xl "
						/>
					</div>
				))}
			</div>
		</>
	);
}
{
	/* // <div className="w-full sm:max-w-screen-sm lg:max-w-full min-h-screen bg-pink-500 text-white dark:bg-green-500 dark:text-black">
		// 	<h1 className="font-redhat text-4xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-7xl md:text-nowrap">
		// 		Welcome to the Projects Page
		// 	</h1>
		// </div> */
}
