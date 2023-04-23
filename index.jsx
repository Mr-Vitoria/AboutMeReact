const rootNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootNode);


class Image extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <img src={this.props.imgUrl} />
    }
}
class MainInformation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <div>
                <p>Имя: <span>{this.props.name}</span></p>
                <p>Фамилия: <span>{this.props.surname}</span></p>
                <p>Возраст: <span>{this.props.age}</span></p>
                <div class="form-floating">
                    <textarea readOnly="true" value={this.props.description} class="form-control" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Описание</label>
                </div>
            </div>
        </div>
            ;
    }
}

class ChangeInformation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                     aria-expanded="false" aria-controls="flush-collapseOne">
                        Изменить информацию на странице
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <div class="mb-3">
                            <label for="nameInput" class="form-label">Имя</label>
                            <input ref={this.props.inputNameRef} type="text" class="form-control" id="nameInput" />
                            <label for="surnameInput" class="form-label">Фамилия</label>
                            <input ref={this.props.inputSurnameRef} type="text" class="form-control" id="surnameInput" />
                            <label for="ageInput" class="form-label">Возраст</label>
                            <input ref={this.props.inputAgeRef} type="number" class="form-control" id="ageInput" />
                            <label for="descriptionInput" class="form-label">Описание</label>
                            <textarea ref={this.props.inputDescRef} type="text" class="form-control" id="descriptionInput" />
                            <label for="imgUrlInput" class="form-label">Img url:</label>
                            <textarea ref={this.props.inputImgRef} type="text" class="form-control" id="imgUrlInput" />
                        </div>
                        <button onClick={this.props.saveClickHandler} class="btn btn-primary">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>;
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

        }

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
        return <>
            <div className="imgContainer">
                <Image imgUrl={this.state.imgUrl} />
            </div>
            <div className="mainInfoContainer">
                <div>
                    <MainInformation name={this.state.name}
                        surname={this.state.surname}
                        age={this.state.age}
                        description={this.state.description}
                    />
                    <ChangeInformation inputNameRef={this.inputNameRef}
                        inputSurnameRef={this.inputSurnameRef}
                        inputAgeRef={this.inputAgeRef}
                        inputDescRef={this.inputDescRef}
                        inputImgRef={this.inputImgRef}
                        saveClickHandler={this.saveClickHandler}
                    />
                </div>

            </div>
        </>
    }
}

root.render(
    <>
        <MainContainer />
    </>
);