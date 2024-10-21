export default function Home() {
	const images = [
		"./assets/images/port-img-1-sm.jpg",
		"./assets/images/port-img-2-sm.jpg",
		"./assets/images/port-img-10-sm.jpg",
		"./assets/images/port-img-6-sm.jpg",
		"./assets/images/port-img-5-sm.jpg",
		"./assets/images/port-img-4-sm.jpg",
		"./assets/images/port-img-7-sm.jpg",
		"./assets/images/port-img-8-sm.jpg",
		"./assets/images/port-img-9-sm.jpg",
		"./assets/images/port-img-3-sm.jpg",
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
