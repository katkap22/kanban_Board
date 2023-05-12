import React, {useState} from "react";
import {Link} from "react-router-dom";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import s from "./Card.module.css";
import "./Card.css";


const Card = ({status, title, cardIssues, cardIssuesPrev, addIssues, changeStatus}) => {

    const [isFormVisible, setFormVisible] = useState(false);

    const onHandleChange = (e) => {
        e.preventDefault();
        changeStatus(e.target.value, status);
    }

    const newIssuesElement = React.useRef(null);

    const addNewIssues = () => {
        addIssues(newIssuesElement.current.value);
        toggleFormVisible();
        if (!newIssuesElement.current.value) {
            alert('Необходимо ввести задачу');
        }

    }
    const toggleFormVisible = () => {
        setFormVisible(!isFormVisible);
    }

    const cardIssue = cardIssues.map(i =>
        <div className={s.scrollContainer} key={i.id}>
            <div className={s.itemIssues}>
                <Link to={`issues/${i.id}`}>{i.name}</Link>
            </div>
        </div>);


    return (

        <div className={s.card}>

            <div className={s.cardTitle}>{title}</div>


            <SimpleBar autoHide={false} style={{maxHeight: 500}}>
                {cardIssue} {/* Список задач с одинаковым статусом*/}


            {(isFormVisible && status === 'backlog') &&
                <>
                    <textarea ref={newIssuesElement} className={s.input} required></textarea>
                    <hr className={s.hr}></hr>
                    <button className={s.btn}
                            onClick={status === 'backlog' && addNewIssues}>
                        <span>Submit</span>
                    </button>
                </>} {/*появляется при клике на Add card*/}

            {
                (!isFormVisible && status === 'backlog') &&
                <button className={s.btn}
                        onClick={status === 'backlog' ? toggleFormVisible : changeStatus}>
                    + Add card
                </button>
            }

            {
                status !== 'backlog' &&
                <div className="wrapper">
                    <select disabled= {(cardIssuesPrev.length === 0) && 'disabled'}
                        className={s.select}
                            onChange={onHandleChange}>
                        <option>+ Add card</option>
                        {
                            cardIssuesPrev
                                .map(issuePrev => {
                                    return (
                                        <option key={issuePrev.id}
                                                value={issuePrev.id}>
                                            {issuePrev.name}
                                        </option>
                                    )
                                })
                        }
                    </select>
                </div>

            }
            </SimpleBar>

        </div>

    );

};

export default Card;