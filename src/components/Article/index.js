import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import  './index.css';
import EjectIcon from '@material-ui/icons/Eject';
import ScheduleIcon from '@material-ui/icons/Schedule';
import moment from 'moment';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
});

const Article = ({data}) => {

    const {title , article , upvotes , date} = data;

    const classes = useStyles();

    return (
        <div className="mainContainer">

            <div className={classes.root}>
            
                <Typography variant="h4"  align="left">
                    {title}
                </Typography>
                
                <div className="articlebody">
                    <Typography variant="body1" gutterBottom align="justify">
                        {article}
                    </Typography>
                </div>

                <div className="bottom">
                    <div className="upvotes">
                        <EjectIcon className="space"/>
                        <Typography variant="body1" gutterBottom align="center" >
                            {upvotes}
                        </Typography>
                    </div>
                    <div className="date">
                        <ScheduleIcon className="space"/>
                        <Typography variant="body1" gutterBottom align="center" >
                            {moment(date).format('YYYY/MM/DD')}
                        </Typography>
                    </div>
                </div>
            
            </div>

        </div>
    )
}

export default Article
