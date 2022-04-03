const ScrollToTopHandler = (props) => {
	const { onScroll, onVisbile, visible } = props
	if (typeof window === 'object') window.addEventListener('scroll', onVisbile)
	return (
		<>
			<div
				style={{
					position: 'fixed',
					bottom: 100,
					right: 1,

				}}>
				<button className='ScrollTop' onClick={onScroll} style={{ display: visible ? 'inline-block' : 'none'}}>
					<svg id="ScrollTop_Icon" className="ScrollTop_Icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" 
					viewBox="0 0 32 32">
						<path d="M21.38,11.62l-1.87,1.87L17,11A1.47,1.47,0,0,0,15,11l-2.48,2.48-1.87-1.87,4.79-4.79a.85.85,0,0,1,1.18,0Z"/>
						<path d="M23.09,8.93l-1.27,1.28L17,5.42a1.47,1.47,0,0,0-2.06,0l-4.79,4.79L8.91,8.93a.82.82,0,0,1,0-1.17l6.5-6.51a.85.85,0,0,1,1.18,0l6.5,6.51A.82.82,0,0,1,23.09,8.93Z"/>
						<path d="M23.09,13.34l-1.27-1.28-.44-.44L16.59,6.83a.85.85,0,0,0-1.18,0l-4.79,4.79-.44.44L8.91,13.34a.84.84,0,0,0,0,1.19l1.27,1.27L12,13.94,15,11A1.47,1.47,0,0,1,17,11L20,13.94l1.86,1.86,1.27-1.27A.84.84,0,0,0,23.09,13.34Z"/>
						<path d="M23.1,20.1l-6.51,6.51a.85.85,0,0,1-1.18,0L8.9,20.1a.83.83,0,0,1,0-1.17l1.28-1.28.44-.44,1.87-1.87.44-.44,2.48-2.48a.83.83,0,0,1,1.18,0l2.48,2.48.44.44,1.87,1.87.44.44,1.28,1.28A.83.83,0,0,1,23.1,20.1Z"/>
						<circle cx="16" cy="29.4" r="1.58"/></svg>
					SCROLL TO TOP
				</button>
			</div>
		</>
	)
}

export default ScrollToTopHandler