export function DateFinder(){
    function datefun(){
        var userDate= document.getElementById("userDate").value
        var date=new Date(userDate)
        date.setDate(date.getDate()+90)
        alert("Your Course End in"+date.toLocaleDateString())
    }
    return(
        <>
            <div className="d-flex flex-column align-items-center mt-5">
                <h4>Enter Your course start date </h4>
                <input type="date" id="userDate"/>
                <button className="btn btn-primary" onClick={datefun}>Click</button>
            </div>
        </>
    );
}