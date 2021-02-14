import React from "react";

export function CardDetail() {
  return (
    <div className="card bg-secondary p-4">
      <div className="row">
        <div>
          <h4 className="font-Quicksand  pb-2 text-white">Card Details</h4>
        </div>
        <div className="col-12">
        </div>
        <div className="col-12">
          <label className="text-white">Name Of Card</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12">
          <label className="text-white">Card Description</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-8">
              <label className="text-white">expiration date</label>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="YY"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MM"
                  />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="col">
                <label className="text-white">cvv</label>
                <input
                  placeholder="xxx"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-danger col-4 mt-4">
                            BUY
                        </button>
                     </div>
                </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
 
  );
}

export default CardDetail;
