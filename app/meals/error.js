'use client'

export default function MealsError(error){
    console.log(error)
    return(
        <main className="error">
            <h1>An Error Occurred!</h1>
            <p>Failed to load meals data .Please  try again later.</p>  
        </main>
    )
}