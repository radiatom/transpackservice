import React, { FC } from 'react';
import s from './application.module.scss'

interface IProps {
    id: string
  }

const Application:FC <IProps> = () => {
    return (
        <div className={s.application}>
            hello
        </div>
    );
};


Application.propTypes = {

};


export default Application;
