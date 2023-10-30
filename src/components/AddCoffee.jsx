import './addCoffee.css'


export default function AddCoffee(){

    const getCoffees = () => {
        fetch('https://first-deployed-api-c12.web.app/coffees')
        .then(res => res.json())
        .then(data => console(data))
        .catch(alert)
    }


const handleSubmit = (e) => {
    e.preventDefault()
    // gather form data
    // e.target is the form
    // e.target.name is the input "name"
    // e.target.name.value is the value of the input "name"
    const name = e.target.name.value
    const reciepe = e.target.reciepe.value
    const description = e.target.description.value
    // create a coffeee object
    const newCoffee = {name, reciepe, description}
    // POST the newCoffee object to the API
    fetch('https://first-deployed-api-c12.web.app/coffees',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCoffee),
    })
    .then(res => res.json())
    .then(data =>  {
        // check if the message is "Success"
        if(data.message === "Success!") {
            e.target.name.value = ''
            e.target.reciepe.value = ''
            e.target.description.value = ''
            getCoffees()
        }
    })

    .catch(alert)
}


    return (
        <section className="coffee-form">
            <h2>Add a coffee</h2>
            <form onSubmit={ handleSubmit}>
               

                <label htmlFor="name">
                    Name:
                    <input type="text" name="name" />
                </label>

                <label htmlFor="reciepe">
                    Recipe:
                    <input type="text" name="reciepe" />
                </label>

                <label htmlFor="description">
                    Description:
                    <input type="text" name="description" />
                </label>

                <input type="submit" value="Add" className='add-btn' />


            </form>
        </section>
    )
}