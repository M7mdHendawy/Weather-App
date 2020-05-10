import React from "react";

const Information = (props) => {
    return (
        // using curley bracket to make it not type celisius symbol
        <div>
            {
                props.city && <p>{props.city} , {props.country}</p>
            }
            {
                props.main && <p>{props.main}</p>
            }
            {
                props.tempreature && <p>{props.tempreature}&deg; </p>
            }

            {
                props.temp_min && <p>{props.temp_min}&deg;  &nbsp; {props.temp_max}&deg;  </p>
            }


            {
                props.description && <p>{props.description}</p>
            }
        </div>
    );
};

export default Information;
