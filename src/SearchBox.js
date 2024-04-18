const SearchBox = ({ searchChange }) => {
    
    return(
        <>
            <div className="container">
                <div className="row mt-3"> 
                    <input 
                        className='p-2' 
                        type='search' 
                        placeholder='Search User'  
                        onChange = {searchChange}
                    />
                </div>
            </div>
        </>
    )
}
export default SearchBox;