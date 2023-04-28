import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMiscLoading, selectMiscLoaded, selectMiscError, selectMisc, loadMisc } from '../misc/miscSlice';
import './siteWarning.css';


export const SiteWarning = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectMiscLoading);
    const error = useSelector(selectMiscError);
    const misc = useSelector(selectMisc);
    const loaded = useSelector(selectMiscLoaded);

    useEffect(() => {
        if (!loaded) {
            dispatch(loadMisc());
        }
    }, [dispatch, loaded]);

    if (loading === true) {
        return(
            <h2 style={{textAlign: "center"}}>Loading ... </h2>
        )
    }

    if (error === true) {
        console.log("Misc Slice has loaded with error.");
        return(
            <h2 style={{textAlign: "center"}}>Error in misc data! See console log.</h2>
        )
    }

    if (Object.keys(misc)?.length === 0) {
        return(
            <h2 style={{textAlign: "center"}}>No blog found. Data is <i>undefined</i>, error likely at API. Check console log for more info.</h2>
        )
    }

    return (
        <>
        {Object.keys(misc)?.length > 0 && misc.maintenance.toLowerCase() !== "ok" 
        ?
        <div className="site-warning-background">
            <p><b>Maintenance: </b>{misc.maintenance}</p>
        </div>
        :
        null}
        </>
    )
}