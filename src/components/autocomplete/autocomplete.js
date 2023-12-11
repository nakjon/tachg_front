
// import React, { useState } from "react";

// export default function InputAuto({
//   label,
//   pholder,
//   data,
//   onSelected,
//   onChange,
//   value
// }) {
//   const [suggestions, setSugesstions] = useState([]);
//   const [isHideSuggs, setIsHideSuggs] = useState(false);
//   const [selectedVal, setSelectedVal] = useState(value);

//   const handler = e => {
//     setSugesstions(data.filter(i => i.startsWith(e.target.value)));
//   };

//   const handleChange = e => {
//     const input = e.target.value;
//     setIsHideSuggs(false);
//     setSelectedVal(input);
//     onChange(input);
//   };

//   const hideSuggs = value => {
//     onSelected(value);
//     setSelectedVal(value);
//     setIsHideSuggs(true);
//   };

//   return (
//     <div className="sugesstion-auto">
//       <div className="form-control-auto">
//         <input
//           placeholder={pholder}
//           type="search"
//           value={selectedVal}
//           onChange={handleChange}
//           onKeyUp={handler}
//         />
//       </div>

//       <div
//         className="suggestions"
//         style={{ display: isHideSuggs ? "none" : "block" }}
//       >
//         {suggestions.map((item, idx) => (
//           <div
//             key={"" + item + idx}
//             onClick={() => {
//               hideSuggs(item);
//             }}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import './autoCom.css'
import BasicInput from "../inputbox/floatlabel/basicInput";

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
    clickFunc: () => {},
    changeFunc: () => {},
    valueField : PropTypes.string
  };

  static defaultProps = {
    suggestions: [],
    valueField: ""
  };

  constructor(props) {
    super(props);
   
    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };
  }

  onChange = e => {
    
    const { changeFunc } = this.props;
    changeFunc(e.currentTarget.value)
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {
    const { clickFunc } = this.props;
    clickFunc(e.currentTarget.innerText)
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
    
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      },
       props: {
        valueField // Get the valueField prop from props
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions ">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
       } 
    //  else {
    //     suggestionsListComponent = (
    //       <div class="no-suggestions">
    //         <em>No suggestions, you're on your own!</em>
    //       </div>
    //     );
    //   }
    }

    return (
      <Fragment>
        <BasicInput
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          //value={userInput}
          value={valueField || userInput}
        />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Autocomplete;
