/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

const Context = createContext()

export const Provider = ({ children }) => {
	const [loading, setLoading] = useState(false)
	const [isSent, setIsSent] = useState(false)
	const [isError, setIsError] = useState(false)

	return (
		<Context.Provider
			value={{
				loading,
				setLoading,
				isSent,
				setIsSent,
				isError,
				setIsError,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default Context
