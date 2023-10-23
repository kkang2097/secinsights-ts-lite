//TODO: On change, call the ChatEngine and update the list
//Expand this later
import {React, useState} from 'react';


export const InputBox = ({inputCallback}: {inputCallback: Function}) => {

    const [query, setQuery] = useState('');

    //TODO: Check this too
    return (
        <div className="chat-message clearfix">
          <div className="input-group">
            <div className="input-group addon">
              <span>
                <i className="fa fa-send"></i>
              </span>
            </div>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                inputCallback(query);
              }}
            >
              <input
                className="input-box"
                type="textarea"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </form>
          </div>
        </div>
      );
      
}