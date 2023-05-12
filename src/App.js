import './App.css';
import Board from './Components/Board/Board';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import TaskDescription from "./Components/TaskDescription/TaskDescription";
import {Routes, Route} from "react-router-dom";
import {v1} from "uuid";
import {useState, useEffect, useCallback} from "react";

function App() {
    const initIssues = JSON.parse(window.localStorage.getItem('issues')) || [];
    const [issues, setIssues] = useState(initIssues);


    const addIssues = useCallback((newIssuesName) => {
        let newIssues;
        if (newIssuesName) {
            newIssues = {
                id: v1(),
                name: newIssuesName,
                description: 'This task has no description',
                status: 'backlog'
            }
            setIssues([...issues, newIssues]);
        }
    }, [issues]);

    const changeStatus = useCallback((value, status) => {
        const index = issues.findIndex(issue => issue.id === value);
        if (index !== -1) {
            const newIssues = [...issues];
            newIssues[index] = {...newIssues[index], status: status};
            setIssues([...newIssues]);
        }
    }, [issues]);

    const changeDescr = useCallback((value, descr) => {
        const index = issues.findIndex(issue => issue.name === value);
        if (index !== -1) {
            const newIssues = [...issues];
            newIssues[index] = {...newIssues[index], description: descr};
            setIssues([...newIssues]);
        }
    }, [issues]);

    const CARDS_STATUS = {
        BACKLOG: 'backlog',
        READY: 'ready',
        IN_PROGRESS: 'inProgress',
        FINISHED: 'finished'
    }
    const CARDS_TITLE = {
        [CARDS_STATUS.BACKLOG]: 'Backlog',
        [CARDS_STATUS.READY]: 'Ready',
        [CARDS_STATUS.IN_PROGRESS]: 'In Progress',
        [CARDS_STATUS.FINISHED]: 'Finished',
    }

    const nameCreater = 'Ekaterina K.'

    useEffect(() => {
        window.localStorage.setItem('issues', JSON.stringify(issues));
    }, [issues])

    return (
        <div className="app">
            <Header/>
            <main className="main">
                <Routes>
                    <Route path='/' element={
                        <Board issues={issues} addIssues={addIssues} changeStatus={changeStatus} status={CARDS_STATUS}
                               title={CARDS_TITLE}/>
                    }/>
                    <Route path='issues/:issueId' element={
                        <TaskDescription issues={issues}
                                         changeDescr={changeDescr}/>

                    }/>
                </Routes>
            </main>
            <Footer issues={issues}
                    name={nameCreater}/>
        </div>
    );
}

export default App;
