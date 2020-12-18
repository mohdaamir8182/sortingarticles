import React from 'react';
import './index.css';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Typography from '@material-ui/core/Typography';

const ActionButton = ({hitOrderChange}) => {
    return (
        <div className="container">
            <div className="iconContainer">
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=>hitOrderChange('asc')}>
                    <ArrowUpwardIcon />
                </IconButton>
                <Typography color="inherit">
                        order by asc
                </Typography>
            </div>

            <div className="iconContainer">
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=>hitOrderChange('desc')}>
                    <ArrowDownwardIcon />
                </IconButton>
                <Typography color="inherit">
                        order by desc
                </Typography>
            </div>

            <div className="iconContainer">
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=>hitOrderChange('date')}>
                    <ScheduleIcon />
                </IconButton>
                <Typography color="inherit">
                        order by date
                </Typography>
            </div>
        </div>
    )
}

export default ActionButton;
