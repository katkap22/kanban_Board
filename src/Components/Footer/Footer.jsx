import React from "react";
import s from "./Footer.module.css";

const Footer = ({issues, name}) => {
    let activeIssues = issues.filter(issue => issue.status === 'backlog');
    let active = activeIssues.length;

    let finishedIssues = issues.filter(issue => issue.status === 'finished');
    let finished = finishedIssues.length;
    const year = new Date().getFullYear();

    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.taskCount}>
                    <div className={s.activeTaskCount}>Active tasks: {active}</div>
                    <div>Finished tasks: {finished}</div>
                </div>
                <div className={s.create}>
                    <div>Kanban board by {name},</div>
                    <div>{year}</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
