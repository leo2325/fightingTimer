import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setExerciseTime, setRestTime, setRepetitions } from '../../../slices/timerSlice'; // Assurez-vous que le chemin est correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './index.css'

function TimerForm() {
    const dispatch = useDispatch();
    const { exerciseTime, restTime, repetitions } = useSelector((state) => state.timer);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Démarrez le timer ici avec les valeurs du formulaire
    };

    return (
        <form onSubmit={handleSubmit}>

            <div className='exercicesSettings_container'>
                            
                <div className='fightSettings_container'>
                    <h3 className='titleForm'>Réglages fight</h3>
                    <div className='formInput'>
                        <button className="chevronLeftIcon_container">
                            <FontAwesomeIcon className="controls_icon" icon={faChevronLeft} />
                        </button>
                        <input 
                            type="number" 
                            value={repetitions}
                            onChange={(e) => dispatch(setRepetitions(e.target.value))}
                            required
                        />
                        <label>ROUNDS</label>
                        <button className="chevronRightIcon_container">
                            <FontAwesomeIcon className="controls_icon" icon={faChevronRight} />
                        </button>        
                    </div>
                    <div className='formInput'>
                        <button className="chevronLeftIcon_container">
                            <FontAwesomeIcon className="controls_icon" icon={faChevronLeft} />
                        </button> 
                        <input 
                            type="number" 
                            value={exerciseTime}
                            onChange={(e) => dispatch(setExerciseTime(e.target.value))}
                            required
                        />
                        <label>MINUTES</label>
                        <button className="chevronRightIcon_container">
                            <FontAwesomeIcon className="controls_icon" icon={faChevronRight} />
                        </button> 
                    </div>
                    <div className='formInput'>     
                        <button className="chevronLeftIcon_container">
                            <FontAwesomeIcon className="controls_icon" icon={faChevronLeft} />
                        </button>        
                        <input 
                            type="number" 
                            value={restTime}
                            onChange={(e) => dispatch(setRestTime(e.target.value))}
                            required
                        />
                        <label>MINUTES DE REPOS</label>
                        <button className="chevronRightIcon_container">
                            <FontAwesomeIcon className="controls_icon" icon={faChevronRight} />
                        </button> 
                    </div>
                </div>
            
                <div className='optionsForm_container'>
                    <button className="AudioOptionsToggleButton_container">
                        <h3>Options audio</h3>
                        <FontAwesomeIcon className="controls_icon" icon={faChevronDown} />
                    </button>
                    

                    {/*<div className="TimerOptions">
                        <div className='optionsForm_container'>
                            <div className='formInput'>
                                <input type="checkbox" />
                                <label>TEMPS RESTANT (Chaque minute & 30 dernières secondes)</label>
                            </div>
                            <div className='formInput'>
                                <input type="checkbox" />
                                <label>TEMPS AVANT REPRISE (Chaque minute de repos & 30 dernières secondes)</label>
                            </div>
                            <div className='formInput'>
                                <input type="checkbox" />
                                <label>REPRISE IMMINENTE (10 secondes avant reprise)</label>
                            </div>
                        </div>
                    </div>*/}
                </div>

                <div className='submitButton_container'>
                    <div className='saveFIghtType_container'>
                        <button type="submit">SAVE</button>  
                    </div>
                    <div className='startFIghtButton_container'>
                        <button type="submit">
                            FIGHT
                            <FontAwesomeIcon className="controls_icon" icon={faBolt} />
                        </button> 
                    </div>
                </div>
                
            </div>
        </form>
    );
}

export default TimerForm;
