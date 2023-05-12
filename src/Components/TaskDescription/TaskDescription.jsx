import React, {useRef} from 'react';
import {Link, useParams} from "react-router-dom";
import ContentEditable from "react-contenteditable";
import s from "./TaskDescription.module.css";


const TaskDescription = ({issues, changeDescr}) => {
    const {issueId} = useParams();
    const issue = issues.find(issue => issue.id === issueId);

    const text = useRef(issue.description);

    const handleChange = e => {
        text.current = e.target.value;
    }

    const handleBlur = () => {
        changeDescr(issue.name, text.current);
    }

    return (
        <div className={s.wrapper}>
            {
                issue ? (
                    <>
                        <div className={s.title}>
                            <h3>{issue.name}</h3>
                            <Link to='/' className={s.link}>&times;</Link>
                        </div>

                        <ContentEditable className={s.description}
                                         html={text.current}
                                         onChange={handleChange}
                                         onBlur={handleBlur}/>
                    </>
                ) : (
                        <>
                            <h2>Issue with ID {issueId} not found</h2>
                            <Link to='/' className={s.link}>BACK</Link>
                        </>
                    )
            }
        </div>
    )
}


export default TaskDescription;