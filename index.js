const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/React.createElement("img", {
      src: this.props.imgUrl
    });
  }
}
class MainInformation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "\u0418\u043C\u044F: ", /*#__PURE__*/React.createElement("span", null, this.props.name)), /*#__PURE__*/React.createElement("p", null, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F: ", /*#__PURE__*/React.createElement("span", null, this.props.surname)), /*#__PURE__*/React.createElement("p", null, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ", /*#__PURE__*/React.createElement("span", null, this.props.age)), /*#__PURE__*/React.createElement("div", {
      class: "form-floating"
    }, /*#__PURE__*/React.createElement("textarea", {
      readOnly: "true",
      value: this.props.description,
      class: "form-control",
      id: "floatingTextarea"
    }), /*#__PURE__*/React.createElement("label", {
      for: "floatingTextarea"
    }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"))));
  }
}
class ChangeInformation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      class: "accordion accordion-flush",
      id: "accordionFlushExample"
    }, /*#__PURE__*/React.createElement("div", {
      class: "accordion-item"
    }, /*#__PURE__*/React.createElement("h2", {
      class: "accordion-header",
      id: "flush-headingOne"
    }, /*#__PURE__*/React.createElement("button", {
      class: "accordion-button collapsed",
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#flush-collapseOne",
      "aria-expanded": "false",
      "aria-controls": "flush-collapseOne"
    }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435")), /*#__PURE__*/React.createElement("div", {
      id: "flush-collapseOne",
      class: "accordion-collapse collapse",
      "aria-labelledby": "flush-headingOne",
      "data-bs-parent": "#accordionFlushExample"
    }, /*#__PURE__*/React.createElement("div", {
      class: "accordion-body"
    }, /*#__PURE__*/React.createElement("div", {
      class: "mb-3"
    }, /*#__PURE__*/React.createElement("label", {
      for: "nameInput",
      class: "form-label"
    }, "\u0418\u043C\u044F"), /*#__PURE__*/React.createElement("input", {
      ref: this.props.inputNameRef,
      type: "text",
      class: "form-control",
      id: "nameInput"
    }), /*#__PURE__*/React.createElement("label", {
      for: "surnameInput",
      class: "form-label"
    }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F"), /*#__PURE__*/React.createElement("input", {
      ref: this.props.inputSurnameRef,
      type: "text",
      class: "form-control",
      id: "surnameInput"
    }), /*#__PURE__*/React.createElement("label", {
      for: "ageInput",
      class: "form-label"
    }, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442"), /*#__PURE__*/React.createElement("input", {
      ref: this.props.inputAgeRef,
      type: "number",
      class: "form-control",
      id: "ageInput"
    }), /*#__PURE__*/React.createElement("label", {
      for: "descriptionInput",
      class: "form-label"
    }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("textarea", {
      ref: this.props.inputDescRef,
      type: "text",
      class: "form-control",
      id: "descriptionInput"
    }), /*#__PURE__*/React.createElement("label", {
      for: "imgUrlInput",
      class: "form-label"
    }, "Img url:"), /*#__PURE__*/React.createElement("textarea", {
      ref: this.props.inputImgRef,
      type: "text",
      class: "form-control",
      id: "imgUrlInput"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: this.props.saveClickHandler,
      class: "btn btn-primary"
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))));
  }
}
class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Дмитрий",
      surname: "Олейников",
      age: 17,
      description: "Я 100% написал эту страницу сам, а не скопировал чью-то работу",
      imgUrl: "https://sun1-99.userapi.com/impg/2aUh2oms_L5qws1eO9Cwsr0XiwsBef26ho9suQ/1JoU2F8in7o.jpg?size=1200x1600&quality=96&sign=06e3a5569883fc0f1dfbcaaeba280cf6&type=album"
    };
    this.saveClickHandler = this.saveClickHandler.bind(this);
    this.inputNameRef = React.createRef();
    this.inputSurnameRef = React.createRef();
    this.inputAgeRef = React.createRef();
    this.inputDescRef = React.createRef();
    this.inputImgRef = React.createRef();
  }
  componentDidMount() {
    this.inputNameRef.current.value = this.state.name;
    this.inputSurnameRef.current.value = this.state.surname;
    this.inputAgeRef.current.value = this.state.age;
    this.inputDescRef.current.value = this.state.description;
    this.inputImgRef.current.value = this.state.imgUrl;
  }
  saveClickHandler(params) {
    this.setState({
      name: this.inputNameRef.current.value,
      surname: this.inputSurnameRef.current.value,
      age: this.inputAgeRef.current.value,
      description: this.inputDescRef.current.value,
      imgUrl: this.inputImgRef.current.value
    });
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "imgContainer"
    }, /*#__PURE__*/React.createElement(Image, {
      imgUrl: this.state.imgUrl
    })), /*#__PURE__*/React.createElement("div", {
      className: "mainInfoContainer"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MainInformation, {
      name: this.state.name,
      surname: this.state.surname,
      age: this.state.age,
      description: this.state.description
    }), /*#__PURE__*/React.createElement(ChangeInformation, {
      inputNameRef: this.inputNameRef,
      inputSurnameRef: this.inputSurnameRef,
      inputAgeRef: this.inputAgeRef,
      inputDescRef: this.inputDescRef,
      inputImgRef: this.inputImgRef,
      saveClickHandler: this.saveClickHandler
    }))));
  }
}
root.render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MainContainer, null)));
