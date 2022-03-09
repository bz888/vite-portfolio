import React, { useState, useEffect } from 'react'

export function useMediaQuery(query) {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const media = window.matchMedia(query)
		if (media.matches !== matches) {
			setMatches(media.matches)
		}
		const listener = () => {
			setMatches(media.matches)
		}
		media.addEventListener('change', listener)
		return () => media.removeEventListener('change', listener)
	}, [matches, query])

	return matches
}
export const useIsSmall = () => useMediaQuery('(min-width: 1366px) and (max-width: 1535px)')
export const useIsMedium = () => useMediaQuery('(min-width: 1536px) and (max-width:1910px)')