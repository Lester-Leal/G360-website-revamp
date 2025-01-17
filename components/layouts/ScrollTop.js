import ScrollToTopHandler from '../modules/ScrollToTopHandler'
import { createElement, useState } from 'react'

const ScrollTop = () => {
	const [visible, setVisible] = useState(false)

	const onVisbile = () => {
		const scrolled = document.documentElement.scrollTop
		if (scrolled >= 600) setVisible(true)
		else if (scrolled <= 300) setVisible(false)
	}

	const onScroll = () => {
		if (typeof window === 'object') window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return createElement(ScrollToTopHandler, {
		onScroll,
		onVisbile,
		visible
	})
}

export default ScrollTop