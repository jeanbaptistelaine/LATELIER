export default function LoadingErrorCard({ loading, error, children }) {
  console.log(error)
  if (loading || error) {
    return (
      <div className='card'>
        {loading && <p>Loading...</p>}
        {error && (
          <>
            <h2>Error</h2>
            <p>{error}</p>
          </>
        )}
        {children}
      </div>
    )
  } else return null
}
