const SearchBox = ({ searchChange }) => {
    
    return(
        <>
            <div className="container">
                <div className="row mt-3 justify-content-end"> 
                    <div className="col-md-4">
                        <input 
                            className='p-2 form-control' 
                            type='search' 
                            placeholder='Search User...'  
                            onChange = {searchChange}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchBox;