import { useEffect, useState } from 'react'

const useIcon = (fileName) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [icon, setIcon] = useState(null)

    useEffect(() => {
        const fetchIcon = async () => {
            try {
                const response = await import(`../assets/icons/${fileName}`) // change relative path to suit your needs
                setIcon(response.default)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchIcon()
    }, [fileName])

    return {
        loading,
        error,
        icon,
    }
}

export default useIcon