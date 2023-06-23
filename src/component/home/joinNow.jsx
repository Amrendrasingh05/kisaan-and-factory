import joinNow from "./joinNow.png";

function join(){
    return(
        <>
        <div className="joinBackground" style={{ backgroundImage: `url(${joinNow})` }}>

<div>
  <p>Setup your store with</p>
  <h2>KISAAN & FACTORY</h2>
</div>

<button className="btn btn-info" onClick={joinNow}>Join Now</button>

</div>
        </>
    );
}
export default join;