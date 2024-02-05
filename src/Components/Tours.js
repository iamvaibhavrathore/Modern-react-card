import Card from './Card';
 


function Tours({tours, removeTour}){
    return(
        <div className='container'>
            <div>
                <h2 className='title'>Plan with Vabthor</h2>
            </div>
            <div className='cards'>
                {/* to create single line code to fetch multiple card data */}
                {
                    tours.map( (tour) =>{     {/*Map function use krte h humesha key pass kro (jaha map krre, agar koi bhi identifier nhi h to index pass kr do {index}) */} 
                        return <Card key={tour.id}{...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>


        </div>
    )

}

export default Tours;