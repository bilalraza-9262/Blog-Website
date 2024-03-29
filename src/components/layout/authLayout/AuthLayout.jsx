import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AuthLayout = ({ children, authentication = true }) => {

	const authStatus = useSelector((state) => state.auth.status);
	const navigate = useNavigate();
	const [loading, setloading] = useState(true);

	useEffect(() => {

		    // true                     true!==true       false
		    // false                    true!==false      false
		    // true                     false!==true      true
		if (authentication && authStatus !== authentication) {
			navigate("/login")

			// false                     true!==true       false
			// true                      true!==false      true
			// false                     false!==true      false
		} else if (!authentication && authStatus !== authentication) {
			navigate("/")
		}
		setloading(false)
	}, [authStatus, authentication, navigate])

	return loading ? <h1>Loading...</h1> : <>{children}</>
}

export default AuthLayout
