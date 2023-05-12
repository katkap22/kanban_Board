import React from 'react';
import Card from './Card/Card';
import s from "./Board.module.css";

const Board = ({issues, addIssues, changeStatus, status, title}) => {

    return (
        <div className={s.content}>
            {

                Object.values(status).map((stat,index) => {

                    const cardIssues = issues.filter(issue => issue.status === stat) //массив задач с одинаковым статусом (для 1ой карточки)

                    const cardIssuesPrev = issues.filter(issue => issue.status === Object.values(status)[index-1]) //массив задач с предыдущим статусом (для кнопки выбора)

                    return (
                        <Card key={stat}
                              status={stat}
                              title={title[stat]}
                              cardIssues={cardIssues}
                              cardIssuesPrev={cardIssuesPrev}
                              addIssues={addIssues}
                              changeStatus={changeStatus}
                        />
                    )
                })
            }
        </div>
    );
};

export default Board;


