function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var WeatherSearchForm = function WeatherSearchForm(props) {
  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      location = _React$useState2[0],
      setLocation = _React$useState2[1];

  var onSubmitHandler = function onSubmitHandler(event) {
    event.preventDefault();
    props.setLocationCallback(location);
  };

  var onChangeHandler = function onChangeHandler(event) {
    setLocation(event.target.value);
  };

  return (
    /*#__PURE__*/
    React.createElement("div", null,
    /*#__PURE__*/
    React.createElement("form", {
      id: "query",
      onSubmit: onSubmitHandler
    },
    /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      onChange: onChangeHandler
    }),
    /*#__PURE__*/
    React.createElement("button", {
      type: "submit"
    },
    /*#__PURE__*/
    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16"
    },
    /*#__PURE__*/
    React.createElement("path", {
      d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
    })))))
  );
};

export default WeatherSearchForm;