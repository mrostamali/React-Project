function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var WeatherSerachForm = function WeatherSerachForm(props) {
  //defining a stateful variable for the symbol
  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      location = _React$useState2[0],
      setLocation = _React$useState2[1];

  var onSubmitHandler = function onSubmitHandler(event) {
    //console.log("Weather Search form submitted");
    console.log(location);
    event.preventDefault();
    props.setLocationCallback(location);
  };

  var onChangeHandler = function onChangeHandler(event) {
    //console.log(event.target.value)
    setLocation(event.target.value);
  };

  return (
    /*#__PURE__*/
    React.createElement("div", null,
    /*#__PURE__*/
    React.createElement("h2", null, "Weather Search Form"),
    /*#__PURE__*/
    React.createElement("form", {
      className: "frm weather",
      onSubmit: onSubmitHandler
    },
    /*#__PURE__*/
    React.createElement("label", {
      htmlFor: "location"
    }, "Location"),
    /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      id: "location",
      name: "location",
      onChange: onChangeHandler
    }),
    /*#__PURE__*/
    React.createElement("button", {
      type: "submit"
    }, "Get Weather")))
  );
};

export default WeatherSerachForm;